## WebKit-App
Getting started with crossplattform native desktop applications built with HTML, CSS and JS

###### Installation
```bash
# Install the `electron` command globally
npm install electron-prebuilt -g

# Install as a development dependency
npm install electron-prebuilt --save-dev
```

### Building the App (intermediate)

First off you need to install the electron packager and the asar module. If you prefer
using NPM scripts you can install them as dev dependencies, if you'll use the CLI,
you should install them globally.

```js
npm i --save-dev electron-packager asar
npm i -g electron-packager asar
```

#### Mac OS X

```bash
electron . && electron-packager . MyApp --platform=darwin --arch=x64 --version=0.34.0 && asar pack MyApp-darwin-x64/MyApp.app/Contents/Resources/app MyApp-darwin-x64/MyApp.app/Contents/Resources/app.asar && rm -rf MyApp-darwin-x64/MyApp.app/Contents/Resources/app
```

#### Windows
Currently without ASAR packaging
``bash
electron . && electron-packager . MyApp --platform=win32 --arch=x64 --version=0.34.0
```

#### Linux
Currently without ASAR packaging
``bash
electron . && electron-packager . MyApp --platform=linux --arch=x64 --version=0.34.0
```

###### Files to change
- [ ] index.html
- [ ] \*.css

##### Requirements
- [ ] Build an app with Electron
