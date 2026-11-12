import { useEffect, useState } from 'react';

export default function useBejyegyzesek() {
  const [bejegyzes1, setBejegyzes] = useState([]);
  const [betoltve, setBetoltve] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const places = [
        {
          id: 1,
          cim: 'vsdv',
          hely: 'asd',
          leiras: 'asdfasdsd',
          kedvenc: false,
        },
        { id: 2, cim: 'sdvvsdv', hely: 'asdf', kedvenc: true },
        { id: 3, cim: 'cycysc', hely: 'asdfg', leiras: 'asdasdasdasdasd', kedvenc: false },
      ];

      setBejegyzes(places);
      setBetoltve(true);
    }, 2000);
  }, []);

  const ujBejegyzes = (cim1, hely1, leiras1) => {
    const newItem = {
      id: Date.now(),
      cim: cim1,
      hely: hely1,
      leiras: leiras1,
      kedvenc: false,
    };

    setBejegyzes((elozok) => [...elozok, newItem]);
  };

  const kedvencValt = (id) => {
    setBejegyzes((elozok) => elozok.map((item) => (item.id === id ? { ...item, kedvenc: !item.kedvenc } : item)));
  };

  return {
    bejegyzes1,
    betoltve,
    ujBejegyzes,
    kedvencValt,
  };
}
