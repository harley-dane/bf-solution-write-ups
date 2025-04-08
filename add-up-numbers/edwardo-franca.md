[edwardo-franca](https://edabit.com/user/eKHRmZxaa6gbzQTd3)

```js
function addUp(num) {
	return (!num) ? 0 : num + addUp(num-1)
}
```
## strategy

- Recursive Function Call:

   The function repeatedly calls itself with a decremented value of num until it reaches the base case.--
- Base Case:

   The base case is when num is 0. At this point, the recursion stops, and the function returns 0.
- Recursive Case:

    If num is not 0, the function returns the current value of num added to the result of calling addUp(num - 1).

    This creates a chain of additions that effectively adds up all numbers from 1 to num   

## Implementation

    The `addUp` function is a **recursive solution** designed to calculate the sum of all natural numbers up to a given number `num`. This approach uses the fundamental concept of recursion to break the problem into smaller subproblems until it reaches a base case, ensuring elegance and simplicity in its implementation.

## possible refractors

    Problem: The function does not handle invalid inputs, such as negative numbers, non-integer values, or null/undefined inputs. Refactor: Add validation to ensure the input is a positive integer.

## Refrences 

    Recursion in Programming

[MDN Web Docs - Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion) A detailed explanation of recursion and its use cases in JavaScript.

[GeeksforGeeks](https://www.geeksforgeeks.org/introduction-to-recursion/) - Recursion Basics: Overview and examples of recursion.