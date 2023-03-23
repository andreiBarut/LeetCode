// CASE 1 where the input is a single string
//^ O(n) because we only have one loop at a time
const str = "an A";

const checkIfPalindrome = (str) => {
	let initString = "";
	for (let i in str) {
		initString += str[i].toLowerCase();
	}
	initString = initString.replaceAll(" ", "");
	console.log("init string : " + initString);
	let pointer = str.length - 1;
	let reversedString = "";
	while (pointer > -1) {
		reversedString += str[pointer].toLowerCase();
		pointer--;
	}
	reversedString = reversedString.replaceAll(" ", "");
	console.log("reversed string : " + reversedString);

	if (initString === reversedString) {
		return `The string is a palindrome`;
	} else {
		return `The string is NOT a palindrome `;
	}
};

//CASE 2 where the input is an array

//^ O(n^2) because we have nested loops. The first loop is the map method, which goes through each element of the array. However, we have another let us say more hidden loop which happens for each array element. We turn evereything to lowerCase, then we replace all white spaces, then we split, then we reverse, then we join. Each of these operations requires the program to loop over the string. Therefore, we have another O(n) there, adding up to O(n^2)

const arr = ["ana", "bbGun", "Jason Bourne"];

const palindromeCheck = (arr) => {
	let item = "";
	arr.map((element) => {
		item = element.toLowerCase().replaceAll(" ", "").split("").reverse().join("");
		//AN A -> ana -> ['a', 'n', 'a,'] -> reverese() -> "ana"
		if (item === element) {
			console.log(`${element} is a palindrome`);
		} else {
			console.log(`${element} is not a palindrome`);
		}
	});
};
