import "./style.css"

export const Header = () => (
    <header>
      <div className="header">
        <h1>TeslaNews</h1>
      </div>
      <div className="navBar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">News</a></li>
          <li><a href="https://www.tesla.com/" target='_blank' rel="noreferrer">Tesla</a></li>
        </ul>
      </div>
    </header>
)