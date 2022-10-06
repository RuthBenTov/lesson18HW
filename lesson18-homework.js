// ---------------------1---------------------
var printFromZeroTo = function (num) {
    if (num == 0)
        return "0";
    return printFromZeroTo(num - 1) + num.toString();
};
console.log(printFromZeroTo(10));
//------------------------2---------------------
var printFromNumberTo = function (from, to) {
    if (to == from)
        return from.toString();
    return printFromNumberTo(from, to - 1) + to.toString();
};
console.log(printFromNumberTo(3, 10));
//-------------------------3---------------------
var printCharNtimes = function (char, times) {
    if (times == 1)
        return char;
    return printCharNtimes(char, times - 1) + char;
};
console.log(printCharNtimes("#", 3));
//------------------------4-------------------------
var arr = [7, 3, 5, 2, 4, 1, 6];
var temp = 0;
var bublleSort = function (array, index) {
    if (index < 1)
        return array;
    if (array[index] > array[index - 1])
        return bublleSort(array, index - 1);
    temp = array[index - 1];
    array[index - 1] = array[index];
    array[index] = temp;
    index = array.length;
    return bublleSort(array, index - 1);
};
bublleSort(arr, arr.length - 1);
console.log(arr);
//----------------------5--------------------
var ints = [-3, -12, -5, -9, 6, -7, -15, -2, -1, -18, 24];
var countPositiveNumbersInIntArray = function (array, index) {
    if (index < 0)
        return 0;
    if (array[index] < 0)
        return countPositiveNumbersInIntArray(array, index - 1);
    else
        return countPositiveNumbersInIntArray(array, index - 1) + 1;
};
console.log(countPositiveNumbersInIntArray(ints, ints.length - 1));
