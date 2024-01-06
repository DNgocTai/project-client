export interface IUser {
  username: string;
  password: string;
  fullName: string;
  avatarUrl?: string;
  addresses?: object[];
  favourites?: object[];
  payments?: object[];
  carts?: object[];
  cash?: number;
  createdAt?: string;
  updatedAt?: string;
  role?: string;
}
