var app = require('app');
var pkg = require('./package.json');
var BrowserWindow = require('browser-window');
var mainWindow = null;

require('crash-reporter').start();

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow(pkg.window);
    mainWindow.loadUrl('file://' + __dirname + '/' + pkg.view);
    
    if(pkg.developer) {
        mainWindow.openDevTools();
    }

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
