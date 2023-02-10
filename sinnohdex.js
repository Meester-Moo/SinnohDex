window.onload = function() {
    
    let pokemon = [
        ["turtwig.png", "Turtwig", "18"],
        ["grotle.png", "Grotle", "32"],
        ["torterra.png", "Torterra", "Fully Evolved"]
    ]

    let pokemonTypes = [
        ["Grass"],
        ["Grass"],
        ["Grass", "Ground"]
    ]

    
    let table = document.getElementById("poketable");
    

    for (let i = 0; i < pokemon.length; i++) {
        //Creates Row
        let tr = document.createElement("tr");

        //Creates table data element for pokemon image
        let imgTd = document.createElement("td");

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
        let evolveLvlTd = document.createElement("td");
        evolveLvlTd.innerText = pokemon[i][2];

        tr.appendChild(imgTd);
        tr.appendChild(pokeImg);
        tr.appendChild(nameTd);
        tr.appendChild(type1Td);
        tr.appendChild(type2Td);
        tr.appendChild(evolveLvlTd);
        table.appendChild(tr);
    }

}


//TODO: Add table headings (IMG/NAME/TYPE/EVOLVE etc)