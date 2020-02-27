// Инструменты
import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import eruda from 'eruda';
// Panels
import App from './App';

// Init VK  Mini App
bridge.send('VKWebAppInit');

// Init eruda
eruda.init()

console.log(window.location.search.replace('?', ''))
bridge.subscribe(({ detail: { type, data }}) => {
    console.log(type)
    console.log(data)
})

ReactDOM.render(<App />, document.getElementById('root'));
