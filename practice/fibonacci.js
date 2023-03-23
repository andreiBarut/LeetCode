// Print the Fibonacci Sequence using recursion.
//Given a number n, print the first nth element of the Fibonacci sequence. If n = 5, print the fifth Fibonacci number.

const fibo = (n) => {
	let arr = [];
	if (n == 0) {
		arr.push(0);
	} else if (n == 1) {
		arr.push(0, 1);
	} else {
		arr.push(0, 1);
		console.log(arr);
		for (let i = 2; i <= n; i++) {
			//i = 5
			//arr[4] + arr[3] = 3 + 2 = 5
			arr.push(arr[i - 2] + arr[i - 1]);
			// console.log(arr);
		}
	}
	return `sirul fibonacci este : ${arr}`;
	// al ${n}-lea element este ${arr[arr.length - 1]}`;
};

const fib = (n) => {
	if (n == 0) {
		return 0;
	} else if (n <= 2) {
		return 1;
	} else {
		return fib(n - 1) + fib(n - 2);
		// n = 5 - what does it mean?
		// fib(4) + fib(3)
		//fib(3) + fib(2) + fib(2) + fib(1) -> fib(3) + fib(2) + fib(2) + 1
		//fib(2) + fib(1) + fib(0) + fib(1) + fib(0) + fib(1) + 1 -> fib(2) + 1 + 0 + 1 + - + 1 + 1 - fib(2) +4
		//fib(0) + fib(1) + 4 -> 0 + 1 + 4 -> 5
	}
};
