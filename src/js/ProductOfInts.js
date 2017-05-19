// BRUTE FORCE O(n2)
// function getProductsOfAllIntsExceptAtIndex(arr) {
//   var products = [];
//
//   for (var i=0; i<arr.length; i++) {
//   var product = 1;
//     for (var j=0; j<arr.length; j++) {
//       if (arr[i] != arr[j]) {
//         product *= arr[j];
//       }
//     }
//     products.push(product);
//   }
//   return products;
// }

function getProductsOfAllIntsExceptAtIndex(arr) {
  var productsOfAllIntExcept = [];

  if (arr.length<2) {
    throw new Error("There needs to be at least 2 numbers.");
  }

  // product of all ints after index
  var productSoFar = 1;
  for (var i=0; i<arr.length; i++) {
    productsOfAllIntExcept[i] = productSoFar;
    productSoFar *= arr[i];
  }

  // reset productSoFar here to clear out stored iteration from above
  // product of all ints before index combined with after-index
  productSoFar = 1;
  for (var j=arr.length-1; j>=0; j--) {
    // multiply/assign productSoFar to stored value in productsOfAllIntExcept
    productsOfAllIntExcept[j] *= productSoFar;
    productSoFar *= arr[j];
  }
  return productsOfAllIntExcept;
}
