<script nonce="{{nonce}}" type="text/javascript">
(function() {
    const appDEUMSwitch = window?.appDEUMSwitch;
    const enableAppDGlobally = true;
    const shouldExecuteScript = enableAppDGlobally && appDEUMSwitch !== "off";
    if (!shouldExecuteScript) return;

    let currentNonce = null;

    if (document.currentScript) {
        currentNonce = document.currentScript.nonce || document.currentScript.getAttribute("nonce");
    } else if (/TRIDENT|MSIE/.test(navigator.userAgent.toUpperCase())) {
        document.querySelectorAll("script[nonce]").forEach(script => {
            if (!currentNonce) {
                currentNonce = script.getAttribute("nonce");
            }
        });
    }

    window["adrum-start-time"] = new Date().getTime();

    window["adrum-config"] = {
        userEventInfo: {
            PageView: function(context) {
                return {
                    userData: {
                        wfacookie: window?.wfacookie || {},
                        CustomerSegment: "TPB"
                    }
                };
            }
        }
    };

    function getMeta(metaName) {
        const meta = document.querySelector(`meta[name="${metaName}"]`);
        return meta ? meta.getAttribute("content") : "";
    }

    (function(config) {
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

        if (getMeta("KONICHIWA9") === "true") {
            const pagename = `${window.location.pathname}-Tempest`;
            config.userEventInfo = config.userEventInfo || {};
            config.userEventInfo.PageView = {
                userPageName: pagename
            };
        }
    })(window["adrum-config"] || {});

    window.addEventListener("load", function() {
        const adrumExtScript = document.createElement("script");
        const adrumExtScriptPath = window?.appd_js_path;

        if (adrumExtScriptPath && /^https:\/\/[a-zA-Z0-9.-]+\/.*adrum-ext\.js$/.test(adrumExtScriptPath + "/adrum-ext.js")) {
            adrumExtScript.src = encodeURI(`${adrumExtScriptPath}/adrum-ext.js`);
            adrumExtScript.setAttribute("nonce", currentNonce || "");
            setTimeout(() => {
                document.body.appendChild(adrumExtScript);
            }, 100);
        } else {
            console.warn("adrum-ext.js path is invalid or insecure.");
        }
    });
})();
</script>

<script nonce="{{nonce}}" type="text/javascript">
// Prevent default form submission
document.querySelector('.login-form')?.addEventListener('submit', e => {
    e.preventDefault();
});

// Password visibility toggle
document.querySelector('#hideShowBtn')?.addEventListener('click', () => {
    const toggleBtn = document.querySelector('#hideShowBtn');
    const passwordField = document.querySelector('#password');

    if (toggleBtn.classList.contains('hide')) {
        toggleBtn.src = './assets/eye-close.png';
        toggleBtn.classList.replace('hide', 'show');
        passwordField.type = 'text';
    } else {
        toggleBtn.src = './assets/eye-open.png';
        toggleBtn.classList.replace('show', 'hide');
        passwordField.type = 'password';
    }
});

// Warning show
document.querySelector('#loginBtn')?.addEventListener('click', () => {
    const warning = document.querySelector('.warning');
    if (warning) {
        warning.id = 'show';
    }
});
</script>
