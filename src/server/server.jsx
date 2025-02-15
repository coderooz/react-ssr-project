import express from 'express';
import React from 'react';
import {StaticRouter} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import App from '@/client/App';
import fs from 'fs';
import path from 'path';


const app = express();
app.use('/static', express.static(path.resolve(__dirname, '../dist')));
const PORT = process.env.PORT || 3000;

const createReactApp = async (location) => {
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={location}>
            <App />
        </StaticRouter>
    );
    const indexPath = path.resolve(__dirname, '../dist/index.html'); // Ensure correct path
    let index = fs.readFileSync(indexPath, 'utf-8');
    return index.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
};

app.get('*', async (req, res) => {
    const html = await createReactApp(req.url);
    res.status(200).send(html);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});