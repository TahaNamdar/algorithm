//1
function fib1(n) {
  let a = 0,
    b = 1,
    c;

  if (n >= 0) {
    console.log(a);
  }
  if (n >= 1) {
    console.log(b);
  }
  for (let i = 2; i <= n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

//2

function fib2(n) {
  let a = 0,
    b = 1;
  if (n >= 0) {
    console.log(a);
  }
  if (n >= 1) {
    console.log(b);
  }
  for (let i = 2; i <= n; i++) {
    console.log(a + b);
    b = a + b;
    a = b - a;
  }
}

fib2(5);
