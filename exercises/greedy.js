//coin change
export function makeMinimumChange(n) {
    let coinQty = 0;
    [500, 100, 50, 10].forEach((coin) => {
        coinQty += Math.floor(n / coin);
        n %= coinQty;
    });
    return coinQty;
}

//console.log("coin change", makeMinimumChange(1240));

//law-of-large-numbers

export function makeBiggestNumber(n, m, k) {
    let count = 0;

    n.sort((a, b) => b - a);
    let biggestNum = n[0];
    let secondBigNum = n[1];

    while (true) {
        for (let i = 0; i < k; i++) {
            if (m === 0) break;
            count += biggestNum;
            m -= 1;
        }
        if (m === 0) break;
        count += secondBigNum;
        m -= 1;
    }
    return count;
}
// console.log("Biggest number", makeBiggestNumber([6, 5, 6, 4, 5, 6], 7, 3));

//make-number-1
export function makeNumber1(n, k) {
    let totalCount = 0;
    while (n > 1) {
        if (n % k === 0) n /= k;
        else n--;
        totalCount++;
    }
    return totalCount;
}
//IDK => inputs..!?
export const inputs = [
    [16, 4],
    [31, 6]
];

  // inputs.forEach(([n, k]) => console.log("make number 1", makeNumber1(n, k)));