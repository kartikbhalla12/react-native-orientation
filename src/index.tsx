import OrientationModule from './NativeOrientation';

function lockToLandscape(): void {
  OrientationModule.lockToLandscape();
}

function lockToPortrait(): void {
  OrientationModule.lockToPortrait();
}

function unlockAllOrientations(): void {
  OrientationModule.unlockAllOrientations();
}

async function isLocked(): Promise<boolean> {
  return await OrientationModule.isLocked();
}
const Orientation = {
  lockToLandscape,
  lockToPortrait,
  unlockAllOrientations,
  isLocked,
};

export default Orientation;
