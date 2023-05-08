import React, { useEffect, useState } from 'react';
import './Component.scss';
import content from './Content.json';
import Card from './Card';

export default function GamePage(props) {
  const [cardArr, setCardArr] = useState([]);
  const [matchArr, setMatchArr] = useState([]);

  const [select, setSelect] = useState(-1);
  const [open, setOpen] = useState(-1);

  const [cardDesc, setCardDesc] = useState('');

  const [finish, setFinish] = useState(false);

  let mode = props.diff === 6 ? 'easy' : props.diff === 12 ? 'norm' : 'hard';

  function shuffle(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      const rand = Math.floor(Math.random() * (n - i)) + i;
      [arr[i], arr[rand]] = [arr[rand], arr[i]];
    }
    return arr;
  }

  useEffect(() => {
    let cardDescDiv = document.querySelector('#cardDesc');
    cardDescDiv.addEventListener('DOMSubtreeModified', () => {
      cardDescDiv.classList.add('descShow');
      setTimeout(() => {
        cardDescDiv.classList.remove('descShow');
      }, 500);
    });
  }, []);

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= props.diff; i++) {
      arr.push(i);
      arr.push(i);
    }
    setCardArr(shuffle(arr));
  }, [props.diff, props.show]);

  useEffect(() => {
    if (open === -1) {
      setOpen(select);
      setSelect(-1);
    } else if (select === -1 || select === open) {
      setSelect(-1);
    } else {
      if (cardArr[open] === cardArr[select]) {
        let arr = matchArr;
        arr.push(cardArr[open]);
        setMatchArr(arr);
        setCardDesc(
          content.GamePage.cards[`card${cardArr[select]}`][props.language]
        );
        setFinish(finish + 1);
        setOpen(-1);
        setSelect(-1);
      } else {
        setTimeout(() => {
          setOpen(-1);
          setSelect(-1);
        }, 1500);
      }
    }
    // eslint-disable-next-line
  }, [select, cardArr]);

  useEffect(() => {
    setTimeout(() => {
      if (finish === props.diff) {
        setFinish(0);
        setCardArr([]);
        setMatchArr([]);
        setOpen(-1);
        setSelect(-1);
        setCardDesc('');

        props.showEnd();
      }
    }, [2500]);
    // eslint-disable-next-line
  }, [finish, props.diff]);

  return (
    <div id="GamePage" className={`${props.show ? '' : 'hide'}`}>
      <div alt="background" className="background"></div>
      <div className={`cardCase ${mode}`}>
        {cardArr.map((card, i) => (
          <Card
            key={i}
            card={card}
            index={i}
            open={open}
            select={select}
            matchArr={matchArr}
            mode={mode}
            cardOpen={(num) => {
              if (select === -1) {
                setSelect(num);
              }
            }}
          ></Card>
        ))}
      </div>
      <div
        id="cardDesc"
        className={`cardDesc Iansui ${mode} ${props.language}`}
        onChange={() => {}}
      >
        {cardDesc}
      </div>
    </div>
  );
}
