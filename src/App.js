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
              // 初回表示用に作製
              const allPokemon = data.items;
                 data.items.forEach(pokemon => {
                    // 検索ボタンがクリックされたときの処理
                    searchButton.addEventListener("click", () => {
                      const searchTerm = searchInput.value.toLowerCase();
                      
                      const filteredPokemon = pokemon.filter(pokemon =>
                        
                          pokemon.name.toLowerCase().includes(searchTerm)
                      );

                      // pokemonListElement.innerHTML = ""; // リストをクリア
                      filteredPokemon.forEach(pokemon => {
                        pokemonListElement.innerHTML = ""; // リストをクリア
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
                });

                  
                  // 初回表示
                  allPokemon.forEach(pokemon => {
                    console.log(pokemon)
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
                    // クリックしたら対応する内容を表示
                    listItem.addEventListener('click',() =>{
                      const pokemonNo = pokemon.no;
                      const pokemonUrl = `/detail.html?no=${pokemonNo}`
                      window.location.href = pokemonUrl;
                    })
 
                    pokemonListElement.appendChild(listItem);     
                 });               
               
              })
             .catch(error => {
              // apiの取得に失敗したら表示
               console.error("Error fetching data:", error);
             });
            }else{
              console.error(".pokemonList element not found.");
             }
       };
}





            

    
