import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import AppRouter from './routers/app';

const base = (
    <AppRouter/>
);

ReactDOM.render(
    base,
    document.getElementById('root')
);