# 원시 타입

## 1. 다음 변수들의 타입을 지정해주세요

```ts
let userName; // 예: 이름
let userAge; // 예: 나이
let isAdmin; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;
```

## 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요.

```ts
// 변수 선언과 초기값 지정
let productName; // 상품 이름
let productPrice; // 상품 가격
let isAvailable; // 상품 재고 여부

// 예시 출력
console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);
```

## 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 반환값에 타입을 지정하세요.

```ts
console.log(addNumbers(5, 3));
```

## 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다"를 반환합니다

```ts
function stringifyValue(value) {
  // 여기에 구현
}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"
```

## 5. 아래 함수는 두 값을 비교하여 결과를 반환합니다. 느슨한 동등성(==)과 엄격 동등성(===)의 차이를 이해하고, 함수의 동작 결과를 예측하세요.

```ts
function compareValues(a: unknown, b: unknown): string {
  if (a === b) {
    return "엄격한 동등성";
  } else if (a == b) {
    return "느슨한 동등성";
  } else {
    return "동등하지 않음";
  }
}

// 함수 호출 예시
console.log(compareValues(5, "5")); // ?
console.log(compareValues(null, undefined)); // ?
console.log(compareValues(false, 0)); // ?
console.log(compareValues(NaN, NaN)); // ?
console.log(compareValues(42, 42)); // ?
```

## 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.

```ts
function isPrimitive(value: unknown): boolean {
  // 여기에 구현
}

// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
```
