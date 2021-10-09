import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

type HeaderProps = {
  heading?: string;
  isUserPage?: boolean;
  isUserBlock?: boolean
  isFilmCard?: boolean;
}

function Header({heading, isUserPage, isUserBlock, isFilmCard }: HeaderProps) : JSX.Element {
  return (
    <header className={`page-header ${isUserPage ? ' user-page__head' : ''} ${isFilmCard ? ' film-card__head' : ''}`}>
      <Logo light={false}/>
      {heading ? <h1 className={isUserPage ? 'page-title user-page__title' : 'visually-hidden'}>{heading}</h1> : ''}
      {isUserBlock ? <UserBlock /> : ''}
    </header>
  );

}

export default Header;
