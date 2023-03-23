let arr1 = [9, 2, 5, 3, -1];
let arr2 = [1, 12, -2, -1, 4, 12, -72];

const bubbleSort = (arr) => {
	for (let i in arr) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
};

let arr1Sorted = bubbleSort(arr1);
let arr2Sorted = bubbleSort(arr2);

console.log(arr1Sorted);
console.log(arr2Sorted);

const sortArrays = (arr1, arr2) => {
	let left = 0;
	let right = 0;
	let newArr = [];
	while (left < arr1.length || right < arr2.length) {
		if (arr1[left] <= arr2[right]) {
			newArr.push(arr1[left]);
			left++;
		} else {
			newArr.push(arr2[right]);
			right++;
		}
	}
	return newArr;
};

console.log(sortArrays(arr1Sorted, arr2Sorted));
