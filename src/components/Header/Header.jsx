import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <img src={logo} alt="Logo" />
        </h1>
      </div>
    </header>
  );
}
export default Header;
