function containsString(str1, str2) {
    if (str1.length > str2.length) {
        return false;
    }

    for (let i = 0; i <= str2.length - str1.length; i++) {
        let isMatch = true;

        for (let j = 0; j < str1.length; j++) {
            if (str1[j] !== str2[i + j]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            return true;
        }
    }

    return false;
}

console.log(containsString("abc", "abcdef"));
console.log(containsString("gh", "abcdef"));