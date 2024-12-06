import { Link } from 'react-router-dom';
import { Card, Descricao, Titulo, Modal, ModalContent, AddToCartButton } from './styles';
import { useState } from 'react';
import fechar from '../../assets/fechar.png';
import { useDispatch } from 'react-redux';
import { add,open } from '../store/reducers/cart';

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
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(add({ porcao, foto, preco, id, nome, descricao }));
    dispatch(open())
    closeModal()
  };

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
      <div >
        <Titulo>{nome}</Titulo>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <button
          type="button"
          style={{ width: '100%' , background:'#FFEBD9', border:'none', padding:'8px'}}
          onClick={openModal}
        >
          Adicionar ao carrinho
        </button>
      </div>
      {modalItem && (
        <Modal>
          <ModalContent>
            <img style={{width:'280px', height:'280px'}} src={modalItem.foto} alt={modalItem.nome} />
            <div>
              <img
                className="fechar"
                src={fechar}
                alt="Fechar"
                onClick={closeModal}
              />
              <h4>{modalItem.nome}</h4>
              <p>{modalItem.descricao}</p>
              <p>Serve: {modalItem.porcao}</p>
              <AddToCartButton onClick={addCart}>
                Adicionar ao carrinho - R${modalItem.preco}
              </AddToCartButton>
            </div>
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </Card>
  );
};

export default Product;
