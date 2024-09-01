import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rutas from './routes';
import { Context, ContextGlobal } from './components/Context';
import Main from './components/Main';
import styled from "styled-components"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Context>

        <Rutas />
    </Context>
  </React.StrictMode>
);


