import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  lockToLandscape(): void;
  lockToPortrait(): void;
  unlockAllOrientations(): void;
  isLocked(): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('DeviceOrientation');
