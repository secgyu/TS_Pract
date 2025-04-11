// 1번 문제

let userName: string;
let userAge: number;
let isAdmin: boolean;

userName = 'Alice';
userAge = 25;
isAdmin = true;

// 2번 문제
let productName: string;
let productPrice: number;
let isAvailable: boolean;

productName = '사과'
productPrice = 2000
isAvailable = true

console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);

// 3번 문제

function addNumbers(a: number, b: number): number {
  return a + b
}
console.log(addNumbers(5, 3));

// 4번 문제

function stringifyValue(value: string | null | undefined) {
  if (value === null || value === undefined) return '값이 없습니다.'
  return value
}

console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"

// 5번 문제

function compareValues(a: unknown, b: unknown): string {
  if (a === b) return '엄격한 동등성'
  else if (a == b) return '느슨한 동등성'
  else return '동등하지 않음'
}

console.log(compareValues(5, "5")); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 느슨한 동등성
console.log(compareValues(false, 0)); // 느슨한 동등성
console.log(compareValues(NaN, NaN)); // 동등하지 않음
console.log(compareValues(42, 42)); // 엄격한 동등성

// 6번 문제

function isPrimitive(value: unknown): boolean {
  return value === null || (value !== Object(value))
}

console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false