import { Link } from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import { State } from '../../types/state';
import SignOutButton from '../sign-out-button/sign-out-button';
import { AuthorizationStatus } from '../../const';

const mapStateToProps = ({authorizationStatus, authData}: State) => ({
  authorizationStatus,
  authData,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function UserBlock({authorizationStatus, authData}: ConnectedComponentProps): JSX.Element {
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to="/mylist">
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

export {UserBlock};
export default connector(UserBlock);
