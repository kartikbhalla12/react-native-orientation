import DeviceOrientationModule from './NativeDeviceOrientation';

function lockToLandscape(): void {
  DeviceOrientationModule.lockToLandscape();
}

function lockToPortrait(): void {
  DeviceOrientationModule.lockToPortrait();
}

function unlockAllOrientations(): void {
  DeviceOrientationModule.unlockAllOrientations();
}

async function isLocked(): Promise<boolean> {
  return await DeviceOrientationModule.isLocked();
}
const DeviceOrientation = {
  lockToLandscape,
  lockToPortrait,
  unlockAllOrientations,
  isLocked,
};

export default DeviceOrientation;
