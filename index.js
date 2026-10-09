const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const movieId = req.query.id || '';

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sulthan TV - 2Embed Link Generator</title>
        <style>
            body { 
                background: #121212; 
                color: #fff; 
                font-family: sans-serif; 
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                height: 100vh; 
                margin: 0; 
            }
            .card { 
                background: #1e1e1e; 
                padding: 30px; 
                border-radius: 10px; 
                box-shadow: 0 4px 20px rgba(0,0,0,0.6); 
                width: 90%; 
                max-width: 500px; 
                text-align: center; 
            }
            h2 { color: #ff4757; margin-bottom: 20px; }
            input { 
                width: 80%; 
                padding: 12px; 
                border-radius: 5px; 
                border: 1px solid #444; 
                background: #2c2c2c; 
                color: #fff; 
                font-size: 16px; 
                outline: none; 
                margin-bottom: 15px; 
            }
            button { 
                padding: 12px 20px; 
                background: #ff4757; 
                color: white; 
                border: none; 
                border-radius: 5px; 
                font-size: 16px; 
                cursor: pointer; 
                font-weight: bold; 
            }
            button:hover { background: #ff6b81; }
            .result-box { 
                margin-top: 20px; 
                background: #2c2c2c; 
                padding: 15px; 
                border-radius: 5px; 
                word-break: break-all; 
                text-align: left; 
            }
            a { color: #1e90ff; text-decoration: none; }
        </style>
    </head>
    <body>
        <div class="card">
            <h2>Sulthan TV 2Embed Generator</h2>
            <form method="GET" action="/">
                <input type="text" name="id" placeholder="Enter TMDB / IMDb ID (e.g. 329 or tt10676048)" value="${movieId}">
                <br>
                <button type="submit">Generate Link</button>
            </form>

            ${movieId ? `
                <div class="result-box">
                    <strong>Generated 2Embed URL:</strong><br>
                    <a href="https://www.2embed.cc/embed/${movieId}" target="_blank">https://www.2embed.cc/embed/${movieId}</a>
                </div>
            ` : ''}
        </div>
    </body>
    </html>
    `);
});

module.exports = app;
