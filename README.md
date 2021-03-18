
<h1>Pokedex Task <img src="https://veekun.com/dex/media/pokemon/global-link/7.png" height="50px"/></h1>

In this task you will build your own pokédex!

The functionality will be similar to this [demo](https://murmuring-cove-95500.herokuapp.com/)

### Setup:

Fork this boilerplate

OR

- Create a new repository
- Create two different directories in you repository: `client` and `backend`.

  - `client` will contain your React app
  - `backend` will contain you express app

  Init both as `npm` repositories (using `npm i -y`)

### Server Requirements:

[pokeAPI](https://pokeapi.co/) is where you will fetch your data from. Use [this](https://pokeapi.co/docs/v2#pokemon-section) part of the documentation for help. 

In order to reduce data size and complexity and avoid CORS problems, you are going to build your own internal API.

Your client will communicate with your API, which will communicate with the pokéAPI. You are required to modify the new response to your client. Match it to the provided example. 

**Required endpoints:**

- Use [axios](https://www.npmjs.com/package/axios) to fetch the pokeAPI
- Should have a `GET` endpoint `/api/pokemon/:name` to get pokémon details by name
- Should have a `GET` endpoint `/api/type/:name` to get type details by name
- Should have a `GET` endpoint `/api/collection` to get all pokémons in your collection
- Should have a `POST` endpoint `/api/collection/catch` to add a new pokémon to your collection
- Should have a `DELETE` endpoint `/api/collection/release/:id` to remove a pokémon from your collection

Bonus:

- Support fetching by name

### Client Requirements:

To display all pokémons data to the user, we'll build a react app for that! (Here is the [example](https://murmuring-cove-95500.herokuapp.com/))

The react app should follow these requirements

- Use [axios](https://www.npmjs.com/package/axios) to fetch your API
- I can search pokémons and get details using or `name`
- I can see searched pokémon's name, height, weight and image on screen.
  I should also see a list of the pokémon's types. ("fire", "grass", "poison" etc...)
- On clicking one of the pokémon's types, I should also see a list containing the names of all the pokémons of this type.

  For example:

  Pokémon "Bulbasaur" is from types "grass" and "poison". Clicking "poison" will show me a list of all the poison pokémons, and clicking "grass" will show me a list of all the grass pokémons.

- Clicking a name on the list should switch the view to show the clicked pokémon.

  For example:

  When viewing pikachu and clicking pichu, the view should re-render and show pichu's details. Should act the same as searching for "pichu".

- Pokémon's image changes from front to back when hovering over the image.
- I can "catch" a pokémon and add it to my collection by clicking the catch button. Caught pokémons should be marked and have a "release" option instead.
- Alert `404` responds from server with a special message.

Bonus:

- Add pictures to all pokémons in the type list
- Display your collection

### Submitting:

- Deploy your app to heroku
- Add a link to the deployment to your repo
- Submit a link to your github repo to the CRM (each pair submits the **same** link)

