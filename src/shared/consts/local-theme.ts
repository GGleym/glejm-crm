import Color from 'color';

const alpha = (color: string, level: number) => Color(color).alpha(level).hsl().string();

const darken = (color: string, ratio: number) => Color(color).darken(ratio).hex();

//Брендовый, первичные кнопки
const red = '#E30611';

const redLight = '#FF0032';

//Ссылки
const blue = '#007CFF';

//Заливка фона, текст ошибки негативных действий
const orange = '#EB4A13';

//Заливка фона, текст успешных действий
const green = '#12B23F';

const neutralSecondary = '#202D3D';

//спец раздел premium
const emerald = '#00525D';

//брендовый для МТС деньги 2.0
const violet = '#8F8FFF';

const ratio = {
  sm: 0.125,
  md: 0.25,
  hover: 0.12,
  active: 0.24,
} as const;

const supportColors = {
  s100: '#7D4594',
  s150: '#9E7DCF',
  s200: '#60549C',
  s250: '#8787FF',
  s275: '#6384E0',
  s300: '#5CBCB6',
  s350: '#1793A4',
  s400: '#036DA9',
  s450: '#6796DE',
  s500: '#5D926B',
  s550: '#70AC41',
  s575: '#26CD58',
  s600: '#AFCF54',
  s625: '#E8FAEB',
  s650: '#F9CC2F',
  s700: '#C64F8F',
  s750: '#FA7474',
  s800: '#FA5533',
  s850: '#FF9D0A',
} as const;

const colors = {
  //Заголовки, основной текст, фон
  black: '#000000',
  white: '#FFF',
  neutral: {
    translucent: alpha(neutralSecondary, ratio.md),
    g100: '#000000',
    g200: '#18191C',
    g300: '#626C77',
    //Неактивный текст
    g400: '#969FA8',
    //Рамка поля, обводка
    g500: '#BBC1C7',
    //Разделители, вторичные кнопки
    g600: '#E2E5EB',
    //Текст, заливка фона
    g700: '#F2F3F7',
    //Заливка фона
    g800: '#FFFFFF',
  },
  greyscale: {
    g800: '#1D2023',
  },
  red: {
    primary: red,
    hover: darken(red, ratio.hover),
    active: darken(red, ratio.active),
    translucent: alpha(red, ratio.sm),
    light: redLight,
  },
  blue: {primary: blue, hover: darken(blue, ratio.hover), active: darken(blue, ratio.active)},
  orange: {
    primary: orange,
    hover: darken(orange, ratio.hover),
    active: darken(orange, ratio.active),
  },
  green: {primary: green, hover: darken(green, ratio.hover), active: darken(green, ratio.active)},
  yellow: {
    autofill: '#FBFFC4',
  },
  emerald: {
    primary: emerald,
    hover: '#4D868E',
    active: '#1A636D',
  },
  // Цвета ховера пока нет. Заменить, как будет готов дизайн.
  violet: {
    primary: violet,
    light: '#8F8FFF0D',
    hover: violet,
  },
  mtsdengi: {
    text: {
      primary: '#1D2023',
      secondary: '#626C77',
    },
    background: {
      secondary: '#F2F3F7',
      primaryElevated: '#FFFFFF',
    },
  },
  transparent: 'transparent',
  supportColors,
} as const;

const fonts = {
  font_sizes: {
    header: {sm: 20, sm1: 20, md: 24, md1: 24, lg: 32, xl: 40, xl1: 40, h1: 36, h2: 32, h3: 24, h4: 20, promo2: 44},
    par: {sm: 12, md: 14, lg: 17, xl: 20, p1: 24, p2: 20, p3: 17, p4: 14, c1: 12, c2: 10},
  },
  font_family: '"MTS Sans", "Arial", "Helvetica", sans-serif',
  font_family_wide: '"MTS Wide", sans-serif',
  font_family_comp: '"MTS Compact", sans-serif',
  font_family_text: '"MTS Text", sans-serif',
  font_weights: {light: 300, regular: 400, medium: 500, bold: 700, black: 900},
  line_heights: {
    header: {sm: 24, sm1: 28, md: 28, md1: 32, lg: 36, xl: 44, xl1: 48, h1: 40, h2: 36, h3: 28, h4: 24, promo2: 44},
    par: {sm: 16, md: 20, lg: 24, xl: 24, p1: 32, p2: 28, p3: 24, p4: 20, c1: 16, c2: 12},
  },
  bottom_margins: {sm: 8, md: 16, lg: 24, xl: 32},
} as const;

export const LOCAL_THEME = {
  spacings: {
    xs5: 2,
    xs4: 4,
    xs3: 8,
    xs2: 12,
    xs: 16,
    sm: 24,
    md: 32,
    lg: 40,
    xl: 52,
    xl2: 64,
    xl3: 80,
    xl4: 96,
  },
  breakpoints: {
    none: 0,
    mob: 360,
    mobLg: 600,
    tablet: 768,
    sm: 1024,
    md: 1280,
    lg: 1440,
    uber: 1920,
  },
  radiuses: {
    xl: 10,
    lg: 8,
    md: 6,
    sm: 4,
    xs: 2,
    round: 5000,
  },
  colors,
  fonts,
} as const;
