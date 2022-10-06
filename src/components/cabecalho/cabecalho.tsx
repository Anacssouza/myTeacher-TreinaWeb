import { CabecalhoContainer, Logo } from "./cabecalho.style";

const Cabecalho = () => {
  return <div>
    <CabecalhoContainer>
      <div>
        
        <Logo src="/images/myteacher.png"/>
      </div>
      <p> Encontre o Professor perfeito </p>
    </CabecalhoContainer>
  </div>
}

export default Cabecalho;