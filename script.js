const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = [];
	let current =[];
	let sum =0;
	for(let curr of arr){
		if(sum+curr<=n){
			current.push(curr);
			sum+=curr;
		}else{
			result.push(current);
			current = [curr];
			sum = curr;
		}
	}
	if (current.length > 0) {
        result.push(current);
    }
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
