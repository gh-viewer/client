const { app, BrowserWindow } = require('electron')

let mainWindow = null

const createWindow = () => {
  mainWindow = new BrowserWindow({
    minWidth: 300,
    minHeight: 400,
    maxWidth: 400,
    width: 300,
    height: 600,
    show: false,
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', () => {
  createWindow()
})
