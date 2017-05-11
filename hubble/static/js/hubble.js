
if ( ! document.getElementById( 'ReCharge' ) ) {

      function loadScript2(src) {
        var element = document.createElement("script");
        element.src = src;
        document.body.appendChild(element);
      }
      function downloadBundle() {
        loadScript2("/js/lib/bundle.js");
      }
      if (window.addEventListener)
        window.addEventListener("load", downloadBundle, false);
      else if (window.attachEvent)
        window.attachEvent("onload", downloadBundle);
      else window.onload = downloadBundle;

    } else {

      function loadSafeScript(src) {
        var element = document.createElement("script");
        element.src = src;
        document.body.appendChild(element);
      }
      function downloadSafeBundle() {
        loadSafeScript("/js/lib/recharge-safe-bundle.js");
      }
      if (window.addEventListener)
        window.addEventListener("load", downloadSafeBundle, false);
      else if (window.attachEvent)
        window.attachEvent("onload", downloadSafeBundle);
      else window.onload = downloadSafeBundle;

    }