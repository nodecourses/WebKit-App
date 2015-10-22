var app = require('app');
var pkg = require('./package.json');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: pkg.window.width,
        height: pkg.window.height
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    mainWindow.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
