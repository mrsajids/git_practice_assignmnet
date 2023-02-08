let num=12;
    // Write code here
    let c=0;
    //special case when number is 1
    if(num==1){
        console.log("No");
        return;
    }
    //  count increses if no is not prime    
    for(let j=2;j<num;j++){
        if(num%j==0){
            c++;
            break;
        }
    }
    if(c==0){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
