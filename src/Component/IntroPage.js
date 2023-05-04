import React from 'react';
import './Component.scss';
import content from './Content.json';

export default function IntroPage(props) {


  return (
    <div id='IntroPage' className={`${props.show?'':'hide'}`}>
      <div alt='background' className='background'></div>
      <div className='title SNsana'>{content.IntroPage.title[props.language]}</div>
      <div className='intro Iansui'>{content.IntroPage.intro[props.language]}</div>
      <div className='game SNsana' onClick={()=>{props.showGame()}}>{content.IntroPage.game[props.language]}</div>
    </div>
  );
}
