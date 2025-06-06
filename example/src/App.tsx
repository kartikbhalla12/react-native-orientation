import { Text, View, StyleSheet } from 'react-native';
import Orientation from '@kartikbhalla/react-native-orientation';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: Orientation locked</Text>
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
