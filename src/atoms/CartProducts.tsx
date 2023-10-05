import { atom } from 'recoil';

type props = {
  id: any
  name: string
  img: string
  description: string
  price: number
  reward: boolean
}

export const cardProductsState = atom<props[]>({
  key: 'cardProductsState',
  default: [],
});