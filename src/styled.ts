import { styled } from 'styled-components';

// eslint-disable-next-line import/no-absolute-path
import background from '/images/background.png';

export const DemoContainer = styled.div({
  position: 'relative',
  // right: '1rem',
  // top: '3rem',
  // bottom: '3rem',
  width: '100%',
  height: '100%',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflowX: 'hidden',
  overflowY: 'scroll',
  // backgroundImage: 'url("./images/welcome-background.png")',

  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  '@media (max-width: 768px)': {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    border: 0,
    borderRadius: 0,
  },
});
