import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import Bejegyzes from './components/Bejegyzes.jsx';
import { useState } from 'react';

export default function App() {
  const kedvencValt = (id) => {
    setBejegyzes((elozok) => elozok.map((item) => (item.id === id ? { ...item, kedvenc: !item.kedvenc } : item)));
  };
  const kedvencek = bejegyzes1.filter((item) => item.kedvenc).length;

  const [bejegyzes1, setBejegyzes] = useState([
    {
      id: 1,
      cim: 'vsdv',
      hely: 'asd',
      leiras: 'asdfasdsd',
      kedvenc: false,
    },
    { id: 2, cim: 'sdvvsdv', hely: 'asdf', kedvenc: true },
    { id: 3, cim: 'cycysc', hely: 'asdfg', leiras: 'asdasdasdasdasd', kedvenc: false },
  ]);
  const [ujCim, setUjCim] = useState('');
  const [ujHely, setUjHely] = useState('');
  const [ujLeiras, setUjLeiras] = useState('');

  return (
    <View style={styles.container}>
      <Text>Bejegyzések száma: {bejegyzes1.length}</Text>
      <Text>Kedvencek száma: {kedvencek}</Text>
      {bejegyzes1.map((bejegyzes) => (
        <View key={bejegyzes.id}>
          <Bejegyzes key={bejegyzes.id} cim={bejegyzes.cim} hely={bejegyzes.hely} leiras={bejegyzes.leiras} />
          <Text>{bejegyzes.kedvenc ? 'Kedvenc' : 'Nem kedvenc'}</Text>
          <Button onPress={kedvencValt(bejegyzes.id)}>Kedvenc státuszt váltása</Button>
        </View>
      ))}

      <TextInput value={ujCim} onChangeText={setUjCim} placeholder="Adja meg az új bejegyzés címét: " />
      <TextInput value={ujHely} onChangeText={setUjHely} placeholder="Adja meg az új bejegyzés helyét: " />
      <TextInput value={ujLeiras} onChangeText={setUjLeiras} placeholder="Adja meg az új bejegyzés leírását: " />
      <Button
        title="Hozzáadás"
        onPress={() => {
          if (ujCim === '' || ujHely === '') return;
          const newItem = {
            id: Date().now(),
            cim: ujCim,
            hely: ujHely,
            leiras: ujLeiras,
            kedvenc: false,
          };

          setBejegyzes((elozok) => [...elozok, newItem]);

          setUjCim('');
          setUjHely('');
          setUjLeiras('');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
