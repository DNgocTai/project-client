export interface ICart {
  userId: string;
  products: [
    {
      name?: string;
      avatarUrl?: string;
      description?: string;
      price?: string;
      star?: string;
      status?: boolean;
      quantity?: number;
      totalAmount?: number;
    }
  ];
}
