 export class App {
   constructor() {
          // 値がHTMLElementで必ず帰るため上手くいく
          const pokemonListElement = document.querySelector(".pokemonList");
          const searchInput = document.getElementById("name");
          const searchButton = document.getElementById("searchButton"); // 検索ボタンの要素を取得

          // const pokemonListElement = document.getElementById(".pokemonList");
          // ↑だとCannot read properties of null (reading 'appendChild') となって動かない
          if (pokemonListElement) {
           fetch("https://poke-iota-ten.vercel.app/api/pokedex")
             .then(response => response.json())
             .then(data => {
              const allPokemon = data.items;
                 data.items.forEach(pokemon => {
                  
                    // 検索ボタンがクリックされたときの処理
                    searchButton.addEventListener("click", () => {
                      const searchTerm = searchInput.value.toLowerCase();
                      console.log(searchTerm);
                      const filteredPokemon = allPokemon.filter(pokemon =>
                          pokemon.name.toLowerCase().includes(searchTerm)
                      );

                      pokemonListElement.innerHTML = ""; // リストをクリア
                      filteredPokemon.forEach(pokemon => {
                          const listItem = document.createElement('div');
                          listItem.className = "pokemonItem";
                          const pokemonNo = document.createElement('p');
                          pokemonNo.className = "no";
                          const pokemonName = document.createElement('p');
                          pokemonName.className = "name";
                          pokemonNo.textContent = pokemon.no;
                          pokemonName.textContent = pokemon.name;
                          listItem.appendChild(pokemonNo);
                          listItem.appendChild(pokemonName);
                          listItem.addEventListener('click',() =>{
                            const pokemonNo = pokemon.no;
                            // console.log(pokemonNo);
                            const pokemonUrl = `/detail.html?no=${pokemonNo}`
                            window.location.href = pokemonUrl;
                          })
                          pokemonListElement.appendChild(listItem);
                      });
                  });

                  // 初回表示
                  allPokemon.forEach(pokemon => {
                    const listItem = document.createElement('div');
                    listItem.className = "pokemonItem";
                    const pokemonNo = document.createElement('ul');
                    pokemonNo.className = "no";
                    const pokemonName = document.createElement('ul');
                    pokemonName.className = "name";
                    pokemonNo.textContent = pokemon.no;
                    pokemonName.textContent = pokemon.name;
                    listItem.appendChild(pokemonNo);
                    listItem.appendChild(pokemonName);
                    listItem.addEventListener('click',() =>{
                      const pokemonNo = pokemon.no;
                      // console.log(pokemonNo);
                      const pokemonUrl = `/detail.html?no=${pokemonNo}`
                      window.location.href = pokemonUrl;
                    })
                    // const listItem = document.createElement("ul");
                    // listItem.textContent = `${pokemon.no}: ${pokemon.name}`;
                    // console.log(listItem.textContent);
                    pokemonListElement.appendChild(listItem);
                  
                    // console.log(pokemonListElement);
                 });               
                });
              })
             .catch(error => {
               console.error("Error fetching data:", error);
             });}else{
              console.error(".pokemonList element not found.");
             }
       };
}





            

    
