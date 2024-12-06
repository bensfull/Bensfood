import { Link } from 'react-router-dom';
import { Tag } from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  destacado: boolean;
}

const Product: React.FC<Props> = ({
  id,
  titulo,
  tipo,
  descricao,
  avaliacao,
  capa,
  destacado
}) => {

  const getDescricao = (descricao: string) => {
    return descricao.length > 200 ? descricao.slice(0, 200) + '...' : descricao;
  }

  return (
    <Card key={id}>
      <img src={capa} alt={titulo || 'Product Image'} />
      
      <Infos>
        <Tag>{tipo}</Tag>
        {destacado && <Tag>Destaque do dia</Tag>}
      </Infos>
      <div>
        <div className='diferen'>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Titulo>{titulo}</Titulo>
          <span style={{color: 'black', fontSize:'18px'}}> ⭐ {avaliacao.toFixed(1)}</span>
          </div>
          
          <Descricao>{getDescricao(descricao)}</Descricao> 
          <Link className='button' to={`/profile/${id}`}>Saiba mais</Link>
        </div>
      </div>
      
    </Card>
  )
}

export default Product
