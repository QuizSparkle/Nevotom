import { atom } from 'recoil';

type props = {
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