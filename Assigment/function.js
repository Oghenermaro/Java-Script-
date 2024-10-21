function factorial(number) {
    if(number < 0){
        
        console.log(`factorial number is invalid`);
    } else {

        for(let i = number; i >= 1; i--) {

            console.log(`factorial is now ${number} * ${i}`);
            }
    }


}

factorial(10)