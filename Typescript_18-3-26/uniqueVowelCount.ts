var str: string = "correspondence";
var arr4: number[] = Array(26).fill(0);
var cnt: number = 0;
for(var i: number = 0;i<str.length;i++)
{
    arr4[str.charCodeAt(i)-97]++;
}
for(var i: number = 0;i<str.length;i++)
{
    if(arr4[str.charCodeAt(i)-97] === 1 && (str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"))
    {
        cnt++;
    }
}
console.log(`${cnt} Unique Vowels`);
