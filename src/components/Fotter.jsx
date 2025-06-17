// Styles
import '../styles/Fotter.scss'

const Fotter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>CarExchange</h3>
          <p>Seu parceiro de confiança em troca de carros.</p>
        </div>

        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Sobre</a></li>
          </ul>
        </div>

        <div className="footer-contato">
          <h4>Contato</h4>
          <p>Email: contato@carexchange.com</p>
          <p>WhatsApp: (11) 91234-5678</p>
          <p><address>R ANTONIO JOSE DA SILVA, 120 - PARTENON - PORTO ALEGRE, RS</address></p>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2025 CarExchange. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Fotter
