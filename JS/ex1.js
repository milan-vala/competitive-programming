let addItem = (arr, item) => {
	return arr.push(item);
};

let result = addItem([7,4,5,6],15);
console.log("result ->", result);


const array = [15,15,10].map(parseInt);
console.log("array ->", array);

const sumNumbers = (array) => {
	return array.reduce((acc, num) => acc+num);
}

const r1 = sumNumbers([1,2,3]);
console.log("r1=>",r1);
