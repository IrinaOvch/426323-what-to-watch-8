import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import SignOutButton from '../sign-out-button/sign-out-button';
import { AuthorizationStatus } from '../../const';
import { getAuthData, getAuthorizationStatus } from '../../store/user/selectors';
import { fetchMyListAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authData = useSelector(getAuthData);

  const dispatch = useDispatch();

  const handleAvatarClick = () => {
    dispatch(fetchMyListAction());
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to="/mylist" onClick={handleAvatarClick}>
            <div  className="user-block__avatar">
              <img src={authData.avatarUrl} alt="User avatar" width="63" height="63" />
            </div>
          </Link>
        </li>
        <li className="user-block__item">
          <SignOutButton />
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to="/login" className="user-block__link">Sign in</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
