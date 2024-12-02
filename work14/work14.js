

fetchData();


async function fetchData(){


   try {


         const pokimonname=document.getElementById("pokemonname").value.toLowerCase();
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonname}`);


      if (!res.ok) {
         throw new Error("could not fetch response");
      }
         const data = await res.json();
         const pokispirite=data.sprites.front_default;
         const pokini=document.getElementById("poki")

         pokini.src = pokispirite;
         pokini.style.display="block";
      }
      catch (error) {
         console.error(error);
      }



}
