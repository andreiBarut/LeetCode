const arr = [105, -2, 15, 0, 17, 7];

const bubbleSort = (arr) => {
	let swap = false;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swap = true;
			}
		}
		if (!swap) {
			break;
		}
	}
	return arr;
};

console.log(bubbleSort(arr));

const selectionSort = (arr) => {
	//[105, -2, 15, 0, 17, 7]
	// min = arr[i/0],
	// inner loop: arr[1] -> this will find the new minimum
	// arr[j] < arr[i], -> min = j
	// if (min != arr[i/0]) {swap}

	for (let i = 0; i < arr.length; i++) {
		let j = i + 1;
		let min = i;
		for (j; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		if (min !== i) {
			//swap
			let temp = arr[min];
			arr[j] = arr[min];
			arr[min] = temp;
		}
	}

	return arr;
};

console.log(selectionSort(arr));

const insertionSort = (arr) => {
	// [1,2,3,4,8,7] - we're at the last index arr[5]
	// we remember current value in a variable current = arr[5]
	// we start a loop and go backwards from arr[5-1] to the begining of the array
	// the condition for the loop is that the iterator should be greater than -1 AND that arr[iterator] to be greater than the current value -> arr[4](8) > current(7)?
	//if the conditions are met, we replace arr[iterator + 1] with arr[iterator] and go to the next iteration of the inner loop
	//arr[3] (4) > current(7)? no, then replace arr[iterator+1] with current. That's it
	if (arr.length === 0) {
		return;
	}

	//init swap
	if (arr[0] > arr[1]) {
		let temp = arr[1];
		arr[1] = arr[0];
		arr[0] = temp;
	}

	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;
		for (j; j > -1 && arr[j] > current; j++) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = current;
	}

	return arr;
};

console.log(insertionSort(arr));
