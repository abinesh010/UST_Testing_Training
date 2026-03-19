var time: Date = new Date();
time.setHours(9,30,0,0);
var studentTime: Date = new Date();
time.setHours(9,30,0,0);
if(studentTime === time)
{
    console.log("On-Time");
}
else if(studentTime<time)
{
    console.log("Late");
}
else if(studentTime>time)
{
    console.log("Early");
}
else
    console.log("Invalid time");