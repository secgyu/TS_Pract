# 객체, 배열, 튜플 타입

## 1. 아래 객체를 보고 user의 타입을 작성하세요

```ts
let user = {
  name: "Alice",
  isAdmin: true,
};

user={
  name: "Bob",
  age:40
  isAdmin: false,
}
```

## 2. 읽기 전용(readonly) 배열을 생성하고, 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야 합니다.

```ts
// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.

// 아래 코드는 오류가 발생해야 합니다.
// numbers.push(4);
// numbers[0] = 42;
```

## 3. 주어진 문제 1,2 번을 푸시오

1. 상품 이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성하세요.
2. 재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성하세요.

```ts
const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

// 1. 상품 이름과 가격만 반환,리턴타입 정의필요
function getProductNamesAndPrices(
  products: [string, number, boolean][]
) {
  // 여기에 구현
}

// 2. 재고가 있는 상품만 반환,리턴타입 정의필요
function getAvailableProducts(
  products: [string, number, boolean][]
)
  // 여기에 구현
}

// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]
```

## 4. 사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값으로 18을 사용하세요

```ts
//매개변수, 리턴 타입 정의 필요
function updateUser(user) {
  // 나이가 제공되지 않으면 18로 설정

  return user;
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }
```

## 5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요.

```ts
// proudcts 타입정의  필요
const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category) {
  // 여기에 구현
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
```
