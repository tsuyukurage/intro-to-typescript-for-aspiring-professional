// 型エラーの例
function repeatHello(count: number): string {
  return "hello".repeat(count);
}

// ↓ここで型エラーが発生
// console.log(repeatHello("wow"));

// 型エラーが消える
console.log(repeatHello(10));