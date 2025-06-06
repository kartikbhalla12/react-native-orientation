import { Text, View, StyleSheet } from 'react-native';
import DeviceOrientation from '@kartikbhalla/react-native-orientation';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    DeviceOrientation.lockToLandscape();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: Device Orientation locked</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
