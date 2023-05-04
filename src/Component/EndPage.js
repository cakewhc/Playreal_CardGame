import React, { useState } from 'react';
import './Component.scss';
import content from './Content.json';

export default function EndPage(props) {

  return (
    <div id='EndPage' className={`${props.show?'':'hide'}`}>
      <div alt='background' className='background'></div>

    </div>
  );
}
