## Amazon Live Currency Converter

This project is a Chrome Plugin, which is a Currency converter using Google Finance. When you mouse over an item price, the plugin will show that price, for now, in Dominican Pesos.

## Install dependencies

```
npm install
```

## Generate Chrome build files using webpack and babel

```
npm run build 
```

## Load extension to Chrome

When the build command is executed, it will appear dist folder, this is the bin of our extension.
Go to chrome://extensions/, then enable the 'Developer Mode' check, press the 'Load unpacked' button,
search and select the dist folder and press the ok button.

Our extension will be added to our extensions.
Now press the Extensions button on the Chrome bar, and pin the extension to the Chrome bar.

## How it works

When the mouse is over a price, it will show a tooltip with selected currency

![image](https://github.com/AngelGuante/Amazon_Live_Currency_Converter-React-Chrome_Extension/assets/49294128/c37ff826-67fc-4266-b05c-f3cf5ff95306)
