import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import AuthScreen from '../../components/sign-in/sign-in';

function SignInScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>
      <AuthScreen />
      <Footer />
    </div>
  );
}

export default SignInScreen;
