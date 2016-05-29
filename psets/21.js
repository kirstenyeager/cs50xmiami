/*
The Recipe Card

Never forget another recipe!

- Create an object to hold information on your favorite recipe. It should have
  properties for title (a string), servings (a number),
  and ingredients (an array of strings).

- On separate lines (one console.log statement for each), log the recipe
  information so it looks like:
    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa
*/

// write your solution here...
// funtion recipe (Title, Serves, Ingredients) {
//   this.Title = Title;
//   this.Serves = Serves;
//   this.Ingredients = Ingredients;
// }

var recipe =  {
  Title:"Mole",
  Serves: 2,
  Ingredients:["rice", "beef", "cumin", "onions"]
}

console.log(recipe.Title  + "\nServes: " + recipe.Serves + "\nIngredients: \n" + recipe.Ingredients[1] +"\n" + recipe.Ingredients[2] +"\n" + recipe.Ingredients[3]);
