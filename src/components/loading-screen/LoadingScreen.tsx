import './LoadingScreen.css';

const IMAGE = '/images/logo.svg';

const LoadingScreen: React.FC = ({ width = '8vw' }: { width?: string }) => {
  return (
    <div className='loading-screen'>
      <div style={{ width, height: '5rem' }}>
        <img src={IMAGE} alt='Logo' style={{ width: '100px' }} />
        <span className='loader'></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
