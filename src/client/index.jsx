import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

if (typeof window !== 'undefined' && document.getElementById('root')) {
    hydrateRoot(
        document.getElementById('root'),
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}
