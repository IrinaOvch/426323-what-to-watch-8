import { FormEvent, useState, ChangeEvent, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import cn from 'classnames/bind';
import SignInButton from '../../components/sign-in-button/sign-in-button';
import { loginAction } from '../../store/api-actions';

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

function AuthScreen(): JSX.Element {
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
  const dispatch = useDispatch();

  const [signInButtonDisabledState, setSignInButtonDisabledState] = useState(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch((loginAction({
      email: formState.email.value,
      password: formState.password.value,
    })));
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const rule = formState[name].regex;
    const isFieldValid = rule.test(value);

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        isError: isFieldValid ? !isFieldValid : formState[name].isError,
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
    <div className="sign-in user-page__content">
      <form
        action="#"
        className="sign-in__form"
        onSubmit={handleSubmit}
      >
        { Object.entries(formState).map(([field, fieldState]) =>
          fieldState.isError &&
          <div className="sign-in__message" key={field}>
            <p>{fieldState.errorText}</p>
          </div>)}
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
  );
}

export default AuthScreen;
