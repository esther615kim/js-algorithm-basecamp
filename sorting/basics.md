2021.10.30
### Sorting Basics ✨ (Dongbin Book + googling)

#### Sorting
- Selection Sort
- Insertion Sort
- Quick Sort
-

##### 1.Selection Sort
- simple comparison sort used for sorting an array
- Big O time complexity => o(n2) nested for loops, inefficient
- simply loop through the input array linearly, selecting the first smallest element and swap it to the first...so on!

```js
let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
```

##### 2.Insertion Sort
- Big O time complexity => o(n2), best case run time O(n),or linear when it is alreayd partially or fully sorted but should not be used for large lists.
- Sort an array by dividing the array into a 'sorted' portion and work by moving from left to right over an input list to see if the element is larger than the previous element(on the left)
- Skip [0] and start from the 2nd item.

`
Iteration 0 (unsorted array): [5,3,1,4,6]
Iteration 1, key is 3 (was at index 1): [5,3,1,4,6] →[3,5,1,4,6]
Iteration 2, key is 1 (was at index 2): [3,5,1,4,6] →[1,3,5,4,6]
Iteration 3, key is 4 (was at index 3, ): [1,3,5,4,6] → [1,3,4,5,6]
Iteration 4, key is 6 (was at index 4): [1,3,4,5,6] → [1,3,4,5,6]
— 6 was already in the right place!
no changes are made and insertion sort returns the sorted array.
`

```js
const insertionSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
};
```


##### 3.Quick Sort
- one of the most used and popular algorithms (similar to sort() in JS)
- select a 'pivot' element and compare all elements and arrange them in an asecending order. Move elements less than the 'pivot'element to the left and grater pivot is to the right.


```js
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}
```

### by using recursion
```js
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var result = quickSort(items, 0, items.length - 1);
```

##### References
`Selection Sort`
https://medium.com/javascript-algorithms/javascript-algorithms-selection-sort-54da919d0513
`Insertion Sort`
https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg
'Quick Sort'
https://www.guru99.com/quicksort-in-javascript.html