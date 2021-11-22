import cn from 'classnames/bind';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getLoginLoadingStatus } from '../../store/user-process/selectors';
import styles from './sign-in-button.module.css';

type SignInButtonProps = {
  isDisabled: boolean;
}

function SignInButton({ isDisabled }: SignInButtonProps): JSX.Element {
  const isLoginLoading = useSelector(getLoginLoadingStatus);

  return (
    <div className="sign-in__submit">
      <button
        className={cn('sign-in__btn', styles.btn, {[styles.btnDisabled]: isDisabled || isLoginLoading})}
        type="submit"
        disabled={isDisabled}
      >
        {isLoginLoading &&
        <div className={styles.loaderWrapper}>
          <Loader
            type="TailSpin"
            color="#c9b37e"
            height={40}
            width={40}
          />
        </div>}
        Sign in
      </button>
    </div>
  );
}

export default SignInButton;
