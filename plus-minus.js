// this code passed all test cases
function plusMinus(arr) {
    // values to store frequency of positive, negative and zero values in the array
    let plus = 0
    let minus = 0
    let zero = 0

    // loop to interate over the array and count the frequency of positive, negative and zero values
    for (let i = 0; i < arr.length; i++) {
        // check if value is postive and increment counter
        if (arr[i] > 0) {
            plus++
        }
        // check if value is negative and increment counter
        else if (arr[i] < 0) {
            minus++
        }
        // check if value is zero and increment counter
        else {
            zero++
        }
    }

    // divide the frequency of positive, negative and zero values by the length of the array to get the ratios of positive, negative and zero instances
    plus = plus / arr.length
    minus = minus / arr.length
    zero = zero / arr.length

    // sets the number of decimal places for positive, negative and zero occurrence ratios
    plus = Number.parseFloat(plus).toFixed(6)
    minus = Number.parseFloat(minus).toFixed(6)
    zero = Number.parseFloat(zero).toFixed(6)


    console.log(plus)
    console.log(minus)
    console.log(zero)

}

plusMinus([-4, 3, -9, 0, 4, 1])
plusMinus([1, 2, 3, -1, -2, -3, 0, 0])
