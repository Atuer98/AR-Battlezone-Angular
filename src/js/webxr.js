function checkWebXRAvailable() {
  const xrSupportLabel = document.getElementById("xr-support-label");

  if ('xr' in navigator) {
    navigator.xr.isSessionSupported('immersive-ar').then((isSupported) => {
      if (isSupported) {
        xrSupportLabel.textContent =
        "This device supports WebXR AR.";
        xrSupportLabel.classList.add("border-green-500","text-green-500");
      } else {
        xrSupportLabel.textContent = "WebXR AR is not supported in this browser.";
        xrSupportLabel.classList.add("border-red-500","text-red-500");
      }
    })
  } else {
    xrSupportLabel.textContent = "WebXR is not supported in this browser.";
    xrSupportLabel.classList.add("border-red-500","text-red-500");
  }
}

