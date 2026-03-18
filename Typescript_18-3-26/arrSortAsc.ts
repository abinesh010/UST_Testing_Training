var arr3: number[] = [8,2,5,1,4,9,7,6,3];
for(var i: number=0;i<arr3.length-1;i++)
{
    for(var j:number=i+1;j<arr3.length;j++)
    {
        if(arr3[i]>arr3[j])
        {
            var temp: number = arr3[i];
            arr3[i] = arr3[j];
            arr3[j] = temp;
        }
    }
}
console.log(arr3);