import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

interface PaymentCard {
  name: string;
  number: string;
  code: number;
  expires: {
    month: number;
    year: number;
  };
}

interface delivery {
  receiver: string;
  address: {
    Endereco: string
    city: string;
    zipCode: string;
    numberADD: number;
    complement: string; 
  }
}

interface Product {
  id: number;
  price: number;
}

interface PurchasePayload {
  products: Product[];
  delivery: delivery;
  payment: {
    card: PaymentCard;
  };
}


const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getGame: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    }),
    purchase2: builder.mutation<any, delivery>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const{useGetFeaturedGameQuery,useGetGameQuery,usePurchaseMutation,usePurchase2Mutation} =api
export default api
