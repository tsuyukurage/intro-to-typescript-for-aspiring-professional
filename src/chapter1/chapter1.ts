// 型エラーの例
function repeatHello(count: number): string {
  return "hello".repeat(count);
}

// ↓ここで型エラーが発生
// console.log(repeatHello("wow"));

// 型エラーが消える
console.log(repeatHello(10));


// TypeScriptでは下の関数オーバーローディングはエラーになる
function doble(value: number) {
  console.log(value * 2);
}
function doble(value: string) {
  console.log(value.repeat(2));
}


// TypeScriptで上を実装すると
function double(value: number | string) {
  if (typeof value === "number") {
    console.log(value * 2);
  } else {
    console.log(value.repeat(2));
  }
}

double(123);
double("hello");