export interface ICart {
  userId: string;
  productId: string;
  products: [{}];
  quantity?: number;
  total: number;
}
