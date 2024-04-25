// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */

var merge = function () {
  let nums1 = [1, 2, 3, 0, 0, 0, 0, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;

  nums1.splice(m, nums1.length - m, ...nums2);

  n += m;
  mergeSort(nums1, 0, n - 1);

  console.log(nums1);
};

var mergeSort = function (vet, l, r) {
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    mergeSort(vet, l, m);
    mergeSort(vet, m + 1, r);
    auxMerge(vet, l, m, r);
  }
};

var auxMerge = function (vet, l, m, r) {
  let i = l;
  let j = m + 1;
  let k = 0;

  let vetAux = [];

  while (i <= m && j <= r) {
    if (vet[i] < vet[j]) {
      vetAux[k++] = vet[i++];
    } else {
      vetAux[k++] = vet[j++];
    }
  }

  while (i <= m) {
    vetAux[k++] = vet[i++];
  }

  while (j <= r) {
    vetAux[k++] = vet[j++];
  }

  k = 0;
  for (i = l; i <= r; i++, k++) {
    vet[i] = vetAux[k];
  }
};

merge();
