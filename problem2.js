	let num=145331;
	let s='';
    let t=num.toString();
    for(let i=t.length-1;i>=0;i--){
        s=s+t[i];
    }
    
    if(s==num)
    console.log("Yes");
    else
    console.log("No");