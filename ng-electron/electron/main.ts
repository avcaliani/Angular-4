import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;
const serve: boolean = process.argv.slice(1).some(val => val === '--serve');

function createWindow(): void {

    win = new BrowserWindow({
        width: 800,
        height: 585,
        fullscreen: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    if (serve)
        win.loadURL('http://localhost:4200');
    else
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
