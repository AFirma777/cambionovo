//Styles
import '../styles/index.scss'
import '../styles/Header.scss'

//Assets
import whats from '../assets/icons/whatsapp.svg';
import instagram from '../assets/icons/instagram.svg';
import logo from '../assets/logo.png';
import fachada from '../assets/fachada.jpg';

const Header = () => {
    return (
        <div className='container_header'>
            <section className='section-sub-menu'>
                <div className='desconto space-between'>
                    <p>GANHE ATÉ 70% DE DESCONTO NA SUA PRIMEIRA COMPRA</p>
                    <div className='flex gap-md'>
                        <a href="https://wa.me/5511946624728" target="_blank"><img src={whats} alt="icone whatsapp" /></a>
                        <a href="#"><img src={instagram} alt="icone instagram" /></a>
                    </div>
                </div>
            </section>
            <section className='section-menu'>
                <div className='container-menu space-between'>
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <nav>
                        <ul className='flex-center gap-xxl'>
                            <li>Home</li>
                            <li>Produtos</li>
                            <li>Contato</li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section className='section-fachada' style={{ backgroundImage: `url(${fachada})` }}>
                <div className='text-fachada container flex-center'>
                    <h1>Os melhores cambios novos e seminovos</h1>
                    <p>Compre agora mesmo</p>
                </div>
            </section>
        </div>
    )
}

export default Header