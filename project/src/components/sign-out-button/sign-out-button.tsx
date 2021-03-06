import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { logoutAction } from '../../store/api-actions';

function SignOutButton(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <Link
      to="/"
      className="user-block__link"
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
    >
      Sign out
    </Link>);
}

export default SignOutButton;
