import baseStyled, { ThemedStyledInterface } from 'styled-components';

const breakpoints = {
  xs: '425px',
  sm: '768px',
  md: '1024px',
  lg: '1440px',
  xl: '1690px'
}

export const theme = {
  colors: {
    primary: '#246A73',
    primaryAccent: '#368F8B',
    secondary: '#F3DFC1',
    secondaryAccent: '#DDBEA8',
    dark0: '#160F29',
    dark1: '#281C4A',
    dark2: '#37295f',
    light0: '#F3F0F9',
    light1: '#DCD3EE',
    light2: '#C5B6E2'
  },

  shadow: '0 1px 2px 0 rgba(0,0,0,0.12), 0 1px 4px 0 rgba(0,0,0,0.08)',

  breakpoints: {
    xs: breakpoints.xs,
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg,
    xl: breakpoints.xl
  },

  font: {
    primary: "helvetica, sans-serif",
    secondary: "garamond, serif",
    xl: {
      size: '6rem',
      lineHeight: '4rem',
      weight: 400,
    },
    h1: {
      size: '4.8rem',
      lineHeight: '6rem',
      weight: 400,
    },
    h2: {
      size: '3.6rem',
      lineHeight: '1.5',
      weight: 500,
    },
    h3: {
      size: '2.4rem',
      lineHeight: '1.15',
      weight: 400,
    },
    h4: {
      size: '2.1rem',
      lineHeight: '1.15',
      weight: 400,
    },
    h5: {
      size: '1.8rem',
      lineHeight: '1.5',
      weight: 400,
    },
    plg: {
      size: '2rem',
      lineHeight: '1.7',
      weight: 300,
    },
    p: {
      size: '1.6rem',
      lineHeight: '1.7',
      weight: 300,
    },
    small: {
      size: '1.2rem',
      lineHeight: '1.7',
      weight: 300,
    },
  },

  grid: {
    container: {
      padding: 32,
      maxWidth: {
        xxl: 1320,
        xl: 1320,
        lg: 1320,
        md: 1320,
        sm: 720,
        xs: 720,
      },
    },
  },

  mediaQueries: {
    desktop: `only screen and (min-width: ${breakpoints.xl})`,
    laptopL: `only screen and (min-width: ${breakpoints.lg})`,
    laptop: `only screen and (min-width: ${breakpoints.md})`,
    tablet: `only screen and (min-width: ${breakpoints.sm})`,
    phone: `only screen and (min-width: ${breakpoints.xs})`
  }
}

export type TTheme = typeof theme;

export const styled = baseStyled as ThemedStyledInterface<TTheme>;