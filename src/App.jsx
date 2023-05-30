import React, { Component } from 'react';
import {createRoot} from "react-dom/client";
import { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';
import Introduction from './Slides/WideScreen/Introduction/Introduction.jsx';
import WideScreenSkills from './Slides/WideScreen/Skills/Skills.jsx';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
    html, body { margin: 0;}
    *, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  // componentDidMohiunt() {
  //   if ('scrollRestoration' in window.history) {
  //     window.history.scrollRestoration = 'auto';
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
            <Introduction />
            <WideScreenSkills />
        </MediaQuery>
      </React.Fragment>
    );
  }
}

createRoot(document.getElementById('root')).render(React.createElement(App));
