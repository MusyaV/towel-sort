// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (matrix == null) {
        return [];
    }else{
        for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnInd =
                i % 2 === 0
                    ? //  если 0 - значит ряд четный,
                      j
                    : // а если нет, то нечетный
                      matrix[i].length - j - 1;
            res += matrix[i][columnInd];
        }
    }
    return Array.from(res);
    }
    
};
