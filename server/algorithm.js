const miniMaxSum = (arr) =>  {
  const sorted = arr.sort();

  let minSum = 0
  let maxSum = 0
  let evenArray = []
  let oddArray = []

  const sumArray = arr.reduce((prev, current) => prev + current, 0)

  minSum = sumArray - sorted[arr.length - 1]
  maxSum = sumArray - sorted[0]

  evenArray = arr.filter((ele) => ele % 2 === 0)
  oddArray = arr.filter((ele) => ele % 2 !== 0)

  return {
    input: arr,
    output: {
      minSum,
      maxSum,
      sumArray,
      minNumber: sorted[0],
      maxNumber: sorted[arr.length - 1],
      evenArray,
      oddArray,
    }
  } 
}

export default miniMaxSum