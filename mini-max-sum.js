// this code passed all test cases
function miniMaxSum(arr) {
    // sorts array in ascending order
    arr = arr.sort()

    // sets starting values for interating the arrays
    let initialValue = 0

    // min array with highest value removed then summed
    let min = arr.slice(0, 4).reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue)
    
        // max array with lowest value removed then summed
    let max = arr.slice(1, 5).reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue)

    console.log(min, max)
    
}

miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([7, 69, 2, 221, 8974])