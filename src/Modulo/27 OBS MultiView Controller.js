var mID = '@prcris#m27';
var mUID = mID+''; 

//#import modules_generic_functions

function startup(module) { 

mUID = mID + module.id;

logState(module.settings.log, mUID, 'startup '+ mID);

}

function info() {
    return {
        id: mID,
        name: 'OBS MultiView Controller',
        permissions: [
            {
                type: 'advanced',
                key: 'allowed_files'
            }
        ],
        os_required : 'windows',
        min_version : '2.25.1',
        description:
            '<p>' +
            'This module provides full control over fullscreen output windows in OBS Studio, ' +
            'allowing you to create, toggle, and hide multiple projections with seamless Holyrics integration.' +
            '</p>' +
            '<p><strong>Important:</strong> OBS Studio must be running on the <strong>same computer</strong> where Holyrics is running.</p>' +
            '<hr>' +
            '<h4>Main Features:</h4>' +
            '<ul>' +
            '<li><strong>Dynamic creation</strong> of fullscreen output windows (program, scene or preview).</li>' +
            '<li><strong>Automatic monitor detection</strong> and link with Holyrics IDs.</li>' +
            '<li><strong>Configurable buttons</strong> based on OBS hotkeys.</li>' +
            '<li>Intuitive interface to configure each button with specific scenes and outputs.</li>' +
            '<li><strong>Direct Holyrics integration</strong> to show or hide screens as needed.</li>' +
            '<li><strong>Optional display</strong> of screen names on panel buttons.</li>' +
            '</ul>' +
            '<hr>' +
            '<p><em>*Compatible with OBS Studio 29+ with WebSocket v5 support. Requires specific Lua script in OBS for full integration.</em></p>' +
            infoVDDMM,
        i18n: {
            name: {
                pt: 'OBS MultiView Controller',
                es: 'Controlador de Pantallas OBS',
                ru: 'Контроллер окон OBS'
            },
            description: {
                pt:
                    '<p>' +
                    'Este módulo permite controle completo sobre as saídas em tela cheia do OBS Studio, ' +
                    'possibilitando criar, alternar e ocultar múltiplas projeções com integração total ao Holyrics.' +
                    '</p>' +
                    '<p><strong>Importante:</strong> o OBS Studio precisa estar sendo executado no <strong>mesmo computador</strong> onde o Holyrics está rodando.</p>' +
                    '<hr>' +
                    '<h4>Funcionalidades principais:</h4>' +
                    '<ul>' +
                    '<li><strong>Criação dinâmica</strong> de janelas de saída em tela cheia (programa, cena ou preview).</li>' +
                    '<li><strong>Detecção automática</strong> de monitores e vinculação com IDs do Holyrics.</li>' +
                    '<li><strong>Botões configuráveis</strong> com base em hotkeys do OBS.</li>' +
                    '<li>Interface intuitiva para configurar cada botão com cenas e saídas específicas.</li>' +
                    '<li><strong>Integração direta</strong> com o Holyrics para ocultar ou exibir telas conforme necessário.</li>' +
                    '<li><strong>Exibição opcional</strong> do nome da tela nos botões do painel.</li>' +
                    '</ul>' +
                    '<hr>' +
                    '<p><em>*Compatível com OBS Studio 29+ com suporte a WebSocket v5. Requer script Lua específico no OBS para vinculação completa.</em></p>' +
                    infoVDDMM,
                es:
                    '<p>' +
                    'Este módulo permite el control completo de las salidas en pantalla completa del OBS Studio, ' +
                    'permitiendo crear, alternar y ocultar múltiples proyecciones con integración total con Holyrics.' +
                    '</p>' +
                    '<p><strong>Importante:</strong> OBS Studio debe ejecutarse en la <strong>misma computadora</strong> donde se ejecuta Holyrics.</p>' +
                    '<hr>' +
                    '<h4>Funciones principales:</h4>' +
                    '<ul>' +
                    '<li><strong>Creación dinámica</strong> de ventanas de salida en pantalla completa (programa, escena o vista previa).</li>' +
                    '<li><strong>Detección automática</strong> de monitores y vinculación con IDs de Holyrics.</li>' +
                    '<li><strong>Botones configurables</strong> basados en teclas rápidas del OBS.</li>' +
                    '<li>Interfaz intuitiva para configurar cada botón con escenas y salidas específicas.</li>' +
                    '<li><strong>Integración directa</strong> con Holyrics para mostrar u ocultar pantallas según sea necesario.</li>' +
                    '<li><strong>Visualización opcional</strong> del nombre de la pantalla en los botones del panel.</li>' +
                    '</ul>' +
                    '<hr>' +
                    '<p><em>*Compatible con OBS Studio 29+ con soporte para WebSocket v5. Requiere un script Lua específico en OBS para integración completa.</em></p>' +
                    infoVDDMM,
                ru:
                    '<p>' +
                    'Этот модуль предоставляет полный контроль над полноэкранными окнами вывода OBS Studio, ' +
                    'позволяя создавать, переключать и скрывать несколько проекций с полной интеграцией с Holyrics.' +
                    '</p>' +
                    '<p><strong>Важно:</strong> OBS Studio должен работать на <strong>том же компьютере</strong>, что и Holyrics.</p>' +
                    '<hr>' +
                    '<h4>Основные функции:</h4>' +
                    '<ul>' +
                    '<li><strong>Динамическое создание</strong> окон полноэкранного вывода (программа, сцена или предпросмотр).</li>' +
                    '<li><strong>Автоматическое определение</strong> мониторов и привязка к ID Holyrics.</li>' +
                    '<li><strong>Настраиваемые кнопки</strong> на основе горячих клавиш OBS.</li>' +
                    '<li>Интуитивно понятный интерфейс для настройки каждой кнопки с определёнными сценами и выводами.</li>' +
                    '<li><strong>Прямая интеграция</strong> с Holyrics для отображения или скрытия экранов при необходимости.</li>' +
                    '<li><strong>Необязательное отображение</strong> имени экрана на кнопках панели.</li>' +
                    '</ul>' +
                    '<hr>' +
                    '<p><em>*Совместим с OBS Studio 29+ с поддержкой WebSocket v5. Требуется специфический Lua-скрипт в OBS для полной интеграции.</em></p>' +
                    infoVDDMM
            }
        }
    };
}
                     
// __SCRIPT_SEPARATOR__ - info:7b226e616d65223a2273657474696e6773227d
function settings() {
    return [
        {
            name: jsc.i18n('Sobre') + ' ' + mID,
            description: infoVDDMM,
            type: 'label'
        },
        {
            type: 'separator'
        },
        {
            id: 'receiver_id',
            name: 'OBS Studio',
            description: '',
            type: 'receiver',
            receiver: 'obs_v5'
        },
        {
            type: 'separator'
        },
        {
            name: jsc.i18n('Configuração script LUA do OBS*'),
            description: jsc.i18n('Gera os dados que o script lua precisa para gerar as telas para o holyrics controlar. Copie e cole na configuração do script'),
            type: 'button',
            button_label: jsc.i18n('Detectar Telas'),
            action: function (obj) {
                var monitors = matchMonitors(obj.receiver_id);
                var mappingStr = monitors
                    .map(function (m) {
                        return m.obs_index + ',' + m.holyrics_id;
                    })
                    .join('|');
                h.log(mappingStr);
                module.store('monitorsList', monitors);
            }
        },
        {
            id: 'showLabel',
            label: jsc.i18n('Exibir o nome da tela no botão'),
            type: 'boolean'
        },
        {
            id: 'btnConfigurarTelas',
            type: 'button',
            button_label: jsc.i18n('Configurar'),
            name: jsc.i18n('Botões de Telas'),
            action: function (obj) {
                var monitorList = matchMonitors(obj.receiver_id);
                var qtd = monitorList.length || 0;
                var hotkeysList = getProjectorHotkeys();
                var inputs = [
                    {
                        type: 'title',
                        name: jsc.i18n('Preencha Telas')
                    },
                    {
                        type: 'separator'
                    }
                ];

                for (var i = 0; i < qtd; i++) {
                    var monitorId = monitorList[i].holyrics_id;
                    var values = [{ value: '', label: '' }];

                    for (var j = 0; j < hotkeysList.length; j++) {
                        var parts = hotkeysList[j].split('|');
                        if (parts.length === 3 && parts[2] === monitorId) {
                            var label = '';
                            if (parts[0] === 'hk_projector_scene') {
                                label = jsc.i18n('Cena') + ': ' + parts[1];
                            } else if (parts[0] === 'hk_projector_fixed') {
                                label = jsc.i18n('Saída') + ': ' + parts[1];
                            }
                            values.push({
                                value: hotkeysList[j],
                                label: label
                            });
                        }
                    }

                    inputs.push({
                        id: monitorId,
                        name: monitorList[i].holyrics_name,
                        type: 'string',
                        allowed_values: values
                    });
                }

                module.inputSettings('cfg_projectors', inputs);
                module.updatePanel();
            }
        },
        {
            type: 'separator'
        },
        {
            id: 'log',
            label: jsc.i18n('Habilitar log'),
            type: 'boolean',
            onchange: function (obj) {
                logState(obj.input.log, mUID, 'onChange ' + mID);
            }
        }
    ];
}

// __SCRIPT_SEPARATOR__ - info:7b226e616d65223a2266756e6374696f6e73227d
function matchMonitors(receiverID) {
  var obsMonitors = getMonitorList(receiverID);
  var holyricsMonitors = h.hly('GetDisplaySettings');

  var mapped = [];

  for (var i = 0, hMonitor; i < holyricsMonitors.data.length; i++) {
    hMonitor = holyricsMonitors.data[i];
    if (!hMonitor.area) continue;

    for (var j = 0, oMonitor; j < obsMonitors.length; j++) {
      oMonitor = obsMonitors[j];
      if (hMonitor.area.x === oMonitor.monitorPositionX && hMonitor.area.y === oMonitor.monitorPositionY) {
        mapped.push({
          obs_index: oMonitor.monitorIndex,
          holyrics_id: hMonitor.id,
          holyrics_name: hMonitor.name,
          obs_name: oMonitor.monitorName,
          hide: !!hMonitor.hide // garante booleano
        });
        break;
      }
    }
  }
  return mapped;
}

function getProjectorHotkeys() {
    var hotkeyList = jsc.obs_v5.getHotkeyList(module.settings.receiver_id);
    var filtered = [];

    for (var i = 0; i < hotkeyList.length; i++) {
        var hk = hotkeyList[i];
        if (hk.indexOf("hk_projector_") === 0) {
            filtered.push(hk);
        }
    }

    return filtered;
}


function closeMixProjector(btnKey) {
    var s = module.settings;
    var dados = module.global.monitores[btnKey];

    if (!dados) {
        h.log(mUID, '{%t} Botão "{}" não encontrado em monitores.', btnKey);
        return;
    }

    h.hly('SetDisplaySettings', { id: dados.holyrics_id, hide: false });
    dados.hide = false;

    h.setTimeout(function () {
        h.log(mUID, '{%t} Fechando janelas de projetores');
        var r = module.executeCmdAndWait('.modules/obsprojector/closeobsprojector.exe');
        dados.ativo = false;

        h.setTimeout(function () {
            for (var key in module.global.monitores) {
                var monitor = module.global.monitores[key];
                if (monitor.ativo) {
                    // Reabre com base na hotkey
                    jsc.obs_v5.triggerHotkeyByName(s.receiver_id, monitor.hotkey);
                    h.log(mUID, '{%t} Reativando "{}" com hotkey "{}"', monitor.holyrics_name, monitor.hotkey);
                }
            }
            module.repaintPanel();
        }, 2);
    }, 1000);
}

// __SCRIPT_SEPARATOR__ - info:7b226e616d65223a22616374696f6e73227d
function actions(module) {
  var act = [];
  var s = module.settings;
  
  act.push.apply(act, actionBtnMonitors());

  return act;
}

function actionBtnMonitors() {
    var s = module.settings;
    var mappedScreens = matchMonitors(s.receiver_id);
    var buttons = [];
    var maxScreens = mappedScreens.length;

    if (!module.global.monitores) {
        module.global.monitores = {};
    }

    for (var i = 0; i < maxScreens; i++) {
        var monitor = mappedScreens[i];
        var telaKey = monitor.holyrics_id;
        var hotkeyName = s.cfg_projectors && s.cfg_projectors[telaKey];

        if (!hotkeyName) continue;

        var btnKey = 'botao' + (i + 1);

        // Salva informações completas no global
        module.global.monitores[btnKey] = {
            ativo: false,
            holyrics_id: monitor.holyrics_id,
            holyrics_name: monitor.holyrics_name,
            obs_name: monitor.obs_name,
            obs_index: monitor.obs_index,
            holyrics_hide: monitor.hide,
            hotkey: hotkeyName
        };

        (function(btnKey) {
            var dados = module.global.monitores[btnKey];

            var icon = 'filter_' + dados.obs_index;
            var label = s.showLabel ? dados.holyrics_name : '';

            buttons.push({
                id: btnKey,
                label: label,
                icon: icon,
                hint: 'Tela OBS: "' + dados.holyrics_name + '"',
                action: function(evt) {
                    if (dados.ativo) {
                        closeMixProjector(btnKey); // irá atualizar o estado e reabrir os ativos
                    } else {
                        h.hly('SetDisplaySettings', { id: dados.holyrics_id, hide: true });
                        dados.hide = true;

                        // NOVO: Aciona o atalho salvo
                        jsc.obs_v5.triggerHotkeyByName(s.receiver_id, dados.hotkey);

                        dados.ativo = true;
                        module.repaintPanel();
                    }
                },
                status: function(evt) {
                    if (dados.ativo) {
                        return jsc.utils.ui.item_status.danger();
                    }
                    return null;
                }
            });
        })(btnKey);
    }

    return buttons;
}


// __SCRIPT_SEPARATOR__ - info:7b226e616d65223a22636f6d6d756e697479227d
////////////// modules_generic_functions.js

function getMonitorList(receiverID) {
    var response = jsc.obs_v5.request(receiverID, 'GetMonitorList', null);
    h.logp('jsc.obs_v5', 'getMonitorList response: {}', response);
    return response.monitors;
}

function getInfoVDDMM() {
    var translations = {
        pt: "<hr><br>@ Para dicas sobre automação com Holyrics, visite meu canal no YouTube:<br><p style='padding-left: 20px;'><a href='https://youtube.com/@multimidiaverdadebalneario'>@multimidiaverdadebalneario</a></p><br><p style='padding-left: 20px;'>Em caso de dúvidas, fale comigo no tópico 'Automatização & JavaScript' no grupo de suporte do Telegram <a href='https://t.me/HolyricsBR/97904'>HolyricsBR</a>, marque @prcris que terei prazer em ajudar - #juntos pelo Rei e pelo Reino!<br></p>",
        en: "<hr><br>@ For automation tips with Holyrics, visit my YouTube channel:<br><p style='padding-left: 20px;'><a href='https://youtube.com/@multimidiaverdadebalneario'>@multimidiaverdadebalneario</a></p><br><p style='padding-left: 20px;'>For questions, contact me in the 'Automation & JavaScript' topic in the Telegram support group <a href='https://t.me/HolyricsBR/97904'>HolyricsBR</a>, mention @prcris and I'll be happy to help - #together for the King and the Kingdom!<br></p>",
        ru: "<hr><br>@ Для советов по автоматизации с Holyrics посетите мой канал на YouTube:<br><p style='padding-left: 20px;'><a href='https://youtube.com/@multimidiaverdadebalneario'>@multimidiавerdadebalneario</a></p><br><p style='padding-left: 20px;'>По вопросам обращайтесь ко мне в теме 'Автоматизация и JavaScript' в группе поддержки Telegram <a href='https://t.me/HolyricsBR/97904'>HolyricsBR</a>, упомяните @prcris, и я буду рад помочь - #вместе для Короля и Королевства!<br></p>",
        es: "<hr><br>@ Para consejos de automatización con Holyrics, visita mi canal de YouTube:<br><p style='padding-left: 20px;'><a href='https://youtube.com/@multimidiaverdadebalneario'>@multimidiaverdadebalneario</a></p><br><p style='padding-left: 20px;'>Para preguntas, contáctame en el tema 'Automatización & JavaScript' en el grupo de soporte de Telegram <a href='https://t.me/HolyricsBR/97904'>HolyricsBR</a>, menciona @prcris y estaré encantado de ayudar - #juntos por el Rey y el Reino!<br></p>",
        it: "<hr><br>@ Per consigli sull'automazione con Holyrics, visita il mio canale YouTube:<br><p style='padding-left: 20px;'><a href='https://youtube.com/@multimidiaverdadebalneario'>@multimidiaverdadebalneario</a></p><br><p style='padding-left: 20px;'>Per domande, contattami nel topic 'Automatizzazione e JavaScript' nel gruppo di supporto Telegram <a href='https://t.me/HolyricsBR/97904'>HolyricsBR</a>, menziona @prcris e sarò felice di aiutarti - #insieme per il Re e il Regno!<br></p>"
    };
    
    var lang = h.getLanguage();
    return translations[lang] || translations['en']; // padrão para inglês caso o idioma não esteja definido
}

var infoVDDMM = getInfoVDDMM();

function isDev() {
  return false;
}

function logState(log, id, caller){ 
    h.log.setEnabled(id, log);
    if (!isDev()){return;}
    if (h.log.isEnabled(id)) { 
       h.log("","Log {} ativado por: {} ", id, caller);
    }
    else {
       if (caller.indexOf('startup') === -1) {
          h.log("","Log {} desativado por: {} ", id, caller);
       }
    }
}

function spanIcon(iconCodePoint){
    return '<html><span style="font-family: Material Icons;">' + iconCodePoint + ' </span>';
}

function showMessage(title, message) {
    var content = [{ type: 'title', label: title }, { type: 'separator' }];

    if (typeof message === 'string') {
        content.push({ type: 'title', label: message });
    } else if (Array.isArray(message)) {
        for (var i = 0; i < message.length; i++) {
            content.push({ type: 'title', label: message[i] });
        }
    }

    h.input(content);
}

function mediaPath(path) {
   return convertBars(h.hly('GetVersion').data.baseDir + '/Holyrics/files/media/' + (path ? path + '/' : ''));
}