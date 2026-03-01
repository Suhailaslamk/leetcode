public class Solution {
    public bool IsPalindrome(int x) {
        string str = x.ToString();
        string reversed = "";
        for(int i=str.Length-1; i>=0; i--){
                 reversed += str[i];
        }
            if ( str == reversed){
            return true;
        }else{
            return false;
        
        }
        
    }
}