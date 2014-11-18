Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $detailDiv = $("<div></div>").addClass(".detail");
  $detailDiv.append($("<img src=" + pokemon.attributes.image_url + ">"));
  for (attr in pokemon.attributes) {
    if (attr !== "image_url") {
      $detailDiv.append($("<h4>" + attr + ": " + pokemon.attributes[attr] + "</h4>"))
    }
  }
  this.$pokeDetail.append($detailDiv);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  $id = $(event.target).data("id");
  pokemon = this.pokes.get($id);
  this.renderPokemonDetail(pokemon);
};
