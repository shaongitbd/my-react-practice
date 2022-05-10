import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

import {QueryClientProvider,QueryClient} from 'react-query'

const client = new QueryClient()

root.render(
    <QueryClientProvider client={client}>
    <App />
    </QueryClientProvider>
);
