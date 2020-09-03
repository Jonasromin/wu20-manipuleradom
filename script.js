    let div = document.createElement("div"); //Skapar div 

    div.innerHTML = '<P>Jonas Romin</P>';//Lägger till <P> med text till DIV

    document.body.appendChild(div); // lägger till div till body

    let div1 = document.createElement("Div1"); // skapar div1 

    document.body.appendChild(div1); // lägger till div 1 till body 

    let minLista = ['Snickra', 'Tv-spel', 'Padel', 'Träna', 'Se film'];

    let mainPart = document.getElementsByTagName('div1');
    
    mainPart[0].insertAdjacentHTML('afterbegin', '<ol id="minLista"></ol>');
    
    let myList = document.getElementById('minLista');
    
    for (let i = 0; i < minLista.length; i++) {
        
        myList.insertAdjacentHTML('afterend', '<li>' + minLista[i] + '</li>') }