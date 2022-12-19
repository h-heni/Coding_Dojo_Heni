// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
// for (int i=1;i<=255;i++){
//     Console.WriteLine(i);
// }
// for (int i=1;i<=100;i++){
//     if(!((i%5==0) && (i%3==0))){
//         if(i%3==0){
//             Console.WriteLine(i);
//         }
//         else if (i%5==0){
//             Console.WriteLine(i);

//         }
//     }
// }
// for (int i=1;i<=100;i++){
//     if((i%5==0) && (i%3==0)){

//             Console.WriteLine(i+"FizzBuzz");
//     }
//         else if (i%3==0){
//             Console.WriteLine(i+"Fizz");
//         }
//         else if (i%5==0){
//             Console.WriteLine(i+"Buzz");

//         }
// }
// int j=1;
// while (j<=100){
//     if((j%5==0) && (j%3==0)){

//             Console.WriteLine(j+"FizzBuzz");
//     }
//         else if (j%3==0){
//             Console.WriteLine(j+"Fizz");
//         }
//         else if (j%5==0){
//             Console.WriteLine(j+"Buzz");

//         }
//         j++;
// }
Dictionary<string,string> profile = new Dictionary<string,string>();
//Almost all the methods that exists with Lists are the same with Dictionaries
profile.Add("Name", "Speros");
profile.Add("Language", "PHP");
profile.Add("Location", "Greece");
// Console.WriteLine("Instructor Profile");
// Console.WriteLine("Name - " + profile["Name"]);
// Console.WriteLine("From - " + profile["Location"]);
// Console.WriteLine("Favorite Language - " + profile["Language"]);



// foreach (KeyValuePair<string,string> entry in profile)
// {
//     Console.WriteLine(entry.Key + " - " + entry.Value);
// }

foreach (var entry in profile)
{
    Console.WriteLine(entry.Key + " - " + entry.Value);
}