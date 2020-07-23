import React from 'react';
import './index.scss';

// eslint-disable-next-line react/destructuring-assignment
const InfoContainer = (props) => <div className="info-container">{props.children}</div>;

export default React.memo(InfoContainer);
