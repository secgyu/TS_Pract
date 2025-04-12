// 1번 문제
let user: { name: string, age?: number, isAdmin: boolean } = { name: 'Alice', isAdmin: true }
user = { name: "Bob", age: 40, isAdmin: false }

// 2번 문제

const numbers: readonly number[] = [1, 2, 3]
numbers.push(4)
numbers[0] = 42

// 3번 문제
const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

// 1. 상품 이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성하세요.
function getProductNamesAndPrices(products: [string, number, boolean][]) {
  return products.map((name, price) => [name, price])
}

// 2. 재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성하세요.
function getAvailableProducts(products: [string, number, boolean][]) {
  return products.filter(([name, price, inStock]) => inStock)
}

// 테스트 코드
console.log(getProductNamesAndPrices(products));
console.log(getAvailableProducts(products));

// 4번 문제

function updateUser(user: { name: string; age?: number }) {
  return { ...user, age: user.age ?? 18 }
}

console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }

// 5번 문제
const productsByCategory = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

function getProductsByCategory(category: string): string[] {
  return productsByCategory.reduce((result: string[], product) => {
    if (product.category === category) {
      result.push(product.name);
    }
    return result;
  }, []);
}

console.log(getProductsByCategory("Electronics"));
console.log(getProductsByCategory("Fashion"));
console.log(getProductsByCategory("Books"));