!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,n.disabled=!1,setTimeout((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.style.background=t}),1e3)})),n.addEventListener("click",(function(){t.disabled=!1,n.disabled=!0,clearInterval(null)}))}();
//# sourceMappingURL=01-color-switcher.44448856.js.map
