// 1번 문제
interface userinterface {
  id: number;
  name: string;
  email?: string;
}

type usertype = {
  id: number;
  name: string;
  email?: string;
}
const one_user: userinterface = {
  id: 1,
  name: "Alice",
};
const userWithEmail: usertype = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

// 2번 문제
type user = {
  id: number;
  name: string;
  address: {
    city: string;
    zipCode: number;
  }
}

const two_user: user = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};

// 3번 문제
interface user_three {
  id: number;
  name: string;
  email?: string;
}

interface Admin extends user_three {
  role: string;
}

const normalUser: user_three = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser: Admin = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};

// 4번 문제
type Product = {
  id: number;
  name: string;
  price: number;
};

type DiscountedProduct = Product & {
  discount: number; // 추가 속성
};

const normalProduct: Product = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct: DiscountedProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};

// 5번 문제
interface Product {
  id: number;
  name: string;
  price: number;
}

interface Order {
  orderId: number;
  products: Product[];
  totalPrice: number;
}

const order: Order = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};

// 6번 문제
interface BaseUser {
  id: number;
  name: string;
}

type AdminUser = BaseUser & {
  role: string;
};

type GuestUser = BaseUser & {
  visitCount: number;
};

const admin: AdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: GuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};