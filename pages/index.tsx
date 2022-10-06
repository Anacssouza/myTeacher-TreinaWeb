import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Cabecalho from '../src/components/cabecalho/cabecalho'
import { CabecalhoContainer } from '../src/components/cabecalho/cabecalho.style';
import List from '../src/components/List/List';
import { Professor } from '../src/@types/professor';

const Home: NextPage = () => {

  const professores: Professor[] = [
    {
      id: 1,
      name: "Professor 1",
      foto: "https://github.com/Anacssouza.png",
      descricao: 'Uma descrição legal aqui',
      valor_hora: 100

    },
    {
      id: 2,
      name: "Professor 2",
      foto: "https://github.com/Anacssouza.png",
      descricao: 'Uma descrição legal aqui',
      valor_hora: 100

    },
    {
      id: 3,
      name: "Professor 3",
      foto: "https://github.com/Anacssouza.png",
      descricao: 'Uma descrição legal aqui',
      valor_hora: 100

    },
    {
      id: 4,
      name: "Professor 4",
      foto: "https://github.com/Anacssouza.png",
      descricao: 'Uma descrição legal aqui',
      valor_hora: 100

    },
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <List professores={professores}>

      </List>
    </Box>

  )
}

export default Home;
