import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import classnames from 'classnames/bind';

type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
  isUserBlock?: boolean;
}

function Header({className, isUserBlock, children}: HeaderProps) : JSX.Element {
  return (
    <header className={classnames('page-header', className) }>
      <Logo light={false}/>
      {children}
      {isUserBlock && <UserBlock />}
    </header>
  );

}

export default Header;
