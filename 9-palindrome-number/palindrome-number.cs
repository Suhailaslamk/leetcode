public class Solution {
    public bool IsPalindrome(int x) {
        string y = x.ToString();
        char[] arr = y.ToCharArray();
        Array.Reverse(arr);
        string reversed = new String(arr);
        return y == reversed;
    }
}