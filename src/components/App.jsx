//Styles
import '../styles/index.scss'

//Components
import Header from './Header'
import Fotter from './Fotter'
import Ofertas from './Ofertas'
import ButtonWhats from './ButtonWhats'

const App = () => {
  return (
    <div>
      <Header />
      <Ofertas />
      <Fotter />
      <ButtonWhats />
    </div>
  )
}

export default App
