import './style.css'


export const Footer = () => {
  return(
    <footer data-testid="footer">
      <div className="containerItems">
        <p>Produced by Marcelo Soares</p>
        <div className="containerLinks">
          <a href="https://github.com/Marcelo-Soares-codes">
            <img src="github.svg" alt="@Marcelo-Soares-codes" className='link'/>
          </a>
        </div>
      </div>
    </footer>
  )
}