var str: string = "correspondence";
var arr2: number[] = Array(26).fill(0);
var str1: string = "";
for(var i: number = 0;i<str.length;i++)
{
    arr2[str.charCodeAt(i)-97]++;
}
for(var i: number = 0;i<str.length;i++)
{
    if(str[i]==="a" || str[i]==="e" || str[i]==="i" 
    || str[i]==="o" || str[i]==="u" && arr2[str.charCodeAt(i)-97]>1)
    {
        continue;
    }
    else{
        str1+=str[i];
    }
}
console.log(str1);