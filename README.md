# @kartikbhalla/react-native-orientation

A lightweight React Native library for controlling screen orientation on iOS and Android devices.

## Features

- Lock device orientation to portrait mode
- Lock device orientation to landscape mode
- Unlock all orientations (allows device to rotate freely)
- Check if orientation is currently locked

## Installation

```sh
# Using npm
npm install @kartikbhalla/react-native-orientation

# Using yarn
yarn add @kartikbhalla/react-native-orientation
```

### iOS

The package is a Turbo Module, so it should work automatically with CocoaPods and autolinking in React Native ≥ 0.60

```sh
cd ios && pod install
```

### Android

No additional steps needed for Android as the library uses autolinking.

## Usage

```js
import DeviceOrientation from '@kartikbhalla/react-native-orientation';

// Lock to portrait mode
DeviceOrientation.lockToPortrait();

// Lock to landscape mode
DeviceOrientation.lockToLandscape();

// Unlock all orientations (allow device to rotate freely)
DeviceOrientation.unlockAllOrientations();

// Check if orientation is currently locked
const checkIfLocked = async () => {
  const isLocked = await DeviceOrientation.isLocked();
  console.log('Is orientation locked?', isLocked); // true or false
};
```

## API Reference

### `lockToPortrait()`

Locks the device screen to portrait orientation.

```js
DeviceOrientation.lockToPortrait();
```

### `lockToLandscape()`

Locks the device screen to landscape orientation.

```js
DeviceOrientation.lockToLandscape();
```

### `unlockAllOrientations()`

Unlocks the device screen orientation, allowing it to rotate freely based on device orientation.

```js
DeviceOrientation.unlockAllOrientations();
```

### `isLocked()`

Returns a Promise that resolves to a boolean indicating whether the orientation is currently locked.

```js
// Using async/await
const isLocked = await DeviceOrientation.isLocked();

// Using Promises
DeviceOrientation.isLocked()
  .then((isLocked) => {
    console.log('Is orientation locked?', isLocked);
  });
```

## Example

```js
import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import DeviceOrientation from '@kartikbhalla/react-native-orientation';

const App = () => {
  const [orientationLocked, setOrientationLocked] = useState(false);

  useEffect(() => {
    // Check initial lock status
    checkLockStatus();
    
    // Cleanup on unmount
    return () => {
      DeviceOrientation.unlockAllOrientations();
    };
  }, []);

  const checkLockStatus = async () => {
    const isLocked = await DeviceOrientation.isLocked();
    setOrientationLocked(isLocked);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>
        Orientation is {orientationLocked ? 'locked' : 'unlocked'}
      </Text>
      
      <Button
        title="Lock to Portrait"
        onPress={() => {
          DeviceOrientation.lockToPortrait();
          setOrientationLocked(true);
        }}
      />
      
      <Button
        title="Lock to Landscape"
        onPress={() => {
          DeviceOrientation.lockToLandscape();
          setOrientationLocked(true);
        }}
      />
      
      <Button
        title="Unlock All Orientations"
        onPress={() => {
          DeviceOrientation.unlockAllOrientations();
          setOrientationLocked(false);
        }}
      />
    </View>
  );
};

export default App;
```

## Compatibility

- React Native: 0.60 and above
- iOS: 12.0 and above
- Android: API level 21 (Android 5.0) and above

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
