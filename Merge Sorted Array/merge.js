// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */

var merge = function () {
  let m = 6;
  let n = 3;
  let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
  let nums2 = [1, 2, 2];

  if (n === 0) return;

  
  let lst = m + n - 1;
  while (n > 0 && m > 0) {
    if (nums1[m - 1] <= nums2[n - 1]) {
      nums1[lst] = nums2[n - 1];
      n--;
    } else {
      nums1[lst] = nums1[m - 1];
      m--;
    }
    lst--;
   }
   
   while (n > 0) {
      nums1[lst--] = nums2[--n];
   }

};

merge();
