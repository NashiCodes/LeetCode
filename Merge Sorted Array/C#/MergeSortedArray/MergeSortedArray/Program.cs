namespace MergeSortedArray;

internal static class Program
{
    private static void Main(string[] args)
    {
        var nums1 = new[] {1, 2, 3, 0, 0, 0};
        var m = 3;
        var nums2 = new[] {2, 5, 6};
        var n = 3;

        if (n == 0) return;
        int lst = m+n-1;

        while (m > 0 && n > 0)
        {
            if (nums1[m - 1] > nums2[n - 1])
            {
                nums1[lst--] = nums1[--m];
            }
            else
            {
                nums1[lst--] = nums2[--n];
            }
        }

        while (n > 0)
        {
            nums1[lst--] = nums2[--n];
        }
    }
}