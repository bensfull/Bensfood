import { Link } from 'react-router-dom';
import { Card, Descricao, Titulo, Infos, AddToCartButton, Modal, ModalContent } from './styles';
import { useState } from 'react';
import fechar from '../../assets/fechar.png';

type Props = {
  porcao: string;
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
};

const Product: React.FC<Props> = ({
  porcao,
  foto,
  preco,
  descricao,
  id,
  nome,
}) => {
  const [modalItem, setModalItem] = useState<Props | null>(null);

  const openModal = () => {
    setModalItem({ porcao, foto, preco, id, nome, descricao });
  };

  const closeModal = () => {
    setModalItem(null);
  };

  const getDescricao = (descricao: string) => {
    return descricao.length > 200 ? descricao.slice(0, 200) + '...' : descricao;
  };

  return (
    <Card key={id}>
      <img src={foto} alt={nome || 'Product Image'} />
      <div style={{padding:'15px'}}>
        <Titulo>{nome}</Titulo>
        <Descricao>{getDescricao(descricao)}</Descricao> 
        <button type='button' style={{padding:'10px', width:'100%'}} onClick={openModal}>Adicionar ao carrinho</button>
      </div>
      {/* <Link className='button' to={`/profile/${id}`}>Saiba mais</Link> */}
      
      {modalItem && (
        <Modal>
          <ModalContent>
            <img src={modalItem.foto} alt={modalItem.nome} />
            <div>
              <img className="fechar" src={fechar} alt="Fechar" onClick={closeModal} />
              <h4>{modalItem.nome}</h4>
              <p>{modalItem.descricao}</p>
              <p>Serve: {modalItem.porcao}</p>
              <AddToCartButton>Adicionar ao carrinho - R${modalItem.preco}</AddToCartButton>
            </div>
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </Card>
  );
};

export default Product;
