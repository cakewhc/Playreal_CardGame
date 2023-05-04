import React, { useState, useEffect } from 'react';
import StartPage from './Component/StartPage';
import IntroPage from './Component/IntroPage';
import GamePage from './Component/GamePage';

function App() {
  const [startActive, setStartActive] = useState(true);
  const [introActive, setIntroActive] = useState(false);
  const [gameActive, setGameActive] = useState(false);

  const [language, setLanguage] = useState('tc');
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    console.log(diff);
  }, [diff]);

  return (
    <div>
      <StartPage
        showIntro={(diffValue) => {
          setIntroActive(true);
          setStartActive(false);
          setDiff(diffValue);
        }}
        langSetting={(lang) => {
          setLanguage(lang);
        }}
        show={startActive}
        language={language}
      ></StartPage>
      <IntroPage
        showGame={() => {
          setGameActive(true);
          setIntroActive(false);
        }}
        show={introActive}
        language={language}
      ></IntroPage>
      <GamePage
        showStart={() => {
          setStartActive(true);
          setGameActive(false);
        }}
        show={gameActive}
        diff={diff}
        language={language}
      ></GamePage>
    </div>
  );
}

export default App;
