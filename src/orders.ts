interface Order {
  id: number;
  email: string;
  fullName: string;
  fullAddress: string;
  imageUrls: string[];
  frameColor: string;
  user: string;
}

let orders: Order[] = [];


export function addOrder(email: string, fullName: string, fullAddress: string, imageUrls: string[], frameColor: string, user: string): Order {
  const newOrder: Order = {
      id: orders.length + 1,
      email,
      fullName,
      fullAddress,
      imageUrls,
      frameColor,
      user,
  };
  orders.push(newOrder);
  return newOrder;
}

export function getUserOrders(user: string): Order[] {
  return orders.filter(order => order.user === user);
}