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
        ["pokemon/empoleon.png", "Empoleon", "Fully Evolved"],
        ["pokemon/starly.png", "Starly", "Level up (lvl. 14)"],
        ["pokemon/staravia.png", "Staravia", "Level up (lvl. 34)"],
        ["pokemon/staraptor.png", "Staraptor", "Fully Evolved"],
        ["pokemon/bidoof.png", "Bidoof", "Level up (lvl. 15)"],
        ["pokemon/bibarel.png", "Bibarel", "Fully Evolved"],
        ["pokemon/kricketot.png", "Kricketot", "Level up (lvl. 10)"],
        ["pokemon/kricketune.png", "Kricketune", "Fully Evolved"],
        ["pokemon/shinx.png", "Shinx", "Level up (lvl. 15)"],
        ["pokemon/luxio.png", "Luxio", "Level up (lvl. 30)"],
        ["pokemon/luxray.png", "Luxray", "Fully Evolved"],
        ["pokemon/abra.png", "Abra", "Level up (lvl. 16)"],
        ["pokemon/kadabra.png", "Kadabra", "Trade"],
        ["pokemon/alakazam.png", "Alakazam", "Fully Evolved"],
        ["pokemon/magikarp.png", "Magikarp", "Level up (lvl. 20)"],
        ["pokemon/gyarados.png", "Gyarados", "Fully Evolved"]


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
        ["Water", "Steel"],
        ["Normal", "Flying"],
        ["Normal", "Flying"],
        ["Normal", "Flying"],
        ["Normal", ""],
        ["Normal", "Water"],
        ["Bug", ""],
        ["Bug", ""],
        ["Electric", ""],
        ["Electric", ""],
        ["Electric", ""],
        ["Psychic", ""],
        ["Psychic", ""],
        ["Psychic", ""],
        ["Water", ""],
        ["Water", "Flying"]
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
    type1HeadingTd.innerText = "Type";
    type1HeadingTd.setAttribute("colspan", "2");
    trHeading.appendChild(type1HeadingTd);

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
        //Creates Row for the pokemon
        let tr = document.createElement("tr");

        //Branch if the pokemon has one type
        if (pokemonTypes[i][1] == "") {

            //Creates img element for pokemon image
            let pokeImg = document.createElement("img");
            pokeImg.src=pokemon[i][0];

            //Creates table data element for pokemon name
            let nameTd = document.createElement("td");
            nameTd.innerText = pokemon[i][1];

            //Creates table data element for pokemon type1
            let type1Td = document.createElement("td");
            type1Td.innerText = pokemonTypes[i][0];
            //Makes type1 span 2 columns (second column is type2 for entries that have a type2)
            type1Td.setAttribute("colspan", "2");

            //Creates table data element for pokemon Evolution Method
            let evolveMethodTd = document.createElement("td");
            evolveMethodTd.innerText = pokemon[i][2];

            //Can I use an object?
            // var type1Object = document.createElement('td')
            // Object.assign()
            // document.body.appendChild(newObject) 

            //Appends tds to tr, then tr to table
            tr.appendChild(pokeImg);
            tr.appendChild(nameTd);
            tr.appendChild(type1Td);
            tr.appendChild(evolveMethodTd);
            table.appendChild(tr);

            //How to know which branch entered for the pokemon
            console.log("One type branch for " + pokemon[i][1]);
            
            //tests for type to apply CSS to the type
            switch(pokemonTypes[i][0]) {
                case "Grass":
                    type1Td.setAttribute("class", "typeGrass");
                    break;

                case "Fire":
                    type1Td.setAttribute("class", "typeFire");
                    break;
                
                case "Water":
                    type1Td.setAttribute("class", "typeWater");
                    break;
                
                case "Ground":
                    type1Td.setAttribute("class", "typeGround");
                    break;

                case "Fighting":
                    type1Td.setAttribute("class", "typeFighting");
                    break;
                
                case "Steel":
                    type1Td.setAttribute("class", "typeSteel");
                    break;
                
                case "Normal":
                    type1Td.setAttribute("class", "typeNormal");
                    break;

                case "Flying":
                    type1Td.setAttribute("class", "typeFlying");
                    break;
                
                case "Bug":
                    type1Td.setAttribute("class", "typeBug");
                    break;

                case "Electric":
                    type1Td.setAttribute("class", "typeElectric");
                    break;
                  
                case "Psychic":
                    type1Td.setAttribute("class", "typePsychic");
                    break;                    

                default:
                  // code block
              } 
           

        }

        //Branch if the pokemon has two types
        else {
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

            //Creates table data element for pokemon Evolution Method
            let evolveMethodTd = document.createElement("td");
            evolveMethodTd.innerText = pokemon[i][2];

            //Appends tds to tr, then tr to table
            //Note, this branch specifically appends a second td (type2) that the first branch does not
            tr.appendChild(pokeImg);
            tr.appendChild(nameTd);
            tr.appendChild(type1Td);
            tr.appendChild(type2Td);
            tr.appendChild(evolveMethodTd);
            table.appendChild(tr);

            //How to know which branch entered for the pokemon
            console.log("Two type branch for " + pokemon[i][1]);

            //tests for type to apply CSS to the first type
            switch(pokemonTypes[i][0]) {
                case "Grass":
                    type1Td.setAttribute("class", "typeGrass");
                    break;

                case "Fire":
                    type1Td.setAttribute("class", "typeFire");
                    break;
                
                case "Water":
                    type1Td.setAttribute("class", "typeWater");
                    break;

                case "Ground":
                    type1Td.setAttribute("class", "typeGround");
                    break;

                case "Fighting":
                    type1Td.setAttribute("class", "typeFighting");
                    break;

                case "Steel":
                    type1Td.setAttribute("class", "typeSteel");
                    break;

                case "Normal":
                    type1Td.setAttribute("class", "typeNormal");
                    break;

                case "Flying":
                    type1Td.setAttribute("class", "typeFlying");
                    break;

                case "Bug":
                    type1Td.setAttribute("class", "typeBug");
                    break;

                case "Electric":
                    type1Td.setAttribute("class", "typeElectric");
                    break;

                case "Psychic":
                    type1Td.setAttribute("class", "typePsychic");
                    break; 

                default:
                  // code block
              } 

            //tests for type to apply CSS to the second type   
            switch(pokemonTypes[i][1]) {
                case "Grass":
                    type2Td.setAttribute("class", "typeGrass");
                    break;

                case "Fire":
                    type2Td.setAttribute("class", "typeFire");
                    break;
                
                case "Water":
                    type2Td.setAttribute("class", "typeWater");
                    break;

                case "Ground":
                    type2Td.setAttribute("class", "typeGround");
                    break;
    
                case "Fighting":
                    type2Td.setAttribute("class", "typeFighting");
                    break;

                case "Steel":
                    type2Td.setAttribute("class", "typeSteel");
                    break;

                case "Normal":
                    type2Td.setAttribute("class", "typeNormal");
                    break;

                case "Flying":
                    type2Td.setAttribute("class", "typeFlying");
                    break;

                case "Bug":
                    type2Td.setAttribute("class", "typeBug");
                    break;

                case "Electric":
                    type12d.setAttribute("class", "typeElectric");
                    break;

                case "Psychic":
                    type2Td.setAttribute("class", "typePsychic");
                    break; 

                default:
                  // code block
              } 

        }

    }

}

//TODO: Add pokedex entry numbers