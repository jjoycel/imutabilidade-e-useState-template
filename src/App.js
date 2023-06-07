import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {
  const [nome, setNome] = useState("Joyce");
  const [automovel, setAutomovel] = useState({
    modelo: "Fusca",
    cor: "branco",
    ano: 2020,
    flex: true,
    adicionadoPor: "Joyce"
  })

  const [car, setCar] = useState({ modelo: "C3",
    cor: "preto",
    ano: 2012,
    flex: true,
    adicionadoPor: "Joyce"
  })

  const [gol, setGol] = useState({
    modelo: "Gol",
    cor: "verde",
    ano: 2015,
    flex: true,
    adicionadoPor: "Joyce"
  })
  
  const [celta, setCelta] = useState({
    modelo: "Celta",
    cor: "vermelho",
    ano: 2022,
    flex: true,
    adicionadoPor: "Joyce"
  })

  
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem 
      nome={nome} 
      setNome={setNome} 
      carro={automovel} 
      setAutomovel={setAutomovel} 
      carro1 = {car}
      carro2 = {gol}
      carro3 = {celta}
      />
    </div>
  )
}
