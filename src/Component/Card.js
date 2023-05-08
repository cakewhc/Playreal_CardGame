import React from 'react';
import './Component.scss';

export default function Card(props) {
  return (
    <div
      id="Card"
      className={`cardIn ${props.mode}`}
      style={{ animationDelay: `${props.index / 2}s` }}
      onClick={() => {
        console.log(props.index);
        props.cardOpen(props.index);
      }}
    >
      <div
        className={`back ${props.index} ${
          props.open === props.index ||
          props.select === props.index ||
          props.matchArr.includes(props.card)
            ? 'flip'
            : 'flipBack'
        }`}
      ></div>
      <div
        className={`front ${props.index} _${props.card} ${
          props.open === props.index ||
          props.select === props.index ||
          props.matchArr.includes(props.card)
            ? 'flip'
            : 'flipBack'
        }`}
      ></div>
    </div>
  );
}
