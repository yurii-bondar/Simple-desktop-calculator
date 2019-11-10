const electron = require ('electron');
const app      = electron.app;                                      // безпосереднє створення додатку
const win      = electron.BrowserWindow;                            // модуль створення браузерного вікна

var main = null;

app.on('window-all-closed', function(){                             // додаток закривається при закритті вікна         
    if (process.platform != 'darwin') app.quit();
})

app.on('ready', function(){                                         // задання мінімальних розмірів вікна  
   main = new win ({minWidth: 270, minHeight: 435});
  
    main.setMenu(null);                                             // виключення стандартного меню додатку

    main.loadURL('file://' + __dirname + '/index.html');            // шлях до завантаження додатку

    main.on('closed', function(){
        main = null;
    })
})