<script nonce="{{nonce}}" type="text/javascript">
(() => {
  const appDEUMSwitch = window?.appDEUMSwitch;
  const enableAppDGlobally = true;
  const shouldExecuteScript = enableAppDGlobally && appDEUMSwitch !== "off";
  if (!shouldExecuteScript) return;

  let currentNonce = document.currentScript?.nonce || document.currentScript?.getAttribute("nonce");

  if (!currentNonce && /TRIDENT|MSIE/i.test(navigator.userAgent)) {
    const scriptWithNonce = document.querySelector("script[nonce]");
    if (scriptWithNonce) currentNonce = scriptWithNonce.getAttribute("nonce");
  }

  window["adrum-start-time"] = Date.now();

  window["adrum-config"] = {
    userEventInfo: {
      PageView: context => ({
        userData: {
          wfacookie: window?.wfacookie || {},
          CustomerSegment: "TPB"
        }
      })
    }
  };

  const getMetaContent = name => document.querySelector(`meta[name="${name}"]`)?.content || "";

  ((config) => {
    const beaconURL = "https://pdx-col.eum-appdynamics.com";
    config.appKey = window?.appd_key;
    config.beaconUrlHttps = beaconURL;
    config.xd = { enable: false };
    config.xhr = {
      exclude: {
        urls: [
          { pattern: ".*/support/.*" },
          { pattern: ".*/fragments/.*" },
          { pattern: ".*/presentedDisposition/.*" },
          { pattern: ".*/bev/.*" },
          { pattern: ".*/service.maxymiser.net/.*" },
          { pattern: ".*/glassbox/.*" }
        ]
      }
    };

    if (getMetaContent("KONICHIWA9") === "true") {
      const pageName = `${location.pathname}-Tempest`;
      config.userEventInfo = config.userEventInfo || {};
      config.userEventInfo.PageView = {
        userPageName: pageName
      };
    }
  })(window["adrum-config"]);

  window.addEventListener("load", () => {
    const scriptPath = window?.appd_js_path;
    const scriptURL = `${scriptPath}/adrum-ext.js`;

    try {
      const url = new URL(scriptURL);
      const isValid = url.protocol === "https:" &&
                      /^[\w.-]+$/.test(url.hostname) &&
                      url.pathname.endsWith("/adrum-ext.js");

      if (scriptPath && isValid) {
        const adrumScript = document.createElement("script");
        adrumScript.src = encodeURI(scriptURL);
        adrumScript.setAttribute("nonce", currentNonce || "");
        adrumScript.async = true;

        setTimeout(() => {
          document.body.appendChild(adrumScript);
        }, 100);
      } else {
        console.warn("adrum-ext.js path is invalid or insecure.");
      }
    } catch (err) {
      console.error("adrum-ext.js path parsing failed.", err);
    }
  });
})();
</script>

<!-- FORM Script: Improved event listeners -->
<script nonce="{{nonce}}" type="text/javascript">
(() => {
  const form = document.querySelector('.login-form');
  const passwordField = document.querySelector('#password');
  const toggleBtn = document.querySelector('#hideShowBtn');
  const loginBtn = document.querySelector('#loginBtn');
  const warning = document.querySelector('.warning');

  form?.addEventListener('submit', e => e.preventDefault());

  toggleBtn?.addEventListener('click', () => {
    const isHidden = toggleBtn.classList.contains('hide');
    passwordField.type = isHidden ? 'text' : 'password';
    toggleBtn.src = isHidden ? './assets/eye-close.png' : './assets/eye-open.png';
    toggleBtn.classList.toggle('hide');
    toggleBtn.classList.toggle('show');
  });

  loginBtn?.addEventListener('click', () => {
    if (warning) warning.id = 'show';
  });
})();
</script>
