var weight:number = 70;
var height:number = 1.3;
var bmi = weight/(height*height);
if(bmi<18.5 && bmi>0)
    console.log("underweight");
else if(bmi>=18.5 && bmi<25)
    console.log("normal weight");
else if(bmi>=25 && bmi<30)
    console.log("overweight");
else if(bmi>30)
    console.log("obesity");
else
    console.log("Invalid bmi");