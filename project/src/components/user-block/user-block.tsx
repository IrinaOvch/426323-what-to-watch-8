import { Link } from 'react-router-dom';
import SignOutButton from '../sign-out-button/sign-out-button';

function UserBlock(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to="/mylist">
          <div  className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <SignOutButton />
      </li>
    </ul>
  );
}

export default UserBlock;
