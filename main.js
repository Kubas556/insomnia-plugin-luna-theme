// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/173-plugins

// TODO: Add plugin code here...

const fs = require("fs");
const os = require("os");

let image = fs.readFileSync(os.homedir()+"/AppData/Roaming/Insomnia/plugins/insomnia-plugin-luna-theme/luna.png");
let stringImage = image.toString("base64");

//image URL https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f484215b-4e9a-42b5-9feb-77c3dec3a385/d8uxy4w-26b7903c-cd55-456e-ab71-5899ba014a88.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mNDg0MjE1Yi00ZTlhLTQyYjUtOWZlYi03N2MzZGVjM2EzODUvZDh1eHk0dy0yNmI3OTAzYy1jZDU1LTQ1NmUtYWI3MS01ODk5YmEwMTRhODgucG5nIn1dXX0.Y3ZWqsBk3DMzW1YBdIELPFQr4dzz3qa2dKx_qgPLDeM
//console.log(stringImage);
module.exports.themes = [{
    name: "luna-theme",
    displayName: "Luna theme",
    theme: {
        rawCss: `
        .editor-wrapper .editor__container {
        background-image: url(data:image/png;base64,${stringImage});
        background-position-x: 54px;
        background-position-y: bottom;
        background-size: 37rem;
        background-repeat: no-repeat;
    }`,
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgba(30, 30, 30, 0.8)',
                },
                foreground: {
                    default: '#ddd',
                },
            },
            dialog: {
                background: {
                    default: '#fff',
                },
                foreground: {
                    default: '#333',
                },
            },
            appHeader: {
                background: {
                    default: '#2C2C2C',
                },
            },
            sidebar: {
                background: {
                    default: '#2C2C2C',
                    success: '#7ecf2b',
                    notice: '#f0e137',
                    warning: '#ff9a1f',
                    danger: '#ff5631',
                    surprise: '#a896ff',
                    info: '#46c1e6',
                },
                foreground: {
                    default: '#e0e0e0',
                },
                highlight: {
                    default: '#999',
                },
            },
            sidebarHeader: {
                background: {
                    default: '#695eb8',
                },
                foreground: {
                    default: '#fff',
                },
            },
            paneHeader: {
                foreground: {
                    default: '#ccc',
                },
                background: {
                    default: '#212121',
                    success: '#75ba24',
                    notice: '#d8c84d',
                    warning: '#ec8702',
                    danger: '#e15251',
                    surprise: '#8776d5',
                    info: '#20aed9',
                },
            },
            pane: {
                background: {
                    default: '#292929',
                    success: '{{ styles.sidebar.background.success }}',
                    notice: '{{ styles.sidebar.background.notice }}',
                    warning: '{{ styles.sidebar.background.warning }}',
                    danger: '{{ styles.sidebar.background.danger }}',
                    surprise: '{{ styles.sidebar.background.surprise }}',
                    info: '{{ styles.sidebar.background.info }}',
                },
                foreground: {
                    default: '#e0e0e0',
                },
                highlight: {
                    default: '#999',
                },
            },
        },
    }
}]