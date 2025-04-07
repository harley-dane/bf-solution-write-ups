'use strict';

/**
 * @description
 * Given a month, return the quarter of the year it belongs to.
 *
 * @example
 * quarterOfTheYear(1) // 1
 * quarterOfTheYear(4) // 2
 * quarterOfTheYear(7) // 3
 * quarterOfTheYear(10) // 4
 *
/**
 * Check a month belong to which quarter of the year.
 *
 * @param {number} month - The month to check to which quarter it belongs to.
 * @returns {number} Quarter of the year.
 */

export const quarterOfTheYear = (month) => {
    return Math.ceil(month / 3);
};
