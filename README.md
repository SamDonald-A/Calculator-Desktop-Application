# Calculator-Desktop-Application
Creating a Simple calculator application for the Desktop
---

## First Things First
Make sure you have *Node* Installed and *npm* installed
Create a folder and open it in VS Code Editor
  
    # Verify Installation in VS Code Terminal
    node -v
    npm -v

# Step 1: Create Node Files 
  
    npm init -y
    # You should see package.json created

# Step 2: Install Electron

    npm install electron --save-dev
    # you should see
      -> node_modules
      -> package.json
      -> package-lock.json
    
# Step 3: Create App Files
1. index.html
2. style.css
3. main.js
4. script.js

## *index.html*
    <!DOCTYPE html>
    <html>
    <head>
      <title>Sam Calculator</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>

     <div class="calculator">
       <input type="text" id="display" disabled />

       <div class="buttons">
        <button onclick="clearDisplay()">C</button>
        <button onclick="appendValue('/')">/</button>
        <button onclick="appendValue('*')">*</button>
        <button onclick="deleteLast()">⌫</button>

        <button onclick="appendValue('7')">7</button>
        <button onclick="appendValue('8')">8</button>
        <button onclick="appendValue('9')">9</button>
        <button onclick="appendValue('-')">-</button>

        <button onclick="appendValue('4')">4</button>
        <button onclick="appendValue('5')">5</button>
        <button onclick="appendValue('6')">6</button>
        <button onclick="appendValue('+')">+</button>

        <button onclick="appendValue('1')">1</button>
        <button onclick="appendValue('2')">2</button>
        <button onclick="appendValue('3')">3</button>
        <button onclick="calculate()">=</button>

        <button onclick="appendValue('0')" class="zero">0</button>
        <button onclick="appendValue('.')">.</button>
    </div>
    </div>

    <script src="script.js"></script>
    </body>
    </html>

  
## *style.css*
    body {
       background: #1e1e2f;
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
       font-family: Arial;
     }

    .calculator {
         background: #2c2c3e;
         padding: 20px;
         border-radius: 15px;
         width: 300px;
     }

    #display {
         width: 100%;
         height: 50px;
         font-size: 22px;
         text-align: right;
         margin-bottom: 15px;
         padding: 10px;
         border: none;
         border-radius: 8px;
         background: white;
     }

    .buttons {
         display: grid;
         grid-template-columns: repeat(4, 1fr);
         gap: 10px;
    }

    button {
         height: 50px;
         font-size: 18px;
         border: none;
         border-radius: 8px;
         cursor: pointer;
         background: #3d3d5c;
         color: white;
     }

    button:hover {
         background: #57577a;
    }

    .zero {
         grid-column: span 2;
     } 
         

## *main.js*     
    const { app, BrowserWindow } = require('electron');

    function createWindow() {
      const win = new BrowserWindow({
        width: 350,
        height: 500,
        resizable: false
      });

      win.loadFile('index.html');
    }

    app.whenReady().then(createWindow);

## *script.js*

    const display = document.getElementById("display");

    function appendValue(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = "";
    }

    function deleteLast() {
      display.value = display.value.slice(0, -1);
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }

## package.json  (Should look line this at the end - Copy and past this there)
Change name according to your need

    {
      "name": "sam-calculator",
      "version": "1.0.0",
      "description": "Simple Calculator Desktop App",
      "main": "main.js",
      "author": "Sam Donald",
      "scripts": {
        "start": "electron .",
        "build": "electron-builder"
      },
      "devDependencies": {
        "electron": "^40.6.1",
        "electron-builder": "^26.8.1"
      },
      "build": {
        "appId": "com.sam.calculator",
        "productName": "Sam Calculator",
        "directories": {
          "output": "dist"
        },
        "win": {
          "target": "nsis"
        }
      }
    }


# Step 4: Install electron builder & Create build

!Important --> Make sure developer mode is enabled in your system
if not - go to >> privacy & security >> seach dev mode >> enable

    npm install electron-builder --save-dev
    npm run build

# Finally the dist folder will be created - there we can see the .exe file
Install the app and test it


<img width="396" height="585" alt="image" src="https://github.com/user-attachments/assets/93a18e83-cb67-45ad-bb22-a65cdb6b8342" />

