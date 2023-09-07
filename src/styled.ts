import { createGlobalStyle, styled } from 'styled-components';

// eslint-disable-next-line import/no-absolute-path
import background from '/images/background.png';

export const DemoContainer = styled.div({
  position: 'relative',
  // right: '1rem',
  // top: '3rem',
  // bottom: '3rem',
  width: '100%',
  height: '100vh',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflowX: 'hidden',
  overflowY: 'scroll',

  // backgroundImage: 'url("./images/welcome-background.png")',

  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  // '@media (max-width: 768px)': {
  //   position: 'fixed',
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   border: 0,
  //   borderRadius: 0,
  // },
});
export const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.logo {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
  width: 100px;  
  height: auto;
}
.vfrc-header {
  display: none;
}
.vfrc-chat {
  max-height: calc(100vh - 8rem);
  top: 4rem;
  background-color: transparent !important;
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
    text-align: left;
    padding-left: 20%;

}
.vfrc-chat--dialog {
  background-color: transparent !important;
}
.vfrc-message {
  background-color:transparent;
  width:400px;
  max-width:400px;
  color: grey;
}
.vfrc-input {
  border: none;
  background: transparent;
  box-shadow: none;
}
.vfrc-input:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
.vfrc-timestamp {
  display: none;
}
.vfrc-chat-input--button {
  display: none;
}
.vfrc-avatar {
  display: none !important;
}
.vfrc-widget--chat {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  border: none !important;
  max-width: none !important;
  max-height: none !important;
}
.vfrc-footer--watermark {
  display: none;
}`
