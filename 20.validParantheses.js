const isValid = (str) => {
	//str = "()[]{}"
	console.log(str);
	let match = 0;
	for (let i = 0; i < str.length; i++) {
		console.log("Outer loop i: ", i, "current char : ", str[i]);
		for (let j = i + 1; j < str.length; j++) {
			console.log("   inner loop j: ", j);
			if (str.charCodeAt(i) === 40) {
				if (str.charCodeAt(j) === 41) {
					match++;
					console.log("   found a match", str[i], str[j]);
					break;
				} else if (str.charCodeAt(j) !== 41) {
					continue;
				}
			} else if (str.charCodeAt(i) === 41) {
				if (str.charCodeAt(j) === 40) {
					match++;
					console.log("found a match", str[i], str[j]);
					break;
				} else if (str.charCodeAt(i) !== 40) {
					continue;
				}
			} else if (str.charCodeAt(i) === 91) {
				if (str.charCodeAt(j) === 93) {
					match++;
					console.log("found a match", str[i], str[j]);
					break;
				} else if (str.charCodeAt(i) !== 93) {
					continue;
				}
			} else if (str.charCodeAt(i) === 93) {
				if (str.charCodeAt(j) === 91) {
					match++;
					console.log("found a match", str[i], str[j]);
					break;
				} else if (str.charCodeAt(i) !== 91) {
					continue;
				}
			} else if (str.charCodeAt(i) === 123) {
				if (str.charCodeAt(j) === 125) {
					match++;
					console.log("found a match", str[i], str[j]);
					break;
				} else if (str.charCodeAt(i) !== 125) {
					continue;
				}
			} else if (str.charCodeAt(i) === 125) {
				if (str.charCodeAt(j) === 123) {
					match++;
					console.log("found a match", str[i], str[j]);
					break;
				} else if (str.charCodeAt(j) !== 123) {
					continue;
				}
			}
		}
	}
	if (match == str.length / 2) {
		return true;
	} else {
		return false;
	}
};

console.log(isValid("{])][}(["));

// ({[()]})
// ([]{})
// [](){[()]}{}

/*
( - 40
) - 41
[ - 91
] - 93
{ - 123
} - 125
*/

// console.log(str.charCodeAt(0))
// console.log(str.charCodeAt(1))

//& Understanding the problem

// ()[]{} - this returns true
// (] - this returns false
// {]() this returns false

//& Breaking the problem down
/*
loop over the string, check if a charater is a match
a character is a match if it is equal to (, [, {
if the character is a match, then we check for the next chracter to see if that character has the closing bracket of the same type
if they have a corresponding closing bracket, then we continue the loop
if the loop is completed, then we return true
if at any point, one of the characters is not a bracket, we return false
*/

//& Solution
