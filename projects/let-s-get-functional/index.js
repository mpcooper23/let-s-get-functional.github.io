// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/**
 * ### 1: `maleCount`
 - **Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter`
 * 
 */

const maleCount = function(array){
    return array.filter(customer => {
if(customer.gender === 'male'){
    return true 
}
    })
}

/** 
2: femaleCount
Objective: Find the number of female customers
Input: Array
Output: Number
Constraints: use reduce
 * 
*/

const femaleCount = function(array){
    return array.reduce((customer, female) => {
if(customer.gender === female){
    return customer + 1;
}
    }, 0)
};


/** 
 * 3: oldestCustomer
Objective: Find the oldest customer's name
Input: Array
Output: String
Constraints:
 * 
*/



var oldestCustomer = function(array) {
    return array.filter(customer => {
let output = ''
    let oldest = 0
    if(customer.age > oldest)
    output += customer.age;
return output
    })
}

/** 
 * 4: youngestCustomer
Objective: Find the youngest customer's name
Input: Array
Output: String
Constraints:
 * 
*/

var youngestCustomer = function(array){
return array.filter(customer => {
    let output = '';
    let youngest = 0;
    if(customer.age < youngest)
    output += customer.age;
return output
})
}

/** 
 * 5: averageBalance
Objective: Find the average balance of all customers
Input: Array
Output: Number
Constraints: reduce
 * 
*/

var averageBalance = function(array){
    const totalBalance = array.reduce((acc,customer) => {
return acc += customer.balance;
    }, 0);
    return totalBalance / array.length;
};

/** 
 * 6: firstLetterCount
Objective: Find how many customer's names begin with a given letter
Input: Array, Letter
Output: Number
Constraints: use reduce
 * 
*/

var firstLetterCount = (array, char) => {
    return array.reduce((acc, current) => {customer => {
        if(customer.name[0] === char){
            acc += current
        }
    }
    }, 0)
};

/** 
 * 7: friendFirstLetterCount
Objective: Find how many friends of a given customer have names that start with a given letter
Input: Array, Customer, Letter
Output: Number
Constraints:
 * 
*/

var friendFirstLetterCount;

/** 
8: friendsCount
Objective: Find the customers' names that have a given customer's name in their friends list
Input: Array, Name
Output: Array
Constraints:
 * 
*/

var friendsCount;

/** 
 * 9: topThreeTags
Objective: Find the three most common tags among all customers' associated tags
Input: Array
Output: Array
Constraints:
 * 
*/

var topThreeTags;

/** 
 * 10: genderCount
Objective: Create a summary of genders, the output should be:
{
    male: 3,
    female: 4,
    non-binary: 1
}
Input: Array
Output: Object
Constraints: Use reduce
 * 
*/

var genderCount;



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
