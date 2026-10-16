import { StyleSheet, View } from 'react-native';
import Bejegyzes from './components/Bejegyzes.jsx';

export default function App() {
  const bejegyzesek = [
    { id: 1, cim: 'vsdv', hely: 'asd', leiras: 'asdfasdsd' },
    { id: 2, cim: 'sdvvsdv', hely: 'asdf' },
    { id: 3, cim: 'cycysc', hely: 'asdfg', leiras: 'asdasdasdasdasd' },
  ];

  return (
    <View style={styles.container}>
      {bejegyzesek.map((bejegyzes) => (
        <Bejegyzes key={bejegyzes.id} cim={bejegyzes.cim} hely={bejegyzes.hely} leiras={bejegyzes.leiras} />
      ))}
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
