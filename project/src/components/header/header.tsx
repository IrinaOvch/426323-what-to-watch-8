import React from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import cn from 'classnames/bind';

type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
  isUserBlock?: boolean;
}

function Header({className, isUserBlock, children}: HeaderProps) : JSX.Element {
  return (
    <header className={cn('page-header', className) }>
      <Logo light={false}/>
      {children}
      {isUserBlock && <UserBlock />}
    </header>
  );

}

export default Header;
