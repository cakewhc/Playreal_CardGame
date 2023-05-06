import React from 'react';
import './Component.scss';
import content from './Content.json';

export default function StartPage(props) {
  return (
    <div id="StartPage" className={`${props.show ? '' : 'hide'}`}>
      <div alt="background" className="background"></div>
      <div className="lang">
        <div
          className="SNsana"
          onClick={() => {
            props.langSetting('tc');
          }}
        >
          {content.StartPage.lang.tc}
        </div>
        <div
          className="SNsana"
          onClick={() => {
            props.langSetting('en');
          }}
        >
          {content.StartPage.lang.en}
        </div>
      </div>
      <div className={`title Iansui ${props.language}`}>
        {content.StartPage.title[props.language]}
      </div>

      <div className="diff SNsana">
        <div
          className="SNsana"
          onClick={() => {
            props.showIntro(6);
          }}
        >
          {content.StartPage.diff.easy[props.language]}
        </div>
        <div
          className="SNsana"
          onClick={() => {
            props.showIntro(12);
          }}
        >
          {content.StartPage.diff.norm[props.language]}
        </div>
        <div
          className="SNsana"
          onClick={() => {
            props.showIntro(18);
          }}
        >
          {content.StartPage.diff.hard[props.language]}
        </div>
      </div>
    </div>
  );
}
