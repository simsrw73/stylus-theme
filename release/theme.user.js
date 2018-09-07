// ==UserScript==
// @name          StylUS
// @description   A theme for Stylus
// @version       0.1.0
// @author        Randy W. Sims <simsrw73@gmail.com>
// @license       MIT
// @namespace     https://github.com/author
// @homepageURL   https://github.com/author/stylus-theme
// @supportURL    https://github.com/author/stylus-theme/issues
// @updateURL     https://github.com/author/stylus-theme/raw/master/release/theme.meta.js
// @downloadURL   https://github.com/author/stylus-theme/raw/master/release/theme.user.js
// @run-at        document-start
// @include       chrome-extension://clngdbkpkpeebahjckkjfobafhncgmne/*
// ==/UserScript==
(function() {var css = [
  "  /* latin */",
  "  @font-face { font-family: \"Open Sans\"; font-style: normal; font-weight: 400; src: local(\"Open Sans Regular\"), local(\"OpenSans-Regular\"), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0b.woff2) format(\"woff2\"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,",
  "   U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,",
  "   U+FEFF, U+FFFD; }",
  "  @font-face { font-family: \"Open Sans\"; font-style: normal; font-weight: 700; src: local(\"Open Sans Bold\"), local(\"OpenSans-Bold\"), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2) format(\"woff2\"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,",
  "   U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,",
  "   U+FEFF, U+FFFD; }",
  "  /* latin-ext */",
  "  @font-face { font-family: \"Source Code Pro\"; font-style: normal; font-weight: 400; src: local(\"Source Code Pro\"), local(\"SourceCodePro-Regular\"), url(https://fonts.gstatic.com/s/sourcecodepro/v7/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWjMY.woff2) format(\"woff2\"); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,",
  "   U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }",
  "  /* latin */",
  "  @font-face { font-family: \"Source Code Pro\"; font-style: normal; font-weight: 400; src: local(\"Source Code Pro\"), local(\"SourceCodePro-Regular\"), url(https://fonts.gstatic.com/s/sourcecodepro/v7/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevW.woff2) format(\"woff2\"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,",
  "   U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,",
  "   U+FEFF, U+FFFD; }",
  "  /* Fontawesome Icons */",
  "  /*! Font Awesome Free 5.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */",
  "  @font-face { font-family: \'Font Awesome 5 Free\'; font-style: normal; font-weight: 400; src: url(\"https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.eot\"); src: url(\"https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.woff2\") format(\"woff2\"), url(\"https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.woff\") format(\"woff\"), url(\"https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.ttf\") format(\"truetype\"), url(\"https://use.fontawesome.com/releases/v5.3.1/webfonts/fa-regular-400.svg#fontawesome\") format(\"svg\"); }",
  "  .far { font-family: \'Font Awesome 5 Free\'; font-weight: 400; }",
  "  /* Material Icons */",
  "  @font-face { font-family: \"Material Icons\"; font-style: normal; font-weight: 400; src: url(https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\"); }",
  "  html, body { background-color: #91d0c6; color: white; letter-spacing: 0.025em; font-family: \"Open Sans\", sans-serif; }",
  "  h1, h2, h3 { letter-spacing: 0.025em; color: #26fefa; }",
  "  h2 { font-variant: small-caps; }",
  "  details { margin-top: 1em; }",
  "  button { padding-top: 0.25em; padding-bottom: 0.25em; background-color: #91d0c6; }",
  "  select { color: white; padding-right: 1.25em; font-weight: 300; letter-spacing: 0.025em; width: auto !important; }",
  "  select option { background-color: #91d0c6; color: #00352d; }",
  "  input:not([type=\"checkbox\"]) { padding-top: 0.25em !important; padding-bottom: 0.25em !important; height: auto !important; }",
  "  input[type=\"checkbox\"]:not(.slider):hover { background-color: #00352d; }",
  "  input[type=\"checkbox\"]:not(.slider):hover:active, input[type=\"checkbox\"]:not(.slider):hover:hover { background-color: #00352d; }",
  "  svg.svg-icon { fill: white !important; }",
  "  #installed .entry h2 { padding-top: 1em; padding-bottom: 1em; }",
  "  #installed .entry.odd { background-color: rgba(0, 53, 45, 0.2); }",
  "  .style-name-link { color: #00352d; }",
  "  .disabled h2::after { background-color: rgba(0, 53, 45, 0.3); color: #ccc; }",
  "  .entry.usercss .style-name-link::after { background-color: #00352d; color: white; }",
  "  .disabled h2 .style-name-link, .disabled h2::after, .disabled .actions, .disabled .applies-to { opacity: 1; }",
  "  .target { color: #00352d; font-weight: 400; }",
  "  .actions .svg-icon { fill: #00352d !important; }",
  "  .can-update[data-details$=\"locally edited\"] .update svg, .update-problem .check-update svg { fill: #cc0000 !important; }",
  "  .CodeMirror { font-family: \"Source Sans Pro\", monospace; }",
  "  #header { background-color: #00352d; border-right: 1px solid transparent; overflow-x: hidden; overflow-y: auto; -webkit-box-shadow: 2px 0 16px rgba(0, 0, 0, 0.6); box-shadow: 2px 0 16px rgba(0, 0, 0, 0.6); }",
  "  #header h1 { letter-spacing: 0.05em; }",
  "  #header h1:before { content: \"{\"; font-size: 1.2em; }",
  "  #header h1:after { content: \"}\"; font-size: 1.2em; }",
  "  #manage-text a { color: #91d0c6; }",
  "  select#manage { padding-top: 0.25em !important; padding-bottom: 0.25em !important; height: auto !important; }",
  "  #stylus-popup { background-color: #00352d; }",
  ""
].join("\n");
if (typeof GM_addStyle != "undefined") {
  GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
  PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
  addStyle(css);
} else {
  var node = document.createElement("style");
  node.type = "text/css";
  node.appendChild(document.createTextNode(css));
  var heads = document.getElementsByTagName("head");
  if (heads.length > 0) {
    heads[0].appendChild(node);
  } else {
    // no head yet, stick it whereever
    document.documentElement.appendChild(node);
  }
}
})();
