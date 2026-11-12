import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import Bejegyzes from './components/Bejegyzes.jsx';
import { useState, useMemo } from 'react';
import useBejyegyzesek from './hooks/useBejegyzesek.jsx';

export default function App() {
  const { bejegyzes1, ujBejegyzes, kedvencValt, betoltve } = useBejyegyzesek();

  const [ujCim, setUjCim] = useState('');
  const [ujHely, setUjHely] = useState('');
  const [ujLeiras, setUjLeiras] = useState('');
  const [kereses, setKereses] = useState('');
  const [szurtElem, setSzurtElem] = useState([]);

  const kedvencek = bejegyzes1.filter((item) => item.kedvenc).length;
  return (
    <View style={styles.container}>
      {!betoltve ? (
        <Text>Adatok betöltése:</Text>
      ) : (
        <>
          <Text>Keresési feltételek:</Text>
          <TextInput value={kereses} onChangeText={setKereses} placeholder="Adja meg a keresés feltételét:" />
          <Button
            title="Keresés"
            onPress={() => {
              if (kereses === '') return;
              setSzurtElem(
                bejegyzes1.filter(
                  (post) =>
                    post.cim.toLowerCase().includes(kereses.toLowerCase()) ||
                    post.hely.toLowerCase().includes(kereses.toLowerCase()),
                ),
              );
            }}
          />

          {szurtElem.map((elem) => (
            <Bejegyzes key={elem.id} cim={elem.cim} hely={elem.hely} leiras={elem.leiras} />
          ))}
          <Text>Többi hasznos infó</Text>
          <Text>Bejegyzések száma: {bejegyzes1.length}</Text>
          <Text>Kedvencek száma: {kedvencek}</Text>
          {bejegyzes1.map((bejegyzes) => (
            <View key={bejegyzes.id}>
              <Bejegyzes key={bejegyzes.id} cim={bejegyzes.cim} hely={bejegyzes.hely} leiras={bejegyzes.leiras} />
              <Text>{bejegyzes.kedvenc ? 'Kedvenc' : 'Nem kedvenc'}</Text>
              <Button title="Kedvenc státuszt váltása" onPress={() => kedvencValt(bejegyzes.id)} />
            </View>
          ))}

          <TextInput value={ujCim} onChangeText={setUjCim} placeholder="Adja meg az új bejegyzés címét: " />
          <TextInput value={ujHely} onChangeText={setUjHely} placeholder="Adja meg az új bejegyzés helyét: " />
          <TextInput value={ujLeiras} onChangeText={setUjLeiras} placeholder="Adja meg az új bejegyzés leírását: " />
          <Button
            title="Hozzáadás"
            onPress={() => {
              if (ujCim === '' || ujHely === '') return;

              ujBejegyzes(ujCim, ujHely, ujLeiras);

              setUjCim('');
              setUjHely('');
              setUjLeiras('');
            }}
          />
        </>
      )}
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
