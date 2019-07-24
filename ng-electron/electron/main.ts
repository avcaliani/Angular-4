import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;

function createWindow(): void {

    win = new BrowserWindow({
        width: 800,
        height: 585,
        fullscreen: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    /* Loading our Angular App */
    win.loadURL(url.format({
        pathname: path.join(__dirname, `/../../dist/ng-electron/index.html`),
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
