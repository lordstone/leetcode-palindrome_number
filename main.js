/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if(x<0){
        return false;
    }
    if(Math.abs(x)<10){
        return true;
    }
    if (x>2147483646 || x<-2147483647){
        return false;
    }
   
    var temp1 = 0;
    var temp2 = Math.abs(x);
    while(temp2 >= 1){
        temp1 *= 10;
        temp1 += temp2 % 10;
        temp2 = Math.floor(temp2 / 10);
    }
  
    temp2 = Math.abs(x);
    while(temp2 >= 1 || temp1 >= 1){
        var tp1 = temp2 % 10;
        var tp2 = temp1 % 10;
        temp2 = Math.floor(temp2 / 10);
        temp1 = Math.floor(temp1/ 10);
        if(tp1 != tp2){
            return false;
        }
    }
    return true;
};
