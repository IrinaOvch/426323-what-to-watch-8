import { Link } from 'react-router-dom';

function SignOutButton(): JSX.Element {
  return <Link to="/" className="user-block__link">Sign out</Link>;
}

export default SignOutButton;
