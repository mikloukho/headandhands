function getArrays(n) {
    let map = new Map();
    let randomNumber;
    let result;
    while (map.size < n ) {
        randomNumber = Math.floor(Math.random() * n * 10);
        if(! map.has(randomNumber)) {
            map.set(randomNumber, generateArray(randomNumber));
        }
    }
    result = Array.from(map.values()).map((arr, idx) => sortArray(arr, idx))
    return result;
}
function generateArray(n) {
    return Array(n).fill().map(() => Math.round(Math.random() * 1000))
}
function sortArray(array, idx) {
    return array.sort((a, b) => idx % 2 ? b - a : a - b)

}
