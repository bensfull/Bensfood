import { useEffect, useState } from 'react' 
import Button from '../../components/Button'
import Card from '../../components/Card'
import { ImputGroup , Row} from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../components/store'
import { useNavigate } from 'react-router-dom'
import { close } from '../../components/store/reducers/cart'
import { formataPreco } from '../../components/ProductList'

const Checkout = ({ setShowCheckout, totalPrice }: { setShowCheckout: React.Dispatch<React.SetStateAction<boolean>>, totalPrice: number }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [purchase, { isError, isLoading, data, isSuccess }] = usePurchaseMutation()
  useSelector((state: RootReducer) => state.cart)
  const [isPaymentSuccess, setPaymentSuccess] = useState(false)
  const navigate = useNavigate()
  const dispach = useDispatch()

  useEffect(() => {
    if (isSuccess) {
      setPaymentSuccess(true)
      setCurrentStep(3) 
    }
  }, [isSuccess])

  const form = useFormik({
    initialValues: {
      receiver: '',
      city: '',
      zipCode: '',
      complement: '',
      Endereco: '',
      numberADD: '',
      Cardname: '',
      cardNumber: '',
      cardOwner: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      Endereco: Yup.string().required('O campo é obrigatório'),
      Cardname: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      numberADD: Yup.string().required('O campo é obrigatório'),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            Endereco: values.Endereco,
            city: values.city,
            zipCode: values.zipCode,
            complement: values.complement,
            numberADD: 12,
          }
        },
        payment: {
          card: {
            name: values.Cardname,
            number: values.cardNumber,
            code: 123,
            expires: {
              month: 12,
              year: 1234,
            },
          }
        },
        products: [
          {
            id: 1,
            price: 10,
          },
        ],
      })
    }
  })

  const checkInputHasError = (fieldName: keyof typeof form.touched) => {
    const isTouched = form.touched[fieldName];  
    const hasError = form.errors[fieldName];   
    return isTouched && hasError;             
  };
  
  const handlePreviousStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1); 
    }
  };

  // Fecha o checkout e volta ao carrinho
  const handleBackToCart = () => {
    setShowCheckout(false)  
  }
  
  const handleConclude = () => {
    navigate('/')
    dispach(close())
  }



  const handleNextStep = async () => {
    const errors = await form.validateForm(); 
    
    if (currentStep === 1) {
      form.setTouched({
        receiver: true,
        city: true,
        zipCode: true,
        complement: true,
        Endereco: true,
        numberADD: true,
      });
      
      const firstFormErrors = {
        receiver: errors.receiver,
        city: errors.city,
        zipCode: errors.zipCode,
        complement: errors.complement,
        Endereco: errors.Endereco,
        numberADD: errors.numberADD,
      };
      
      if (Object.values(firstFormErrors).some(error => error)) {
        alert('Erro(s) de validação no primeiro formulário');
        console.log(firstFormErrors);
      } else {
        setCurrentStep(2); 
      }
    } else if (currentStep === 2) {
      form.setTouched({
        Cardname: true,
        cardNumber: true,
        expiresMonth: true,
        expiresYear: true,
        cardCode: true,
      });
  
      const secondFormErrors = {
        Cardname: errors.Cardname,
        cardNumber: errors.cardNumber,
        expiresMonth: errors.expiresMonth,
        expiresYear: errors.expiresYear,
        cardCode: errors.cardCode,
      };
  
      if (Object.values(secondFormErrors).some(error => error)) {
        alert('Erro(s) de validação no segundo formulário');
        console.log(secondFormErrors);
      } else {
        form.submitForm(); 
      }
    }
  };
  

  return (
    <div className="container">
      {currentStep === 1 && (
        <form onSubmit={form.handleSubmit}>
        <Card title="Dados de cobrança">
          <>
            <Row>
              <ImputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  id="receiver"
                  type="text"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </ImputGroup>
              <ImputGroup>
                <label htmlFor="Endereco">Enderço</label>
                <input
                  type="text"
                  id="Endereco"
                  name="Endereco"
                  value={form.values.Endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('Endereco') ? 'error' : ''}
                />
              </ImputGroup>
              <ImputGroup>
                <label htmlFor="city">
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </ImputGroup>
            </Row>
            <Row>
              <div style={{display:'flex', columnGap:'9px'}}>
                
                  <ImputGroup>
                    <label htmlFor="zipCode">Cep</label>
                    <input
                      id="zipCode"
                      type="number"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                    />
                  </ImputGroup>
                  <ImputGroup>
                      <label htmlFor="numberADD">Número </label>
                      <input
                        type="text"
                        id="numberADD"
                        name="numberADD"
                        value={form.values.numberADD}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('numberADD') ? 'error' : ''}
                      />
                    </ImputGroup>
              </div>
                  <ImputGroup>
                    <label htmlFor="complement">complemento(Opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      // className={checkInputHasError('complement') ? 'error' : ''}
                    />
                  </ImputGroup>
            </Row>
          </>
        </Card>
        <Button type="button" title="voltar" onClick={handleBackToCart}>Voltar para o carrinho</Button>
        <Button type="button" title='continuar com a compra' onClick={handleNextStep}>Continuar com o pagamento</Button>

      </form>
      )}

      {currentStep === 2 && (
        <form onSubmit={form.handleSubmit}>
        <Card title={`Pagamento: Valor a pagar R$ ${formataPreco(totalPrice)}`}>
        <>
          <div className="margin-top">
              <>
                <Row>
                  <ImputGroup>
                    <label htmlFor="Cardname">
                      Nome do titular do cartão
                    </label>
                    <input
                      type="text"
                      id="Cardname"
                      name="Cardname"
                      value={form.values.Cardname}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('Cardname') ? 'error' : ''}
                    />
                    {checkInputHasError('Cardname') && <span>{form.errors.Cardname}</span>}
                  </ImputGroup>
  
                </Row>
                <Row marginTop="24px">
                  <ImputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardNumber') ? 'error' : ''}
                    />
                  </ImputGroup>
                  <ImputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                    />
                  </ImputGroup>
                  <div style={{display:'flex', columnGap:'9px'}}>
                    <ImputGroup maxWidth="156px">
                      <label htmlFor="expiresMonth">Mês do vencimento</label>
                      <input
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('expiresMonth') ? 'error' : ''}
                      />
                    </ImputGroup>
                    <ImputGroup maxWidth="156px" >
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('expiresYear') ? 'error' : ''}
                      />
                    </ImputGroup>

                  </div>
                </Row>
              </>
  
          </div>
        </>
      </Card>
      <Button  type="button" title='clique para finalizar com o pagamento'  onClick={handleNextStep}>Finalizar pagamento</Button>
      <Button type="button" title="voltar" onClick={handlePreviousStep}>Voltar para a edição de endereço</Button>
      </form>
      )}

      {currentStep === 3 && isPaymentSuccess && (
         <Card title={`Pedido realizado: ${data.orderId}`}>
         <>
           <p className="margin-top">
              Estamos felizes em informar que seu pedido já está em processo 
              de preparação e, em breve, será entregue no endereço fornecido.
           </p>
           <p className="margin-top">
              Gostaríamos de ressaltar que nossos entregadores não 
              estão autorizados a realizar cobranças extras. 
           </p>
           <p className="margin-top">
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, 
              garantindo assim sua segurança e bem-estar durante a refeição.
           </p>
           <p className="margin-top">
            Esperamos que desfrute de uma deliciosa e agradável 
            experiência gastronômica. Bom apetite!
           </p>
         <Button type="button" title='clique para finalizar com o pagamento' onClick={handleConclude}>Concluir</Button>
         </>
       </Card>
      )}
    </div>
  )
}

export default Checkout
