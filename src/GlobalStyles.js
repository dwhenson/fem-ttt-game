import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* stylelint-disable */
:root {
  /* Common colors */
  --clr-primary-100: hsl(178, 60%, 48%);
  --clr-primary-200: hsl(178, 75%, 65%);
  --clr-secondary-100: hsl(39, 88%, 58%);
  --clr-secondary-200: hsl(39, 100%, 69%);
  --clr-dark-100: hsl(202, 32%, 15%);
  --clr-dark-200: hsl(199, 35%, 19%);
  --clr-light-100: hsl(197, 33%, 89%);
  --clr-light-200: hsl(198, 23%, 72%);

  /* Spacing */
  --space-xxs: clamp(0.56rem, calc(0.54rem + 0.09vw), 0.63rem);
  --space-xs: clamp(0.88rem, calc(0.85rem + 0.09vw), 0.94rem);
  --space-s: clamp(1.13rem, calc(1.08rem + 0.19vw), 1.25rem);
  --space-m: clamp(1.69rem, calc(1.62rem + 0.28vw), 1.88rem);
  --space-l: clamp(2.25rem, calc(2.16rem + 0.38vw), 2.5rem);
  --space-xl: clamp(3.38rem, calc(3.24rem + 0.56vw), 3.75rem);
  --space-xxl: clamp(4.5rem, calc(4.32rem + 0.75vw), 5rem);

  /* Font styles */
  --ff-body: "Outfit", sans-serif;

  /* Font sizes */
  --step--2: clamp(0.65rem, calc(0.56rem + 0.44vw), 0.96rem);
  --step--1: clamp(0.78rem, calc(0.66rem + 0.6vw), 1.2rem);
  --step-0: clamp(0.94rem, calc(0.78rem + 0.8vw), 1.5rem);
  --step-1: clamp(1.13rem, calc(0.91rem + 1.07vw), 1.88rem);
  --step-2: clamp(1.35rem, calc(1.07rem + 1.42vw), 2.34rem);
  --step-3: clamp(1.62rem, calc(1.25rem + 1.87vw), 2.93rem);
  --step-4: clamp(1.94rem, calc(1.45rem + 2.45vw), 3.66rem);
  --step-5: clamp(2.33rem, calc(1.69rem + 3.21vw), 4.58rem);

  /* Box shadow */
  --shadow-color: 26, 42, 51;
  /* prettier-ignore */
  --shadow-elevation-low:
    0.3px 0.5px 0.8px rgba(var(--shadow-color, 7, 0%, 14%), 0.14),
    0.6px 1px 1.6px -0.5px rgba(var(--shadow-color, 7, 0%, 14%), 0.28),
    1.2px 2.1px 3.3px -1px rgba(var(--shadow-color, 7, 0%, 14%), 0.42);
  /* prettier-ignore */
  --shadow-elevation-medium:
    0.3px 0.5px 0.8px rgba(var(--shadow-color, 7, 0%, 14%), 0.15),
    1.3px 2.3px 3.6px -0.3px rgba(var(--shadow-color, 7, 0%, 14%), 0.26),
    2.8px 4.9px 7.6px -0.7px rgba(var(--shadow-color, 7, 0%, 14%), 0.36),
    6.1px 10.7px 16.6px -1px rgba(var(--shadow-color, 7, 0%, 14%), 0.47);
}

/* ==================================================
   Reset
   ================================================== */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd,
ul,
ol,
button {
  margin: 0;
  hyphens: auto;
  overflow-wrap: break-word;
}

/* Set core body defaults */
body {
  min-block-size: 100vh;
  overflow-y: scroll;
  background-color: #fff;
  line-height: 1.5;
  color: #000;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}

/* Adjust line heights */
h1,
h2,
h3,
h4 {
  line-height: 1;
}

/* Remove list styles on ul, ol elements with a class */
:where(ul[role="list"]),
:where(ol[role="list"]) {
  padding-inline: 0;
  list-style-type: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-inline-size: 100%;
}

/* Preserve aspect ratio */
img[width][height] {
  block-size: auto;
}

/* Let SVG scale without boundaries */
img[src$=".svg"] {
  block-size: auto;
  max-inline-size: 100%;
  max-inline-size: none;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  overflow-wrap: break-word;
  font: inherit;
}

/* Add space for anchor links */
[id] {
  scroll-margin-top: 2ex;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}

:focus-visible {
  opacity: 1;
  outline: 2px solid var(--clr-light-100);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: transparent;
}
`;

export default GlobalStyles;
