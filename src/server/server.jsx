import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import App from '@/client/App';
import fs from 'fs';
import path from 'path';
import favicon from 'serve-favicon';
import compression from 'compression';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(compression());

app.use(favicon(path.resolve(__dirname, '../public', 'favicon.ico')));
app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../public')));

const PORT = process.env.PORT || 3000;

const createReactApp = async (location) => {
  const appMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  );
  const indexPath = path.resolve(__dirname, '../dist/index.html');
  let indexHTML = fs.readFileSync(indexPath, 'utf-8');
  return indexHTML.replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`);
};

app.get('*', async (req, res) => {
  try {
    const html = await createReactApp(req.url);
    res.status(200).send(html);
  } catch (error) {
    console.error('Error during SSR:', error);
    res.status(500).send('An error occurred.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
