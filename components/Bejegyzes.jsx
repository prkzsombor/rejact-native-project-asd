import { View, Text } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras }) {
  return (
    <View>
      <Text>Cím: {cim}</Text>
      <Text>Hely: {hely}</Text>
      {leiras ? <Text>{leiras}</Text> : null}
    </View>
  );
}
