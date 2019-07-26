import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;
const serve: boolean = process.argv.slice(1).some(val => val === '--serve');

function createWindow(): void {

    win = new BrowserWindow({
        minWidth: 320,
        width: 800,
        minHeight: 540,
        height: 580,
        fullscreen: false,
        webPreferences: {
            nodeIntegration: true
        },
        icon: path.join(__dirname, `/../assets/icon.png`)
    });

    if (serve)
        win.loadURL('http://localhost:4200');
    else
        /* Loading our Angular App */
        win.loadURL(url.format({
            pathname: path.join(__dirname, `./ng-electron/index.html`),
            protocol: 'file:',
            slashes: true,
        }));

    // win.webContents.openDevTools();
    win.on('closed', () => win = null);
}

app.on('ready', createWindow);

/* Mac OS */
app.on('activate', () => {
    if (!win)
        createWindow();
});
