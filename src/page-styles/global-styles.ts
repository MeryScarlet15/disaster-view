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

  //Cookiebot pop-up
  #CybotCookiebotDialogNavList{
   height: 0 !important;
  }
  #CybotCookiebotDialogHeader{
    display: none !important;
  }
  .CybotCookiebotScrollContainer{
    padding: 24px !important;
  }
  @media screen and (max-width: 575px){
    .CybotCookiebotScrollContainer{
      padding: 16px !important;
    }
  }
  #CybotCookiebotDialogBodyContent{
    padding: 0 !important;
  }
  #CybotCookiebotDialogBodyContent h2{
    display: none;
  }
  #CybotCookiebotDialog{
    border-radius: 16px !important;
    max-width: 784px !important;
  }
  #CybotCookiebotDialogFooter{
    padding: 16px !important;
  }
  @media screen and (max-width: 575px){
    #CybotCookiebotDialogFooter{
    padding-top: 0px !important;
    }
  }
  .CybotCookiebotDialogBodyButton{
    border-radius: 8px !important;
    padding:15.5px 16px !important;
    font-family: "Barlow SemiBold" !important;
    font-size: 16px !important;
    letter-spacing: 0 !important;
    line-height: 16px !important;
    box-sizing: border-box !important;
    border-width: 1px !important;
    max-width: 240px !important;
  }
  @media screen and (max-width: 600px){
    .CybotCookiebotDialogBodyButton{
      max-width: 100% !important;
    }
    #CybotCookiebotDialogBodyLevelButtonCustomize{
      margin-bottom: 0 !important;
    }
  }
  #CybotCookiebotDialogBodyLevelButtonCustomize{
    margin-right: auto !important;
  }
  @media screen and (min-width: 601px){
    #CybotCookiebotDialogBodyLevelButtonCustomize{
      margin-right: auto !important;
      padding-left: 0 !important;
      justify-content: flex-start !important;
    }
    #CybotCookiebotDialogBodyButtonDecline{
      margin-right: auto !important;
      padding-left: 0 !important;
      justify-content: flex-start !important;
    }
  }
  #CybotCookiebotDialog .CybotCookiebotScrollContainer {
    border: 1px solid #eeeeee !important;
  }
  @media screen and (max-width: 575px){
    #CybotCookiebotDialog .CybotCookiebotScrollContainer {
      border: none !important;
    }
  }
  #CybotCookiebotDialog .CybotCookiebotScrollContainer.CybotCookiebotDialogActive{
    padding: 40px 24px !important;
  }
  #CybotCookiebotDialogDetailBodyContentCookieContainerTypes{
    padding: 0 !important;
  }
  .CookieCard{
    padding-top: 0 !important;
    padding-bottom: 40px !important; 
    margin-bottom: 40px !important;
    border-bottom: 1px solid #EEEEEE !important;
  }
  .CybotCookiebotDialogDetailBulkConsentCount{
    color: #FFFFFF !important;
    background-color: #FD6291 !important;
    height: 17px !important;
    width: 17px !important;
    line-height: 1em !important;
    border-radius: 50% !important;
  }
  .CybotCookiebotDialogDetailBodyContentCookieTypeIntro{
    padding-top: 16px !important;
    padding-left: 0 !important;
    color: #666666 !important;
    font-family: "Barlow" !important;
    font-size: 16px !important;
    letter-spacing: -0.3px !important;
    line-height: 24px !important;
  }
  .CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer{
    margin-left: 0 !important;
    padding-top: 0 !important;
    margin-top: 24px !important;
    
  }
  .CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer .CybotCookiebotDialogDetailBodyContentCookieTabContent p{
    border: none !important;
    padding: 0 !important;
    border-radius: 16px !important;
    margin-bottom: 8px !important; 
  }
  .CybotCookiebotDialogCollapsed{
    font-family: "Barlow Medium" !important;
    font-size: 16px !important;
    letter-spacing: 0 !important;
    line-height: 24px !important;
  }
  #CybotCookiebotDialogTabContent .CybotCookiebotDialogBodyLevelButtonSliderWrapper {
    width: 40px !important;
    height: 24px !important;
    border-radius: 12px !important;
  }
  #CybotCookiebotDialogTabContent .CybotCookiebotDialogBodyLevelButtonSliderWrapper span{
    width: 40px !important;
    height: 24px !important;
    border-radius: 12px !important;
    background-color: #EEEEEE !important;
  }
  #CybotCookiebotDialogTabContent input+.CybotCookiebotDialogBodyLevelButtonSlider:before{
    background-color: #666666 !important;
    left: 0 !important;
    bottom: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #CybotCookiebotDialogTabContent input:checked+.CybotCookiebotDialogBodyLevelButtonSlider:before{
    content: "✓";
    background-color: #00FFDE !important;
    right: 0 !important;
    transform: translateX(14px) !important;
  }
  .CybotCookiebotDialogDetailBodyContentCookieGroup{
    border: none !important;
    padding: 0 !important;
  }
  .CybotCookiebotDialogDetailBodyContentCookieGroup:hover{
    background-color: #fff !important;
  }
  #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CybotCookiebotDialogDetailBodyContentCookieInfo.CybotCookiebotDialogShow:first-of-type:before {
    display: none !important;
  }
  #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CybotCookiebotDialogDetailBodyContentCookieInfo.CybotCookiebotDialogShow:first-of-type{
    margin-top: 40px !important;
  }
  #CybotCookiebotDialogDetailBodyContentCookieContainerTypes .CybotCookiebotDialogDetailBodyContentCookieInfo.CybotCookiebotDialogShow{
    margin-top: 8px !important;
    background-color: #fff !important;
    padding: 24px !important;
  }
  .CybotCookiebotDialogDetailBodyContentCookieInfoTitle{
    font-family: "Barlow Medium" !important;
    font-size: 16px !important;
    letter-spacing: 0 !important;
    line-height: 24px !important;
  }
  .CybotCookiebotDialogDetailBodyContentCookieInfoDescription{
    color: #666666 !important;
    font-family: "Barlow" !important;
    font-size: 16px !important;
    letter-spacing: -0.3px !important;
    line-height: 24px !important;
  }
  .CybotCookiebotDialogDetailBodyContentCookieInfoFooterContent{
    color: #666666 !important;
    font-family: "Barlow" !important;
    font-size: 16px !important;
    letter-spacing: -0.3px !important;
    line-height: 24px !important;
  }
  .CybotCookiebotDialogDetailBodyContentCookieInfoFooterContent b{
    color: #000 !important;
    font-weight: bold;
  }
  #CybotCookiebotDialogBodyContentText{
      font-family: "Barlow Medium" !important;
      font-size: 16px !important;
      letter-spacing: 0 !important;
      line-height: 24px !important;
      color: #666666 !important;
  }
  #CybotCookiebotDialogBodyContentText a{
      font-family: "Barlow Medium" !important;
      font-size: 16px !important;
      letter-spacing: 0 !important;
      line-height: 24px !important;
  }
  #CybotCookiebotDialogPoweredByText{
    display: none !important;
  }
  @media screen and (max-width: 575px){
    #CybotCookiebotDialogBodyContentText{
      font-size: 12px !important;
      line-height: 16px !important;
    }
    #CybotCookiebotDialogBodyContentText a{
      font-size: 12px !important;
      line-height: 16px !important;
    }
    .CybotCookiebotScrollContainer{
      min-height: auto !important;
      height: auto !important;
    }
  }
  .CybotCookiebotDialogArrow{
    display: none !important;
  }
  #CybotCookiebotDialogBodyUnderlay{
    background-color: rgba(170,170,170,0.9) !important;
  }
  #CookiebotWidget{
    display: none !important;
  }
  .CybotExternalLinkArrow{
    display: none !important;
  }
  #CybotCookiebotDialogTabContent .CybotCookiebotDialogDetailBulkConsentCount{
    padding: 0.15em 0em !important;
  }
  #CybotCookiebotDialogTabContent .CybotCookiebotDialogDetailBulkConsentCount.CybotCookiebotDialogDetailBodyContentCookieInfoCount{
    padding: 0.15em 0.4em !important;
  }
  .CybotCookiebotDialogDetailBodyContentCookieContainerButton{
    font-family: "Barlow Medium" !important;
  }
  #CybotCookiebotDialog{
    transition: none !important;
  }

  body {
    background: #1B1B1B;
  }
`;

export default GlobalStyles;
