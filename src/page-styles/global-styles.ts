import { createGlobalStyle } from "styled-components";

export interface StyledSharedProps {
  theme?: any;
}

const GlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  main,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input,
  label,
  select,
  button,
  textarea
  {
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    background:none;
    line-height:1;
    outline: none;

  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }

  img {
   width: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  a {
    color: inherit;
    font-family: inherit;
    text-decoration: inherit;
  }

  a:focus {
    outline: thin dotted;
  }

  a:active,
  a:hover {
      outline: 0;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,div:focus {
    outline: none;
    border: none; 
  }

  #nprogress {
    .spinner {
      display: none; 
    }
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  body {
    background: ${(props: StyledSharedProps) => props.theme.background};
    color: ${(props: StyledSharedProps) => props.theme.black};
  }

  .react-reveal {
    span {
      white-space: pre; 
    }
  }

  /* Barlow */
  @font-face {
    font-family: "Barlow SemiBold";
     /* 600 */
    src: url(https://fonts.gstatic.com/s/barlow/v4/7cHqv4kjgoGqM7E30-8s51ostz0rdg.woff2) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    /* 400 */
    src: url(https://fonts.gstatic.com/s/barlow/v4/7cHpv4kjgoGqM7E_DMs5ynghnQ.woff2) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow Medium";
    /* 500 */
    src: url(https://fonts.gstatic.com/s/barlow/v4/7cHqv4kjgoGqM7E3_-gs51ostz0rdg.woff2) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow Light";
    /* 300 */
    src: url(https://fonts.gstatic.com/s/barlow/v4/7cHqv4kjgoGqM7E3p-ks51ostz0rdg.woff2) format('woff2');
    font-display: swap;
  }


  /* Roboto */
  @font-face {
    font-family: 'Roboto Medium';
    /* 500 */
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    /* 400 */
    src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
    font-display: swap;
  }

  body {
    background: #1B1B1B;
  }
`;

export default GlobalStyles;
