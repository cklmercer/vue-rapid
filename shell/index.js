const electron = require('electron')
const path = require('path')
const url = require('url')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let window

function createWindow () {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 400
  })

  window.loadURL(url.format({
    pathname: 'localhost:8080',
    protocol: 'http:',
    slashes: true
  }))

  window.on('close', () => { window = null })
}

app.on('ready', createWindow)

app.on('browser-window-created', (e, window) => {
  window.setMenu(null)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
