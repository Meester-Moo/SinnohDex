window.onload = function() {
    
    let pokemon = [
        ["turtwig.png", "Turtwig", "Grass", "18"],
        ["grotle.png","Grotle", "Grass", "32"],
        ["torterra.png","Torterra", "Grass", "Fully Evolved"]
    ]

    
    let table = document.getElementById("poketable")
    

    for (let i = 0; i < pokemon.length; i++) {
        let tr = document.createElement("tr")

        pokemon[i]

        let imgTd = document.createElement("td")
        let pokeImg = document.createElement("img")
        pokeImg.src=pokemon[i][0]
        let nameTd = document.createElement("td")
        nameTd.innerText = pokemon[i][1]
        let typeTd = document.createElement("td")
        typeTd.innerText = pokemon[i][2]
        let evolveLvlTd = document.createElement("td")
        evolveLvlTd.innerText = pokemon[i][3]

        tr.appendChild(imgTd)
        tr.appendChild(pokeImg)
        tr.appendChild(nameTd)
        tr.appendChild(typeTd)
        tr.appendChild(evolveLvlTd)
        table.appendChild(tr)
    }

}