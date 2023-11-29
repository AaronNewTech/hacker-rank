function findMedian(arr) {
    
    arr.sort((a, b) => a - b)
    
    let median = 0
    let temp = 0
    // handles odd numbers
    if (arr.length % 2 !== 0) {

        median = arr[Math.floor(arr.length / 2)]
        // console.log(median)
        return median
    }
    // extra credit handles even numbers
    else {
        median = arr[arr.length / 2]
        temp = arr[arr.length / 2 - 1]
        console.log(median)
        console.log(temp)
        median = (median + temp) / 2
        // console.log(median)
        return median
    }
}

findMedian([1, 12, 3, 4, 5, 6, 7])
findMedian([1, 12, 3, 4, 5])
findMedian([1, 12, 3, 4, 5, 6])
findMedian([1, 12, 3, 4, 7, 15])