const cursorColor = '#abc8ff';
const foregroundColor = '#453d40';
const backgroundColor = '#ffffff';
const tabBorderColor = '#E2E4E7';
const colors = {
  black: '#abc8ff',
  lightBlack: '#a1a2fb',
  red: '#ff98c5',
  lightRed: '#ff71b5',
  green: '#54d7d0',
  lightGreen: '#27b2ca',
  yellow: '#fcd198',
  lightYellow: '#fca760',
  blue: '#93e0ff',
  lightBlue: '#6693b3',
  magenta: '#9999db',
  lightMagenta: '#7d69d2',
  cyan: '#c9acca',
  lightCyan: '#d56fa9',
  white: '#807dc3',
  lightWhite: '#3a3690'
};

exports.decorateConfig = config => { 
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .hyper_main {
        border: none !important;
      }
      .splitpane_divider {
        background-color: ${foregroundColor} !important;
      }
      .header_header, .header_windowHeader {
        top: 0;
        left: 0;
        right: 0;
        color: ${foregroundColor} !important;
        background: ${backgroundColor} !important;
        border-bottom: 1px solid ${tabBorderColor} !important;
      }
      .header_shape {
        color: ${foregroundColor} !important;
      }
      .tabs_title {
        color: ${foregroundColor};
        font-weight: 600;
      }
      .tab_tab {
        border: 0;
        background-color: ${backgroundColor};
      }
    `
 })
};

