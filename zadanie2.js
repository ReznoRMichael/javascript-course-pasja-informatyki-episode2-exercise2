function wypisz()
{
    var liczba1 = document.getElementById("pole1").value;
    var liczba2 = document.getElementById("pole2").value;
    var napis = "";

    if(liczba2 > liczba1)
    {
        for (i=liczba1; i<=liczba2; i++)
        {
            napis += i + "<br>";
        }
    }
    else if(liczba2 < liczba1)
    {
        for (i=liczba1; i>=liczba2; i--)
        {
            napis += i + "<br>";
        }
    }
    else napis = "Pola są puste, nie zawierają liczb lub liczby są takie same. Wpisz różne liczby do obu pól.";
    
    document.getElementById("wynik").innerHTML = napis;
}		