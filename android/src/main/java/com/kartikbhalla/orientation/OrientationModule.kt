package com.kartikbhalla.orientation

import android.content.pm.ActivityInfo
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.Promise
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = OrientationModule.NAME)
class OrientationModule(reactContext: ReactApplicationContext) :
  NativeOrientationSpec(reactContext) {

  private var currentLock: Int? = null

  companion object {
    const val NAME = "@kartikbhalla/react-native-orientation"
  }

  override fun getName(): String {
    return NAME
  }

  override fun lockToLandscape() {
    currentActivity?.requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE
    currentLock = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE
  }

  override fun lockToPortrait() {
    currentActivity?.requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
    currentLock = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
  }

  override fun unlockAllOrientations() {
    currentActivity?.requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED
    currentLock = null
  }

  override fun isLocked(promise: Promise) {
    promise.resolve(currentLock != null)
  }
}
