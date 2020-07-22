// eslint-disable-next-line no-unused-vars
import React from 'react';
import './app.scss';
import SideMenu from './components/SideMenu';
import ChooseImage from './components/ChooseImage';

const MENU = [
  {
    name: '取色器',
    path: '/color'
  }
];

function App() {
  return (
    <div className="app">
      <div className="app-left">
        <SideMenu menu={MENU} />
      </div>
      <div className="app-right">
        <ChooseImage />
      </div>
    </div>
  );
}

export default React.memo(App);
