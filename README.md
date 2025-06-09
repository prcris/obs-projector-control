
# OBS Projector Control

**OBS Projector Control** é uma solução criada para integrar o **OBS Studio** com o **Holyrics**, oferecendo uma maneira prática e eficiente de controlar projeções em múltiplas telas, especialmente útil no contexto de igrejas que necessitam exibir diferentes cenas de forma simultânea em telões distintos.

## 📖 História do Projeto

Durante o uso do Holyrics em nossa igreja, enfrentamos um desafio recorrente: **exibir a imagem de uma câmera (como a do pregador) em uma ou mais telas**, sem interromper a apresentação principal. Essa limitação era especialmente perceptível em ambientes com mais de uma tela, pois ao direcionar a apresentação para outra tela, a tela principal era desativada.

Inicialmente, tentei resolver o problema utilizando apenas **WebSocket do OBS Studio**, mas percebi que só era possível abrir as janelas de saída principais (`preview`, `program`, `multiview`). Não havia suporte para abrir **cenas específicas como projetores** diretamente.

Foi então que resolvi explorar os **scripts em Lua do OBS**, criando uma rotina que mapeia cenas e telas conectadas, gerando **hotkeys automaticamente**. Com isso, o Holyrics pôde acionar essas hotkeys para abrir uma cena específica em um monitor específico — com um simples clique.

Mas ainda restava um problema: o **OBS não oferece uma forma nativa de fechar janelas de projetor abertas**. Para contornar isso, resgatei meu conhecimento de **Delphi** e criei um pequeno utilitário em **Lazarus (Pascal)** que identifica e fecha todas as janelas de projetor abertas pelo OBS.

A junção dessas três partes:

1. Script Lua no OBS para gerar hotkeys personalizadas,
2. Módulo em JavaScript para Holyrics integrar com OBS via WebSocket,
3. Executável utilitário em Pascal para fechamento das janelas abertas,

resultou na ferramenta poderosa e integrada que chamamos de **`obs-projector-control`**.

---

## 🧩 Componentes do Projeto

### 1. `scene_projector_hotkeys.lua`

Script para ser carregado no OBS Studio:

- Mapeia cenas e saídas fixas (program, preview, multiview) para monitores específicos.
- Cria hotkeys automaticamente com base na configuração fornecida.
- Essas hotkeys são acionadas remotamente via Holyrics/WebSocket.

### 2. `27 OBS MultiView Controller.js`

Módulo para Holyrics:

- Detecta os monitores ativos e os vincula com os IDs do Holyrics.
- Exibe um painel com botões configuráveis que acionam hotkeys do OBS.
- Permite abrir e fechar janelas de projetores de forma dinâmica.
- Faz chamadas ao utilitário `closeobsprojector.exe` para encerrar janelas abertas.

### 3. `closeobsprojector.lpr` + `closeobsprojector.exe`

Pequeno utilitário escrito em Pascal (Lazarus):

- Localiza e fecha todas as janelas de projetores abertas pelo OBS.
- Essencial para restaurar o estado original das telas sem reiniciar o OBS.

---

## 🚀 Como Usar

### Requisitos:

- **OBS Studio** (versão 29+ com suporte ao WebSocket v5).
- **Holyrics** instalado no mesmo computador.
- Script Lua carregado no OBS.
- Módulo ativado no Holyrics.
- `closeobsprojector.exe` acessível para ser chamado pelo módulo.

### Passos:

1. Copie o conteúdo do script `scene_projector_hotkeys.lua` para o OBS.
2. Configure o mapeamento de monitores no OBS (ex: `1,public|2,tela_2`).
3. No Holyrics, configure o módulo `OBS MultiView Controller` e detecte as telas.
4. Relacione cenas/saídas com cada tela e configure os botões.
5. Use o painel do Holyrics para abrir/fechar cenas específicas em qualquer tela.

---

## ✨ Funcionalidades

- Controle total das janelas de projetores do OBS por meio do Holyrics.
- Compatível com qualquer número de monitores.
- Integração automática entre cenas, hotkeys e telas detectadas.
- Fechamento automatizado das janelas via utilitário externo.
- Interface intuitiva no Holyrics para configuração e uso.

---

## 🧠 Motivação

Criado com o objetivo de **facilitar a vida de operadores de mídia nas igrejas**, esse projeto nasceu de uma necessidade real e foi lapidado com tecnologias acessíveis, reutilizando conhecimento em scripting, automação e desenvolvimento desktop.

> **#JuntosPeloReiEPeloReino**

---

## 🤝 Agradecimentos

Agradecimentos à comunidade Holyrics e ao grupo de suporte no Telegram. Dúvidas ou sugestões? Participe do grupo [HolyricsBR](https://t.me/HolyricsBR) e mencione **@prcris**.

Canal com dicas: [@multimidiaverdadebalneario](https://youtube.com/@multimidiaverdadebalneario)
