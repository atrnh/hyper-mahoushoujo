const cursorColor = '#abc8ff';
const foregroundColor = '#453d40';
const backgroundColor = '#ffffff';
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
    colors
 })
};

