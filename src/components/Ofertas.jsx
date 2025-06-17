// Packages
import { Card, CardContent, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// Assets
import carro1 from '../assets/ofertas/cambio-1.jpg'
import carro2 from '../assets/ofertas/cambio-1.jpg'
import carro3 from '../assets/ofertas/cambio-1.jpg'

// Styles
import '../styles/index.scss'
import '../styles/Ofertas.scss'

const produtos = [
  { id: 1, nome: 'Carro A', preco: 'R$ 50.000', imagem: carro1 },
  { id: 2, nome: 'Carro B', preco: 'R$ 60.000', imagem: carro2 },
  { id: 3, nome: 'Carro C', preco: 'R$ 70.000', imagem: carro3 },
  { id: 4, nome: 'Carro D', preco: 'R$ 75.000', imagem: carro3 },
]

const Ofertas = () => {
  return (
    <div className="ofertas-container">
      <h2 className="ofertas-titulo">Ofertas Especiais</h2>
      <Swiper
        className="ofertas-swiper"
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {produtos.map((produto) => (
          <SwiperSlide key={produto.id} className="ofertas-slide">
            <Card className="oferta-card">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="oferta-img"
              />
              <CardContent className="oferta-card-content">
                <Typography variant="h6" className="oferta-nome">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="oferta-preco">
                  {produto.preco}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Ofertas
