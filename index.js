const electron = require('electron');

function createWindow() {
    const win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        titleBarStyle: 'hidden',
        frame: false,
        transparent: true
    });

    if (win) {
        win.loadURL("https://www.multiplayerpiano.com/✧𝓡𝓟%20𝓡𝓸𝓸𝓶✧");
        win.setAlwaysOnTop(true, 'screen');
    }
}

electron.app.whenReady().then(() => {
    createWindow();
});

electron.app.on('window-all-closed', () => {
    if (process.platform !== "darwin") {
        electron.app.quit();
    }
});

electron.app.on('activate', () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});