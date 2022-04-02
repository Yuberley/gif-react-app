import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {GifExpertApp} from './GifExpertApp';
// import ReactDOM from 'react-dom';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<GifExpertApp />);

// ReactDOM.render( 
//     <GifExpertApp />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
