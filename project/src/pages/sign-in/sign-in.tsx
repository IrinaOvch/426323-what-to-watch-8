import { FormEvent, useState, ChangeEvent, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import cn from 'classnames/bind';
import SignInButton from '../../components/sign-in-button/sign-in-button';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { ThunkAppDispatch } from '../../types/action';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import { AppRoute } from '../../const';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type FieldProps = {
  value: string;
  isError: boolean;
  errorText: string,
  regex: RegExp;
}
type FormStateProps = {
  [key: string]: FieldProps;
}

const formFields = {
  email: 'Email address',
  password: 'Password',
};

function AuthScreen(props: PropsFromRedux): JSX.Element {
  const [formState, setFormState] = useState<FormStateProps>({
    email: {
      value: '',
      isError: false,
      errorText: 'Please enter a valid email address',
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {
      value: '',
      isError: false,
      errorText: 'Please enter a valid password: at least one letter and digit',
      regex: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
    },
  });
  const [signInButtonDisabledState, setSignInButtonDisabledState] = useState(true);

  const {onSubmit} = props;

  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      email: formState.email.value,
      password: formState.password.value,
    });
    history.push(AppRoute.Main);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const rule = formState[name].regex;

    const isValueValid = rule.test(value);

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        isError: isValueValid ? !isValueValid : formState[name].isError,
      },
    });
  };

  const handleFocusOut = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const rule = formState[name].regex;
    const isValueValid = rule.test(value);
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        isError: !isValueValid,
      },
    });
  };

  useEffect(() => {
    const isValueEmailValid = formState.email.regex.test(formState.email.value);
    const isValuePasswordValid = formState.password.regex.test(formState.password.value);
    setSignInButtonDisabledState(!(isValueEmailValid && isValuePasswordValid));
  }, [formState]);

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          { Object.entries(formState).map(([field, state]) => {
            if (state.isError) {
              return(
                <div className="sign-in__message" key={field}>
                  <p>{state.errorText}</p>
                </div>);
            }
            return '';
          })}
          <div className="sign-in__fields">
            {Object.entries(formFields).map(([name, label]) => {
              const inputCls = cn('sign-in__field', {'sign-in__field--error': formState[name].isError});
              return (
                <div className={inputCls} key={name}>
                  <input
                    className="sign-in__input"
                    type={name}
                    placeholder={label}
                    name={name}
                    id={name}
                    value={formState[name].value}
                    onChange={handleChange}
                    onBlur={handleFocusOut}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor={name}>{label}</label>
                </div>
              );
            },
            )}
          </div>
          <SignInButton isDisabled={signInButtonDisabledState}/>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export {AuthScreen};
export default connector(AuthScreen);
