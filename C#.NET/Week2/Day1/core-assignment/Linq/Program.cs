List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46,"Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!
IEnumerable<Eruption> Chile = eruptions.Where(c => c.Location=="Chile");
PrintEach(Chile,"CHILESSSSSSSSSSSSSSS");
IEnumerable<Eruption> Hawaiian  = eruptions.Where(c => c.Location=="Hawaiian Is");
PrintEach(Hawaiian,"NOT FOUND");
IEnumerable<Eruption> Ninteens  = eruptions.Where(y => y.Year>1900).Where(c=>c.Location=="New Zealand").Take(1);
PrintEach(Ninteens,"FERGH");
IEnumerable<Eruption> Volc  = eruptions.Where(e => e.ElevationInMeters>2000);
PrintEach(Volc,"Volcanos");
IEnumerable<Eruption> Lnames = eruptions.Where(v => v.Volcano.StartsWith("L"));
int highest  = eruptions.Max(e => e.ElevationInMeters);
Console.WriteLine(highest);
IEnumerable<Eruption> elevation  = eruptions.Where(e => e.ElevationInMeters==highest);
PrintEach(elevation,"elevation");
IEnumerable<Eruption> alphab  = eruptions.OrderBy(e => e.Volcano);
PrintEach(alphab,"alphab");
IEnumerable<Eruption> both  = eruptions.OrderBy(e => e.Volcano).Where(y=>y.Year<1000);
PrintEach(both,"both");
IEnumerable<string> names  = both.Select(v=>v.Volcano);
PrintEach(names,"names");


 
// Helper method to print each item in a List or IEnumerable.This should remain at the bottom of your class!
static void PrintEach(IEnumerable<dynamic> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (var item in items)
    {
        Console.WriteLine(item.ToString());
    }
}
