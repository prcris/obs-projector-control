-- OBS Lua Script: Scene Projector Hotkeys
-- Cria hotkeys para abrir cenas e saídas fixas como projetores em monitores específicos

local obs = obslua
local monitor_mapping = "" -- Ex: "1,public|2,screen_2"
local hotkeys = {}
local hotkeys_initialized = false
local saved_settings = nil
local enable_logging = true

-- Função centralizada de log, respeita o enable_logging
local function log(level, message)
    if enable_logging then
        obs.script_log(level, message)
    end
end

-- Abre projetor para uma cena
local function open_scene_projector(scene_name, monitor_index)
    log(obs.LOG_INFO, "Abrindo cena '" .. scene_name .. "' no monitor " .. monitor_index)
    obs.obs_frontend_open_projector("scene", monitor_index, nil, scene_name)
end

-- Abre projetor para saída fixa (program, preview, multiview)
local function open_fixed_output_projector(type_str, monitor_index)
    log(obs.LOG_INFO, "Abrindo saída fixa '" .. type_str .. "' no monitor " .. monitor_index)
    obs.obs_frontend_open_projector(type_str, monitor_index, nil, nil)
end

local function clear_hotkeys()
    for _, hotkey in ipairs(hotkeys) do
        obs.obs_hotkey_unregister(hotkey.id)
    end
    hotkeys = {}
end

local function register_hotkey(name, description, callback, settings)
    local hotkey_id = obs.obs_hotkey_register_frontend(name, description, callback)
    if hotkey_id then
        local hotkey_data = {
            id = hotkey_id,
            name = name,
        }
        table.insert(hotkeys, hotkey_data)

        local hotkey_array = obs.obs_data_get_array(settings, name)
        obs.obs_hotkey_load(hotkey_id, hotkey_array)
        obs.obs_data_array_release(hotkey_array)

        log(obs.LOG_INFO, "Hotkey registrada: " .. name)
    else
        log(obs.LOG_ERROR, "Erro ao registrar hotkey: " .. name)
    end
end

local function update_hotkeys(settings)
    clear_hotkeys()

    if monitor_mapping == nil or monitor_mapping == "" then
        log(obs.LOG_WARNING, "Mapeamento de monitores vazio.")
        return
    end

    local scenes = obs.obs_frontend_get_scenes()
    if scenes == nil then
        log(obs.LOG_ERROR, "Não foi possível obter as cenas.")
        return
    end

    for _, scene_source in ipairs(scenes) do
        local scene_name = obs.obs_source_get_name(scene_source)

        for pair in string.gmatch(monitor_mapping, "[^|]+") do
            local id_str, apelido = string.match(pair, "(%d+),([^|]+)")
            if id_str and apelido then
                local monitor_id = tonumber(id_str)
                local hotkey_name = "hk_projector_scene|" .. scene_name .. "|" .. apelido
                local hotkey_desc = "Abrir cena '" .. scene_name .. "' no monitor '" .. apelido .. "'"
                register_hotkey(hotkey_name, hotkey_desc, function(pressed)
                    if pressed then open_scene_projector(scene_name, monitor_id) end
                end, settings)
            end
        end
    end

    local fixed_types = { "program", "preview", "multiview" }

    for pair in string.gmatch(monitor_mapping, "[^|]+") do
        local id_str, apelido = string.match(pair, "(%d+),([^|]+)")
        if id_str and apelido then
            local monitor_id = tonumber(id_str)
            for _, view_type in ipairs(fixed_types) do
                local hotkey_name = "hk_projector_fixed|" .. view_type .. "|" .. apelido
                local hotkey_desc = "Abrir saída fixa '" .. view_type .. "' no monitor '" .. apelido .. "'"
                register_hotkey(hotkey_name, hotkey_desc, function(pressed)
                    if pressed then open_fixed_output_projector(view_type, monitor_id) end
                end, settings)
            end
        end
    end

    obs.source_list_release(scenes)
end

function script_update(settings)
    monitor_mapping = obs.obs_data_get_string(settings, "monitor_mapping")
    enable_logging = obs.obs_data_get_bool(settings, "enable_logging")
    saved_settings = settings
    log(obs.LOG_INFO, "Configuração recebida: " .. monitor_mapping)

    if hotkeys_initialized then
        update_hotkeys(settings)
    end
end

function script_properties()
    local props = obs.obs_properties_create()
    obs.obs_properties_add_text(props, "monitor_mapping", "Mapeamento Monitor (id,apelido)", obs.OBS_TEXT_MULTILINE)
    obs.obs_properties_add_bool(props, "enable_logging", "Ativar logs no console OBS")
    return props
end

function script_description()
    return "Cria hotkeys para abrir cenas e saídas fixas (program, preview, multiview) como projetores em monitores específicos.\n" ..
           "Formato: 1,public|2,screen_2"
end

function script_save(settings)
    for _, hotkey in ipairs(hotkeys) do
        local hotkey_array = obs.obs_hotkey_save(hotkey.id)
        if hotkey_array then
            obs.obs_data_set_array(settings, hotkey.name, hotkey_array)
            obs.obs_data_array_release(hotkey_array)
        end
    end
end

function script_load(settings)
    saved_settings = settings
    monitor_mapping = obs.obs_data_get_string(settings, "monitor_mapping") or ""
    enable_logging = obs.obs_data_get_bool(settings, "enable_logging")
    log(obs.LOG_INFO, "[script_load] Configuração carregada: " .. monitor_mapping)

    obs.timer_add(function()
        if not hotkeys_initialized then
            update_hotkeys(settings)
            hotkeys_initialized = true
        end
        obs.timer_remove(delayed_init)
    end, 2000)
end
