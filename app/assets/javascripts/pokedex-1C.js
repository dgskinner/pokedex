Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  newPokemon = new Pokedex.Models.Pokemon(attrs);
  var that = this;
  newPokemon.save({}, { 
    success: function() {
      that.pokes.add(newPokemon);
      that.addPokemonToList(newPokemon);
      
      callback(newPokemon);
    }  
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var pokeObj = $(event.target).serializeJSON();
  this.createPokemon(pokeObj, this.renderPokemonDetail.bind(this))
};

// // Cat.prototype.save = function () {
//   if (this.isNew()) {
//     $.ajax({
//       type: "POST",
//       url: this.urlRoot,
//       data: { cat: this.attributes },
//       success: (function (attributes) {
//         this.attributes = attributes;
//       }).bind(this)
//     })
//   } else {
//     $.ajax({
//       type: "PATCH",
//       url: this.url(),
//       data: { cat: this.attributes },
//       success: (function (attributes) {
//         this.attributes = attributes;
//       }).bind(this)
//     });
//   }
// // };