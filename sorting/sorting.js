//위에서 아래로
function sort(array) {
    return array.sort((a, b) => a - b);
    //reduce 로도 가능?
}

//성적이 낮은 순서로 학생 출력하기


//성적
function sortTestScores(num, students) {
    let list = students.map((item) => item.split(" "));

    console.log(list[0][1]);
    for (let i = 0; i < list.length; i++) {
        let score = +list[i][1];
        let sorted = [];
        //..음..?
    }
}
  }

console.log(sortTestScores(2, ["Sue 3", "Sam 23"]));
//객체 정렬(구글링)

let testobj = {
    "1": 5
  "2": 3
  "5": 1
};

let sortobj = [];
for (let number in testobj) {
    console.log(number);
    sortobj.push([number, testobj[number]]);
}
sortable.sort(function (a, b) {
    return a[1] - b[1];
});
//두 배열의 원소 교체

function makeBiggestNum(k, array1, array2) {
    let arry1 = array1.sort((a, b) => a - b); //작은 값부터
    let arry2 = array2.sort((a, b) => b - a); //큰 값부터

    //return result =
}

console.log(makeBiggestNum(1, [5, 3, 10], [100, 3, 10]));
