import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import Bejegyzes from './components/Bejegyzes.jsx';
import { useState } from 'react';

export default function App() {
  const bejegyzesek = [
    { id: 1, cim: 'vsdv', hely: 'asd', leiras: 'asdfasdsd' },
    { id: 2, cim: 'sdvvsdv', hely: 'asdf' },
    { id: 3, cim: 'cycysc', hely: 'asdfg', leiras: 'asdasdasdasdasd' },
  ];

  const [bejegyzes1, setBejegyzes] = useState([
    { id: 1, cim: 'vsdv', hely: 'asd', leiras: 'asdfasdsd' },
    { id: 2, cim: 'sdvvsdv', hely: 'asdf' },
    { id: 3, cim: 'cycysc', hely: 'asdfg', leiras: 'asdasdasdasdasd' },
  ]);
  const [ujCim, setUjCim] = useState('');
  const [ujHely, setUjHely] = useState('');
  const [ujLeiras, setUjLeiras] = useState('');

  return (
    <View style={styles.container}>
      <Text>Bejegyzések száma: {bejegyzes1.length}</Text>
      {bejegyzesek.map((bejegyzes) => (
        <Bejegyzes key={bejegyzes.id} cim={bejegyzes.cim} hely={bejegyzes.hely} leiras={bejegyzes.leiras} />
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
