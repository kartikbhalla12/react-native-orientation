@objc(OrientationModule)
class OrientationModule: NSObject {

  private var currentLock: UIInterfaceOrientationMask?

  @objc
  func lockToLandscape() {
    setOrientation(to: .landscapeRight)
  }

  @objc
  func lockToPortrait() {
    setOrientation(to: .portrait)
  }

  @objc
  func unlockAllOrientations() {
    currentLock = nil
    DispatchQueue.main.async {
      UIDevice.current.setValue(UIInterfaceOrientation.unknown.rawValue, forKey: "orientation")
      UINavigationController.attemptRotationToDeviceOrientation()
    }
  }

  @objc
  func isLocked(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    resolve(currentLock != nil)
  }

  private func setOrientation(to orientation: UIInterfaceOrientation) {
    currentLock = maskFromOrientation(orientation)
    DispatchQueue.main.async {
      guard let scene = UIApplication.shared.connectedScenes.first as? UIWindowScene else { return }
      if #available(iOS 16.0, *) {
        let prefs = UIWindowScene.GeometryPreferences.iOS(interfaceOrientations: self.currentLock!)
        scene.requestGeometryUpdate(prefs) { error in
          print("Orientation update error: \(error.localizedDescription)")
        }
      } else {
        UIDevice.current.setValue(orientation.rawValue, forKey: "orientation")
        UINavigationController.attemptRotationToDeviceOrientation()
      }
    }
  }

  private func maskFromOrientation(_ orientation: UIInterfaceOrientation) -> UIInterfaceOrientationMask {
    switch orientation {
    case .landscapeLeft, .landscapeRight: return .landscape
    case .portrait: return .portrait
    default: return .all
    }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
