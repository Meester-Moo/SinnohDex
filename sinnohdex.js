window.onload = function() {
    
    let pokemon = [
        ["pokemon/turtwig.png", "Turtwig", "Level up (lvl. 18)"],
        ["pokemon/grotle.png", "Grotle", "Level up (lvl. 32)"],
        ["pokemon/torterra.png", "Torterra", "Fully Evolved"],
        ["pokemon/chimchar.png", "Chimchar", "Level up (lvl. 14)"],
        ["pokemon/monferno.png", "Monferno", "Level up (lvl. 36)"],
        ["pokemon/infernape.png", "Infernape", "Fully Evolved"],
        ["pokemon/piplup.png", "Piplup", "Level up (lvl. 16)"],
        ["pokemon/prinplup.png", "Prinplup", "Level up (lvl. 36)"],
        ["pokemon/empoleon.png", "Empoleon", "Fully Evolved"]
    ]

    let pokemonTypes = [
        ["Grass", ""],
        ["Grass", ""],
        ["Grass", "Ground"],
        ["Fire", ""],
        ["Fire", "Fighting"],
        ["Fire", "Fighting"],
        ["Water", ""],
        ["Water", ""],
        ["Water", "Steel"]

    ]

    //Creates table element and associates it with the poketable table in the HTML
    let table = document.getElementById("poketable");

    //Creates the first row of the table (the heading row)
    let trHeading = document.createElement("tr");
    table.appendChild(trHeading);
    
    //Creates the heading table data element for the images column
    let imgHeadingTd = document.createElement("td");
    imgHeadingTd.innerText = "Official Art";
    trHeading.appendChild(imgHeadingTd);

    //Creates the heading table data element for the name column
    let nameHeadingTd = document.createElement("td");
    nameHeadingTd.innerText = "Name";
    trHeading.appendChild(nameHeadingTd);

    //Creates the heading table data element for the type1 column
    let type1HeadingTd = document.createElement("td");
    type1HeadingTd.innerText = "Type 1";
    trHeading.appendChild(type1HeadingTd);

    //Creates the heading table data element for the type2 column
    let type2HeadingTd = document.createElement("td");
    type2HeadingTd.innerText = "Type 2";
    trHeading.appendChild(type2HeadingTd);

    //Creates the heading table data element for the Evolution Method column
    let evolveMethodHeadingTd = document.createElement("td");
    evolveMethodHeadingTd.innerText = "Evolution Method";
    trHeading.appendChild(evolveMethodHeadingTd);
    

    //For Loop that generates the actual table contents
    // 1) Creates the row for that pokemon
    // 2) Creates the elements and fills in the data for each element for that pokemon 
    // 3) Appends the HTML elements into the row for that pokemon
    // 4) Appends the row for that pokemon into the table 
    for (let i = 0; i < pokemon.length; i++) {
        //Creates Row
        let tr = document.createElement("tr");

        //Creates img element for pokemon image
        let pokeImg = document.createElement("img");
        pokeImg.src=pokemon[i][0];

        //Creates table data element for pokemon name
        let nameTd = document.createElement("td");
        nameTd.innerText = pokemon[i][1];
        
        //Creates table data element for pokemon type1
        let type1Td = document.createElement("td");
        type1Td.innerText = pokemonTypes[i][0];

        //Creates table data element for pokemon type2
        let type2Td = document.createElement("td");
        type2Td.innerText= pokemonTypes[i][1];

        //Creates table data element for pokemon level
        let evolveMethodTd = document.createElement("td");
        evolveMethodTd.innerText = pokemon[i][2];

        // tr.appendChild(imgTd);
        tr.appendChild(pokeImg);
        tr.appendChild(nameTd);
        tr.appendChild(type1Td);
        tr.appendChild(type2Td);
        tr.appendChild(evolveMethodTd);
        table.appendChild(tr);
    }

}


//TODO: Add Chimchar and Piplup line
//TODO: Figure out how to add CSS to specific types
//TODO: Add pokedex entry numbers
//TODO: Figure out how to add colspan to entries that only have one type