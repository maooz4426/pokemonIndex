export class detailApp{
    constructor() {
    document.addEventListener("DOMContentLoaded", () => {
    const queryParams = new URLSearchParams(window.location.search);
    const pokemonNo = queryParams.get("no");
    const detailContents = document.querySelector(".pokemonDetail");
    fetch(`https://poke-iota-ten.vercel.app/api/pokedex/${pokemonNo}`)
      .then(response => response.json())
      .then(pokemon => {
        // console.log (pokemon.no);
      
              // ポケモンの詳細情報を動的に生成して表示する
      //  Home出戻るように設定する
      const pokemonDetailHTML = `
    
      <p class="back">←Home</p>
      <h1 class="name">${pokemon.name}</h1>
      <table>
        <div class="categories">
        <thead>
        <tr>
          <th class="category">図鑑番号</th>
          <th class="category">高さ</th>
          <th class="category">重さ</th>
          <th class="category">特性</th>
        </tr>
        </thead>
        </div>

        <div class="contents">
        <tbody>
        <tr>
          <td class="content">${pokemon.no}</td>
          <td class="content">${pokemon.height}</td>
          <td class="content">${pokemon.weight}</td>
          <td class="content">${pokemon.abilities}</td>
        </tr>
        </tbody>
        </div>
      </table>
      

      <p class="description"> ${pokemon.description}</p>
      
    `;
    
    detailContents.innerHTML = pokemonDetailHTML;
//.を忘れると危ない
    const backbuton = document.querySelector(".back");
    console.log(backbuton)
    backbuton.addEventListener('click', () =>{
      const homeUrl = 'index.html';
      window.location.href = homeUrl;
    })
        
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  });
}}