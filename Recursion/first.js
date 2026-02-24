function fun(num){
    // base case
    if(num == 0) return;

    console.log(num);

    // work 
    num = num -1;
    fun(num);
}

// a = 5;
// fun(a);



n = 10;
function print(x){
    if(x > n ) return;
    console.log(x);
    print(x + 1);
}
print(1);