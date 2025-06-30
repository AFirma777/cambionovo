// Packages
import { Card, CardContent, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// Assets
import carro1 from '../assets/ofertas/toyota.jpg'
import carro2 from '../assets/ofertas/honda.webp'
import carro3 from '../assets/ofertas/corolla.webp'
import carro4 from '../assets/ofertas/jetta.webp'

// Styles
import '../styles/index.scss'
import '../styles/Ofertas.scss'

// Lista de produtos com nome detalhado e preços reais
const produtos = [
  {
    id: 1,
    nome: 'Toyota Corolla',
    descricao: 'Câmbio automático 2.0 Flex',
    preco: 'R$ 15.000',
    imagem: carro1,
  },
  {
    id: 2,
    nome: 'Honda Civic',
    descricao: 'Câmbio automático 1.8 Flex',
    preco: 'R$ 14.500',
    imagem: carro2,
  },
  {
    id: 3,
    nome: 'Volkswagen Jetta',
    descricao: 'Câmbio DSG 2.0 TSI',
    preco: 'R$ 18.000',
    imagem: carro3,
  },
  {
    id: 4,
    nome: 'Chevrolet Cruze',
    descricao: 'Câmbio automático 1.4 Turbo',
    preco: 'R$ 16.200',
    imagem: carro4,
  },
]

const Ofertas = () => {
  return (
    <div className="ofertas">
      <h2 className="ofertas__titulo">Ofertas Especiais</h2>
      <Swiper
        className="ofertas__swiper"
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {produtos.map((produto) => (
          <SwiperSlide key={produto.id} className="ofertas__slide">
            <Card className="ofertas__card">
              <img
                src={produto.imagem}
                alt={`${produto.nome} - ${produto.descricao}`}
                className="ofertas__img"
              />
              <CardContent className="ofertas__card-content">
                <Typography variant="h6" className="ofertas__nome">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="ofertas__descricao">
                  {produto.descricao}
                </Typography>
                <Typography variant="body1" className="ofertas__preco">
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
