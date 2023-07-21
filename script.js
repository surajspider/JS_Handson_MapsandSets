let a = 'abcadeecfb';
function count(str) {
    let alphabet = new Map();
    for (let char of str) {
        if (alphabet.has(char)) {
            alphabet.set(char, alphabet.get(char) + 1);
        }
        else {
            alphabet.set(char, 1);
        }
    }
    console.log(alphabet);
    for (let [key, value] of alphabet) {
        console.log(key + "=" + value);
    }
}
count(a);