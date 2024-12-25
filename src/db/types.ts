export interface IOrder {
  email: string,
  fullName: string,
  fullAddress: string,
  imageUrls: string[],
  frameColor: string,
  userName: string
};

export interface IUser extends IOrder {
  id: number
}