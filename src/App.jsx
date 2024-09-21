import React, { useState } from 'react';
import './App.css';
/* 
ADIM 1: gerekli componentleri ve sahteVeri'yi import edin 
*/
import sahteVeri from './sahteVeri.js';
import AramaCubugu from './components/AramaCubugu/AramaCubugu';
import Gonderiler from './components/Gonderiler/Gonderiler';
const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaKriteri, setAramaKriteri] = useState('ali');

  const aramaHandler = (value) => {
    setAramaKriteri(value);
    if (value === '') {
      setGonderiler(sahteVeri);
      return;
    }

    const aramaSonuclari = gonderiler.filter((gonderi) => {
      if (gonderi.username.includes(value)) {
        return gonderi;
      } else {
        return false;
      }
    });
    setGonderiler(aramaSonuclari);
  };

  const gonderiyiBegen = (gonderiID) => {
    const yeniGonderiler = gonderiler.map((gonderi) => {
      if (gonderi.id === gonderiID) {
        return { ...gonderi, likes: gonderi.likes + 1 };
      } else {
        return gonderi;
      }
    });
    setGonderiler(yeniGonderiler);
  };

  return (
    <div className="App">
      {/*
        ADIM 2: AramaCubugu ve Gonderiler component'ini ekleyin.
        Önce bu comoponentleri inceleyin. Hangi proplara ihtiyacı var?
        */}
      <AramaCubugu aramaKriteri={aramaKriteri} aramaHandler={aramaHandler} />
      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
    </div>
  );
};

export default App;
