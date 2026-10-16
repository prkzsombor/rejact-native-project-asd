import { View, Text } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras }) {
  return (
    <View>
      <Text>{cim}</Text>
      <Text>{hely}</Text>
      {leiras ? <Text>{leiras}</Text> : null}
    </View>
  );
}
