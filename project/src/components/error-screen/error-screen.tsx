import styles from './error-screen.module.css';
import cn from 'classnames/bind';


function ErrorScreen(): JSX.Element {
  return (
    <div className={cn('page-content', styles.wrapper)}>
      <p>Something went wrong, please try reloading the page</p>
    </div>
  );

}

export default ErrorScreen;
