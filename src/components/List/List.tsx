import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { Photo, ItemLista, ListStyled, Name, Informacoes, Valor, Descricao, ListaVazia } from "./List.style";

interface ListProps {
  professores: Professor[],
}

const List = (props: ListProps) => {

  return (
    <div>
      {props.professores.length > 0 ? (

        <ListStyled>
        {props.professores.map(professor => (
        <ItemLista key={professor.id} >
          <Photo src={professor.foto}></Photo>
          <Informacoes>
            <Name> {professor.name} </Name>
            <Valor> {professor.valor_hora.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} </Valor>
            <Descricao> {professor.descricao} </Descricao>
            <Button sx={{ width: '70%' }}> Marcar Aula</Button>
          </Informacoes>
        </ItemLista>
        ))}
      </ListStyled>

      ) : (
        
        <ListaVazia> Não Existem Itens </ListaVazia> 
      )}
    </div>
  )

}


export default List