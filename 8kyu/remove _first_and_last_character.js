/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters. */

function removeChar(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (i !== 0 && i != str.length - 1)
            result = result + str[i]
    }
    return result
};