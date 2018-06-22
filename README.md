# algorithm-practice

For practicing algorithms and TDD.

- [Jasmine](https://jasmine.github.io/2.4/introduction.html) version 2.5.2.

Run the respective runner files in the browser to get test results and also see return of *console logs*.

```bash
open SpecRunner.html
```

## Benchmark

Added benchmarking to see speed of algorithms, like [string reversal](src/js/reverseString.js):

```bash
node reverseString.js
builtin reverse() x 668,487 ops/sec ±0.91% (82 runs sampled)
iterative string reversal x 2,056,665 ops/sec ±1.17% (88 runs sampled)
recursive string reversal x 738,545 ops/sec ±0.80% (92 runs sampled)
swapped reversal x 844,375 ops/sec ±0.95% (87 runs sampled)
Fastest is iterative string reversal
Slowest is builtin reverse()
```

https://github.com/bestiejs/benchmark.js/

## Algorithms

* [Anagram](src/js/anagram.js)
* [Array Rotation](src/js/arrayRotation.js)
* [Average](src/js/average.js)
* [Balanced Brackets](src/js/balancedBrackets.js)
* [Binary Search of Ordered Array](src/js/binarySearch.js)
* [Bottles of Beer](src/js/bottlesOfBeer.js)
* [Factorial](src/js/factorial.js)
* [Fibonacci](src/js/fibonacci.js)
* [FizzBuzz](src/js/fizzbuzz.js)
* [Meeting Times Merge](src/js/meetingTimes.js)
* [Merge 2 sorted Linked Lists](src/js/sortedListMerge.js)
* [Palindrome](src/js/palindrome.js)
* [Product of All Integers Except for Index](src/js/productOfInts.js)
* [Product of Highest 3 Integers](src/js/product3Ints.js)
* [Reverse LinkedList](src/js/reverseList.js)
* [Reverse String, 4 ways](src/js/reverseString.js)
* [Stock Market](src/js/stockMarket.js)
* [Temperature Tracker](src/js/tempTracker.js)

## Data Structures
Implementing data structures from scratch:

* [LinkedList](src/js/LinkedList.js)

## Support

Please open [an issue](https://github.com/ThuyNT13/algorithm-practice/issues) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and open a [pull request](https://github.com/ThuyNT13/algorithm-practice/pulls).
