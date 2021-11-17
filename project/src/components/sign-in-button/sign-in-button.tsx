import cn from 'classnames/bind';
import styles from './sign-in-button.module.css';

type SignInButtonProps = {
  isDisabled: boolean;
}
function SignInButton({ isDisabled }: SignInButtonProps): JSX.Element {
  return (
    <div className="sign-in__submit">
      <button
        className={cn('sign-in__btn', isDisabled ? styles.btnDisabled : '')}
        type="submit"
        disabled={isDisabled}
      >
        Sign in
      </button>
    </div>
  );
}

export default SignInButton;


