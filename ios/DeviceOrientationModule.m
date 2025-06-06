#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DeviceOrientationModule, NSObject)

RCT_EXTERN_METHOD(lockToLandscape)
RCT_EXTERN_METHOD(lockToPortrait)
RCT_EXTERN_METHOD(unlockAllOrientations)
RCT_EXTERN_METHOD(isLocked:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
