import Loader from 'react-loader-spinner';

function LoadingScreen(): JSX.Element {
  return (
    <>
      <p>Loading ...</p>
      <Loader
        type="TailSpin"
        color="#000000"
        height={100}
        width={100}
      />
    </>
  );

}

export default LoadingScreen;
