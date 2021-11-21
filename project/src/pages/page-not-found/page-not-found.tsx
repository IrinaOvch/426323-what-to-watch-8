import { Link } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './page-not-found.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className={cn('page-content', styles.wrapper)}>
      <h1>404. Page not found</h1>
      <Link to="/" style={{color: 'inherit'}}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundScreen;
