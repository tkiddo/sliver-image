import React, { useEffect } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import ClipBoard from 'clipboard';
import InfoContainer from '../InfoContainer';

const ColorPanel = (props) => {
  const {
    imageData: { color }
  } = props;
  useEffect(() => {
    const clipboard = new ClipBoard('.icon-copy', {
      target(trigger) {
        return trigger.previousElementSibling;
      }
    });
    clipboard.on('success', (e) => {
      e.clearSelection();
    });
    return () => {
      clipboard.destroy();
    };
  }, []);
  const rgb2hex = (rgb) => {
    const arr = rgb.split(',').splice(0, 3);
    if (arr.length !== 3) {
      return '';
    }
    return arr.reduce(
      (pre, next) => pre + `0${Number(next).toString(16)}`.slice(-2).toUpperCase(),
      '#'
    );
  };
  return (
    <InfoContainer>
      <div className="color-item">
        <span className="color-field">RGBA:</span>
        <div className="color-block" style={{ backgroundColor: `rgba(${color})` }} />
        <span className="color-value">{color}</span>
        {color !== '' && <span className="iconfont icon-copy" />}
      </div>
      <div className="color-item">
        <span className="color-field">HEX:</span>
        <div className="color-block" style={{ backgroundColor: `${rgb2hex(color)}` }} />
        <span className="color-value">{rgb2hex(color)}</span>
        {color !== '' && <span className="iconfont icon-copy" />}
      </div>
    </InfoContainer>
  );
};

const mapStateToProps = ({ imageData }) => ({ imageData });

export default connect(mapStateToProps)(ColorPanel);
