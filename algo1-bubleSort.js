//18.03.23
function sortArr(arr) {
	let tmp

	for (let i = 0; i < arr.length-1; i++) {
		for (let j = i+1; j < arr.length; j++) {
		
			if (arr[j] < arr[i]) {
				tmp = arr[i]
				arr[i] = arr[j]
				arr[j] = tmp
			}

			arr
		}
	}
}


let arr = [222, -23, 1, 10, 0, 123, -1, 0, -100]
arr

sortArr(arr)
arr

//console.log('arr = ' + arr)