import cn from 'classnames/bind';
import Loader from 'react-loader-spinner';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import styles from './sign-in-button.module.css';

type SignInButtonProps = {
  isDisabled: boolean;
}

const mapStateToProps = ({ isLoginLoading }: State) => ({
  isLoginLoading,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & SignInButtonProps;


function SignInButton({ isDisabled, isLoginLoading }: ConnectedComponentProps): JSX.Element {
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

export { SignInButton };
export default connector(SignInButton);
