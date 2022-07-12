
import logo from '../../assets/logo.svg';
import './style.css';

export function Header() {
  return(
    <header>

    <div className="container-logo">
      <img src={logo} alt="" />
      <h1> DS Meta</h1>
      <p>Desenvolvido por <a href="#">@devsuperior.ig</a></p>
    </div>
    
  </header>
  )
}