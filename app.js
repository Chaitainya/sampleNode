const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            body{
                width: 100%;
                min-height: 100vh;
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }

            .main{
                width: 100%;
                height: 100vh;
                background-color: #000;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            h1{
                color: #fff;
                letter-spacing: 2px;
            }
        </style>
    </head>
    <body>
        <div class="main">
            <div>
                <h1>Adithya</h1>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});