/**
 *  * Given a number, return the sum of all numbers from 1 to that number.
 * @param {*} num   {number} The number to sum up to.
 * @returns   {number} The sum of all numbers from 1 to num.
 */

const addUp = (num) => {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    return total;
  }

  export default addUp;