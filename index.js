// ✅ What is the DOM?

	// Chrome Dev Tools

// ✅ Creating / Reading DOM Elements

    // .createElement() => creates one DOM element
		const ol = document.createElement("ol")
		const li = document.createElement("li")
	// .querySelector() => returns the first matching DOM element
		const h1 = document.querySelector("h1")
		const h2 = document.querySelector("div#header h2")
		const firstLi = document.querySelector(".list-items")
	// .querySelectorAll() => returns an array of matching DOM elements
		const liss = document.querySelectorAll("li.list-items")
	// .getElementById() => returns the DOM element with matching Id
		const div = document.getElementById("lecture-goals")
	// .getElementsByClassName() => returns an array-like of DOM elements with matching Class
		const lis = document.getElementsByClassName("list-items")
	// .getElementsByTagName() => when is this especially useful?
        const uls = document.getElementsByTagName("ul")
// ✅ Updating / Deleting DOM Elements
        
	// .append
		// h2.append(ol, "<div><h2>Hello</h2></div>")
	//.appendChild
		// h2.appendChild(ol)
	//.insertAdjacentElement
		h2.insertAdjacentElement("beforeend", ol)
	// .remove()
		// ol.remove()

// ✅ .innerHTML vs. .innerText vs. .textContent

  	// .innerHTML => if you want to insert HTML within a DOM element
		console.log(div.innerHTML)
		ol.innerHTML = "<div><h2>Hello</h2></div>"
		// ol.innerHTML = ""
	// .innerText => if you only want to insert text, shows only human-readable elements
		console.log(ol.innerText, "---", ol.textContent)
		ol.innerText = "Something different"
		// .textContent => if you only want to insert text, shows formatting of elements
		ol.textContent
// -------------------------------------------

// console.log("------------------------");
// console.log("⬇️ Break Out Activites ⬇️");
// console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
// console.log("💡 Use console.log() To Check Answers 💡");
// console.log("------------------------");

// 🚧 Break Out Activity 1: Creating / Reading / Updating DOM Elements

  // 🚨 Comment out any conflicting code above before proceeding.

		// array of pokemon objects
		const pokemon = [
			{
				id: 1,
				name: "Bulbasaur",
				img: "./images/bulbasaur.png",
				likes: 4,
			},
			{
				id: 2,
				name: "Ivysaur",
				img: "./images/ivysaur.png",
				likes: 21,
			},
			{
				id: 3,
				name: "Venusaur",
				img: "./images/venasaur.png",
				likes: 7,
			},
			{
				id: 4,
				name: "Charmander",
				img: "./images/charmander.png",
				likes: 20,
			},
			{
				id: 5,
				name: "Charmeleon",
				img: "./images/charmeleon.png",
				likes: 11,
			},
		];

		// container to store DOM element with ID of "poke-container" => <div id="poke-container"></div>
		const pokeContainer = document.getElementById("poke-container");

  // 1️⃣ Given "pokemon" and "pokeContainer" above, create a function (renderPokemon) that:

	//  ✔️ Accepts a single "pokemon" object
 
 	//  ✔️ Creates a "div" element to contain information about each Pokemon and stores the "div" in a variable (pokeCard)
		//	Assign pokeCard a unique ID with the Pokemon's "id" prepended by "poke-" (i.e., "poke-1" for Bulbasaur)
		//	Assign pokeCard a className of "poke-card"
	
	//  ✔️ Creates an "img" element for each Pokemon and stores the "img" in a variable (pokeImg)
		//	Assign pokeImg a source (src) linking to the Pokemon's image
		// 	Assign pokeImg a unique alt with the Pokemon's name followed by " image" (i.e., "bulbasaur image")
	
	//	✔️ Creates an "h3" element for each Pokemon and stores the element in a variable (pokeName)
		// 	Use textContent() to fill in the heading with the Pokemon's name

	//	✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"
		// 	Use append() as necessary

	// 	💡 Use Chrome Dev Tools to view changes being made to the DOM

	// 	💡 Take a look at "styles.css" to see how the DOM Elements we're building out correspond to CSS class and ID selectors.

	// 	✨ BONUS: Try to reduce redudancy (DRY Principle) in your code through the use of JS functions and variables.





	// ✅ Check Answer: 
	// function init() {
	// 	pokemon.forEach(renderPokemon);
	// }

	// init();