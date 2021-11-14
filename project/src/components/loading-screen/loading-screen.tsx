import Loader from 'react-loader-spinner';
import styles from './loading-screen.module.css';
import cn from 'classnames/bind';

function LoadingScreen(): JSX.Element {
  const cls = cn('page-content', styles.wrapper);
  return (
    <div className={cls}>
      <p>Loading ...</p>
      <Loader
        type="TailSpin"
        color="#c9b37e"
        height={100}
        width={100}
      />
    </div>
  );
}

export default LoadingScreen;
