List<Object> Boxing= new List<Object>();

Boxing.Add(7);
Boxing.Add(28);
Boxing.Add(-1);
Boxing.Add(true);
Boxing.Add("chair");

    int sum =0;
foreach(var box in Boxing){
if(box is int){
    sum+=(int)box;
}
Console.WriteLine(sum);
}