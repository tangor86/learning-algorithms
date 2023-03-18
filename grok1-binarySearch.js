//18.03.23
function binarySearch(arr, x) {
	let r = null
	let i = 0
	let mInd = 1
	let hInd = arr.length
	let n = hInd
	hInd

	let cur = Math.floor(n/2)
	cur
	
	while (cur > 0) {
		const curVal = arr[cur]
		curVal

		if ( curVal == x) {
			return cur-1
		} else if (curVal > x) {  // <--
			hInd = cur
		} else if (curVal < x) {  // -->
			mInd = cur
		}

		const d = hInd - mInd
		d
		cur = Math.floor(cur/2)
		cur
	}

	return r
}

let arr = [111, -23, 10, 0, 12, 5, -4, 999, -100, 55, 77]
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr.sort(function(a, b){return a-b})
arr

let r = binarySearch(arr, 10)
r

// for (let i2 = 0; i2 < arr.length; i2++) q{
// 	const e = arr[i2];
// 	let r = binarySearch(arr, e)
// 	e
// 	r
// }

a = Math.floor(1/2)
a
