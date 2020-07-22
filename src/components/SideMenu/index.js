import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const SideMenu = (props) => {
  const { menu } = props;
  return (
    <div className="menu-container">
      {menu.map((item) => (
        <Link to={item.path} key={item.name} className="menu-item">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default React.memo(SideMenu);
