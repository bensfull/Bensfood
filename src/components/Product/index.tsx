import { Link } from 'react-router-dom';
import { Tag } from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'
import estrela from '../../assets/estrela.png'

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
          <div style={{color: '#E66767', fontSize:'18px', fontWeight:'bold',display:'flex', alignItems:'center'}}>{avaliacao.toFixed(1)} <img style={{width:'21px', height:'20px', marginLeft:'5px' }} src={estrela} alt="estrela" /></div>
          </div>
          
          <Descricao>{getDescricao(descricao)}</Descricao> 
          <Link className='button' to={`/profile/${id}`}>Saiba mais</Link>
        </div>
      </div>
      
    </Card>
  )
}

export default Product
