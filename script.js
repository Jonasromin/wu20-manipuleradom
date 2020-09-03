/*function hej(fNamn, eNamn)
{
    var printName = "Hej " + fNamn + " " + eNamn + "!";
    console.log(printName);
}

hej("Jonas", "Romin");
hej("Kalle", "Karlsson");*/

let div = document.createElement("div"); //Skapar div 
div.innerHTML = '<P>Jonas Romin</P>';//Lägger till <P> med text till DIV
document.body.appendChild(div); // lägger till div till html body

let minLista = ["Bygga", "Träna", "Se film", "Padel"]; //min array med 4 saker

    for (var i=0; i<minLista.length; i++); //Skriver ut min array
   
    let div1 = document.createElement("div"); //skapar ny div "div1"
    

    div1.innerHTML = '<OL><LI></LI><LI></LI><LI></LI><LI></LI></OL>' + minLista; //bortse från denna
    document.body.appendChild(div1);


    