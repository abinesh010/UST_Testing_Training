var str: string = "correspondence";
var arr1: number[] = Array(26).fill(0);
var str1: string="";
for(var i: number=0 ;i<str.length;i++)
{
    arr1[str.charCodeAt(i)-97]++;
}
for(var i: number=0 ;i<str.length;i++)
{
    if(arr1[str.charCodeAt(i)-97] === 1)
        str1+=str[i];
}

console.log(str1);
