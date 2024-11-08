function solve(numbers) {

    const isPalindrome = (num) => {
        const strNum = num.toString();
        const strReversed = strNum.split('').reverse().join('');

        return strNum === strReversed;
    }

    numbers.forEach(num => console.log(isPalindrome(num)))
}

solve([123,323,421,121]);