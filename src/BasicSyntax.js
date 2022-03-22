export function romanToInteger(str) {
    let result = 0;

    while (str) {
        let char = str[0];
        str = str.substring(1);
        let nextChar = char;

        if (str.length > 0) nextChar = str[0];

        // Если следующая римская цифра больше предыдущей, значит следующая уменьшается
        // на значение равное предыдущей.
        if (nextChar !== char) {
            let isDecreased = false;
            if ((nextChar === 'V' || nextChar === 'X') && char === 'I') {
                result--;
                isDecreased = true;
            } else if ((nextChar === 'L' || nextChar === 'C') && char === 'X') {
                result -= 10;
                isDecreased = true;
            } else if ((nextChar === 'D' || nextChar === 'M') && char === 'C') {
                result -= 100;
                isDecreased = true;
            }

            if (isDecreased) {
                char = str[0];
                str = str.substring(1);
            }
        }

        switch (char) {
            case 'I':
                result++;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
            default:
                break;
        }
    }

    return result;
}
