function eligibleToVote(age){
    if(age < 0){
        console.log("Invalid age");
    } 
    else if(age < 18){
        console.log("not eligible");
    } 
    else {
        console.log(" eligible");
    }
}

eligibleToVote(17);
eligibleToVote(18);
eligibleToVote(19);
eligibleToVote(1);
eligibleToVote(-1);
eligibleToVote(40);

