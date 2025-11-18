import './Header.css';

function Header() {
  const head = {
    header0: "Colorlib",
    header1: "+ TRAVELO",
    links: [
      { header: "Home" },
      { header: "About us" },
      { header: "Contact" },
      { header: "❌" }
    ]
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1>{head.header0}</h1>
        <div className="header-title-box">
          <h1>{head.header1}</h1>
        </div>
      </div>

      <nav>
        <div className="nav-buttons">
          {head.links.map((item, index) => (
            <button key={index}>{item.header}</button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
