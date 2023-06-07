import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({
  nome, 
  carro, 
  setNome, 
  setAutomovel,
  carro1,
  carro2,
  carro3
}) {
  function mudaNome(){
    if(nome === "Joyce"){
      setNome("Luiz")
    } else {
      setNome("Henrique")
    }
  }
  function mudaCarro(novoCarro){
    setAutomovel (novoCarro)
  }
  return (
    <GaragemContainer>
      <h1>Garagem de {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>
      <Botao onClick={()=>mudaCarro(carro1)}>Muda mudaCarro 1</Botao>
      <Botao onClick={()=>mudaCarro(carro2)}>Muda mudaCarro 2</Botao>
      <Botao onClick={()=>mudaCarro(carro3)}>Muda mudaCarro 3</Botao>

      <Estacionamento>
        <Carro
          modelo={carro.modelo}
          cor={carro.cor}
          ano={carro.ano}
          adicionadoPor={carro.adicionadoPor}
          flex={carro.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}

