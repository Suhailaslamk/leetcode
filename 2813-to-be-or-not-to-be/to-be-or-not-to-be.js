/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : (a)=>{
            
         if(a === val){
           return  true
         }else{
            throw Error("Not Equal")
         }
        },
        
        notToBe : (b)=> {
            if(b !== val){
                return true
            }else{
                throw Error("Equal")
            }
        }
    }
        }
    


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */