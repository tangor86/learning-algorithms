//18.03.23
let arr = [111, -23, 10, 0, 12, 5, -4, 999, -100, 55, 77]
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.sort(function(a, b){return a-b})
arr

let x = 9

function binarySearch(arr, x) {
	let r = null
	let i = 0
	let low = 0
	let high = arr.length - 1

	arr
	x

	while (low <= high) {
		const mid = Math.floor((high + low) / 2)
		const guess = arr[mid]
		mid
		guess
		low
		high

		i++

		if (guess == x) {
			i
			return mid
		} else if (guess > x) {  // 1 .. x ... guess ...... 100
			high = mid - 1
			high
		} else if (guess < x) {  // 1 ..... guess ... x ... 100
			low = mid + 1
			low
		}
	}

	i
	low
	high
	return r
}



let r = binarySearch(arr, x)
r

// for (let i2 = 0; i2 < arr.length; i2++) q{
// 	const e = arr[i2];
// 	let r = binarySearch(arr, e)
// 	e
// 	r
// }

a = Math.floor(1/2)
a
