window.onload = function() {
    
    let pokemon = [
        ["pokemon/turtwig.png", "Turtwig", "Level up (lvl. 18)", "#0001", "#0387"],
        ["pokemon/grotle.png", "Grotle", "Level up (lvl. 32)", "#0002", "#0388"],
        ["pokemon/torterra.png", "Torterra", "Fully Evolved", "#0003", "#0389"],
        ["pokemon/chimchar.png", "Chimchar", "Level up (lvl. 14)", "#0004", "#0390"],
        ["pokemon/monferno.png", "Monferno", "Level up (lvl. 36)", "#0005", "#0391"],
        ["pokemon/infernape.png", "Infernape", "Fully Evolved", "#0006", "#0392"],
        ["pokemon/piplup.png", "Piplup", "Level up (lvl. 16)", "#0007", "#0393"],
        ["pokemon/prinplup.png", "Prinplup", "Level up (lvl. 36)", "#0008", "#0394"],
        ["pokemon/empoleon.png", "Empoleon", "Fully Evolved", "#0009", "#0395"],
        ["pokemon/starly.png", "Starly", "Level up (lvl. 14)", "#0010", "#0396"],
        ["pokemon/staravia.png", "Staravia", "Level up (lvl. 34)", "#0011", "#0397"],
        ["pokemon/staraptor.png", "Staraptor", "Fully Evolved", "#0012", "#0398"],
        ["pokemon/bidoof.png", "Bidoof", "Level up (lvl. 15)", "#0013", "#0399"],
        ["pokemon/bibarel.png", "Bibarel", "Fully Evolved", "#0014", "#0400"],
        ["pokemon/kricketot.png", "Kricketot", "Level up (lvl. 10)", "#0015", "#0401"],
        ["pokemon/kricketune.png", "Kricketune", "Fully Evolved", "#0016", "#0402"],
        ["pokemon/shinx.png", "Shinx", "Level up (lvl. 15)", "#0017", "#0403"],
        ["pokemon/luxio.png", "Luxio", "Level up (lvl. 30)", "#0018", "#0404"],
        ["pokemon/luxray.png", "Luxray", "Fully Evolved", "#0019", "#0405"],
        ["pokemon/abra.png", "Abra", "Level up (lvl. 16)", "#0020", "#0063"],
        ["pokemon/kadabra.png", "Kadabra", "Trade", "#0021", "#0064"],
        ["pokemon/alakazam.png", "Alakazam", "Fully Evolved", "#0022", "#0065"],
        ["pokemon/magikarp.png", "Magikarp", "Level up (lvl. 20)", "#0023", "#0129"],
        ["pokemon/gyarados.png", "Gyarados", "Fully Evolved", "#0024", "#0130"],
        ["pokemon/budew.png", "Budew", "Level up (high friendship, daytime)", "#0025", "#0406"],
        ["pokemon/roselia.png", "Roselia", "Shiny Stone", "#0026", "#0315"],
        ["pokemon/roserade.png", "Roserade", "Fully Evolved", "#0027", "#0407"],
        ["pokemon/zubat.png", "Zubat", "Level up (lvl. 22)", "#0028", "#0041"],
        ["pokemon/golbat.png", "Golbat", "Level up (high friendship)", "#0029", "#0042"],
        ["pokemon/crobat.png", "Crobat", "Fully Evolved", "#0030", "#0169"],
        ["pokemon/geodude.png", "Geodude", "Level up (lvl. 25)", "#0031", "#0074"],
        ["pokemon/graveler.png", "Graveler", "Trade", "#0032", "#0075"],
        ["pokemon/golem.png", "Golem", "Fully Evolved", "#0033", "#0076"],
        ["pokemon/onix.png", "Onix", "Trade while holding Metal Coat", "#0034", "#0095"],
        ["pokemon/steelix.png", "Steelix", "Fully Evolved", "#0035", "#0208"],
        ["pokemon/cranidos.png", "Cranidos", "Level up (lvl. 30)", "#0036", "#0408"],
        ["pokemon/rampardos.png", "Rampardos", "Fully Evolved", "#0037", "#0409"],
        ["pokemon/shieldon.png", "Shieldon", "Level up (lvl. 30)", "#0038", "#0410"],
        ["pokemon/bastiodon.png", "Bastiodon", "Fully Evolved", "#0039", "#0411"],
        ["pokemon/machop.png", "Machop", "Level up (lvl. 28)", "#0040", "#0066"],
        ["pokemon/machoke.png", "Machoke", "Trade", "#0041", "#0067"],
        ["pokemon/machamp.png", "Machamp", "Fully Evolved", "#0042", "#0068"],
        ["pokemon/psyduck.png", "Psyduck", "Level up (lvl. 33)", "#0043", "#0054"],
        ["pokemon/golduck.png", "Golduck", "Fully Evolved", "#0044", "#0055"],
        ["pokemon/burmy_plant_cloak.png", "Burmy (Plant Cloak)", "Level up (lvl. 20). Male - Mothim | Female - Wormadam", "#0045", "#0412"],
        ["pokemon/burmy_sandy_cloak.png", "Burmy (Sandy Cloak)", "Level up (lvl. 20). Male - Mothim | Female - Wormadam", "#0045", "#0412G"],
        ["pokemon/burmy_trash_cloak.png", "Burmy (Trash Cloak)", "Level up (lvl. 20). Male - Mothim | Female - Wormadam", "#0045", "#0412S"],
        ["pokemon/wormadam_plant_cloak.png", "Wormadam (Plant Cloak)", "Fully Evolved", "#0046", "#0413"],
        ["pokemon/wormadam_sandy_cloak.png", "Wormadam (Sandy Cloak)", "Fully Evolved", "#0046", "#0413G"],
        ["pokemon/wormadam_trash_cloak.png", "Wormadam (Trash Cloak)", "Fully Evolved", "#0046", "#0413S"],
        ["pokemon/mothim.png", "Mothim", "Fully Evolved", "#0047", "#0414"],
        ["pokemon/wurmple.png", "Wurmple", "Level up (lvl. 7). Evolves into either Silcoon or Cascoon at random", "#0048", "#0265"],
        ["pokemon/silcoon.png", "Silcoon", "Level up (lvl. 10)", "#0049", "#0266"],
        ["pokemon/beautifly.png", "Beautifly", "Fully Evolved (from Silcoon)", "#0050", "#0267"],
        ["pokemon/cascoon.png", "Cascoon", "Level up (lvl. 10)", "#0051", "#0268"],
        ["pokemon/dustox.png", "Dustox", "Fully Evolved (from Cascoon)", "#0052", "#0269"],
        ["pokemon/combee.png", "Combee", "Level up (lvl. 21) (females only)", "#0053", "#0415"],
        ["pokemon/vespiquen.png", "Vespiquen", "Fully Evolved", "#0054", "#0416"],
        ["pokemon/pachirisu.png", "Pachirisu", "Fully Evolved", "#0055", "#0417"],
        ["pokemon/buizel.png", "Buizel", "Level up (lvl. 26)", "#0056", "#0418"],
        ["pokemon/floatzel.png", "Floatzel", "Fully Evolved", "#0057", "#0419"],
        ["pokemon/cherubi.png", "Cherubi", "Level up (lvl. 25)", "#0058", "#0420"],
        ["pokemon/cherrim.png", "Cherrim", "Fully Evolved", "#0059", "#0421"],
        ["pokemon/shellos.png", "Shellos (West Coast and East Coast)", "Level up (lvl. 30)", "#0060", "#0422"],
        ["pokemon/gastrodon.png", "Gastrodon (West Coast and East Coast)", "Fully Evolved", "#0061", "#0423"],
        ["pokemon/heracross.png", "Heracross", "Fully Evolved", "#0062", "#0214"],

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
        ["Water", "Flying"],
        ["Grass", "Poison"],
        ["Grass", "Poison"],
        ["Grass", "Poison"],
        ["Poison", "Flying"],
        ["Poison", "Flying"],
        ["Poison", "Flying"],
        ["Rock", "Ground"],
        ["Rock", "Ground"],
        ["Rock", "Ground"],
        ["Rock", "Ground"],
        ["Steel", "Ground"],
        ["Rock", ""],
        ["Rock", ""],
        ["Rock", "Steel"],
        ["Rock", "Steel"],
        ["Fighting", ""],
        ["Fighting", ""],
        ["Fighting", ""],
        ["Water", ""],
        ["Water", "Psychic"],
        ["Bug", ""],
        ["Bug", ""],
        ["Bug", ""],
        ["Bug", "Grass"],
        ["Bug", "Ground"],
        ["Bug", "Steel"],
        ["Bug", "Flying"],
        ["Bug", ""],
        ["Bug", ""],
        ["Bug", "Flying"],
        ["Bug", ""],
        ["Bug", "Poison"],
        ["Bug", "Flying"],
        ["Bug", "Flying"],
        ["Electric", ""],
        ["Water", ""],
        ["Water", ""],
        ["Grass", ""],
        ["Grass", ""],
        ["Water", "Ground"],
        ["Water", "Ground"],
        ["Bug", "Fighting"],
        
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
    
    //Creates the table data element header for Sinnoh Pokedex Number
    let sinDexNumHeadingTd = document.createElement("td");
    sinDexNumHeadingTd.innerText = "S. Dex #";
    trHeading.appendChild(sinDexNumHeadingTd);

    //Creates the table data element header for National Pokedex Number
    let natDexNumHeadingTd = document.createElement("td");
    natDexNumHeadingTd.innerText = "N. Dex #";
    trHeading.appendChild(natDexNumHeadingTd);

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

            //Creates table data element for sinDexNum
            let sinDexNum = document.createElement("td");
            sinDexNum.innerText = pokemon[i][3];

            //Creates table data element for natDexNum
            let natDexNum = document.createElement("td");
            natDexNum.innerText = pokemon[i][4];

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
            tr.appendChild(sinDexNum);
            tr.appendChild(natDexNum);
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

                case "Poison":
                    type1Td.setAttribute("class", "typePoison");
                    break;

                case "Rock":
                    type1Td.setAttribute("class", "typeRock");
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

            //Creates table data element for sinDexNum
            let sinDexNum = document.createElement("td");
            sinDexNum.innerText = pokemon[i][3];

            //Creates table data element for natDexNum
            let natDexNum = document.createElement("td");
            natDexNum.innerText = pokemon[i][4];

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
            tr.appendChild(sinDexNum);
            tr.appendChild(natDexNum);
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

                case "Poison":
                    type1Td.setAttribute("class", "typePoison");
                    break;

                case "Rock":
                    type1Td.setAttribute("class", "typeRock");
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

                case "Poison":
                    type2Td.setAttribute("class", "typePoison");
                    break; 

                case "Rock":
                    type2Td.setAttribute("class", "typeRock");
                    break;                     

                default:
                  // code block
              } 

        }

    }

}

//TODO Add rest of Pokemon for Diamond, Pearl and Platinum
//TODO Distinguish Pokemon only found in Platinum
//TODO Change default font family
//TODO Use type plates from actual game instead of CSS font?
//TODO Fix typo in commit message a1ce6a8
    //Fix earliest commits starting with uppercase

//**Always do spelling check and make sure everything is uniform**

//Columns to add:

//TODO Add stats columns
//TODO Add Abilities column
//TODO Add where to obtain (might be too big, might have to possiblydecrease size of elements(?))