import { useEffect, useState } from 'react';

export default function useBejyegyzesek() {
  const [bejegyzesek, setBejegyzes] = useState([]);

  useEffect(() => {
    const eredeti = [
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
    eredeti.map((item) => {
      const newItem = {
        id: item.id,
        cim: item.cim,
        hely: item.hely,
        leiras: item.leiras,
        kedvenc: item.kedvenc,
      };
      return setBejegyzes(newItem);
    });
  }, [bejegyzesek]);

  return { bejegyzesek, setBejegyzes };
}
