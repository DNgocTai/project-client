export interface IUser {
  _id?: string;
  username?: string;
  password?: string;
  fullName?: string;
  avatarUrl?: string;
  phoneNumber?: string;
  addresses?: [
    {
      address_details: string;
      name: string;
      phoneNumber: string;
      userId: string;
    }
  ];
  favourites?: object[];
  payments?: object[];
  carts?: [
    {
      _id: string;
      userId: string;
      productId: string;
      quantity: number;
    }
  ];
  cash?: number;
  createdAt?: string;
  updatedAt?: string;
  role?: string;
}
