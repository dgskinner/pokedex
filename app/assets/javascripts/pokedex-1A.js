Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  $li = $("<li> Name: " + pokemon.attributes.name + " type: " + pokemon.attributes.poke_type + "</li>");
  $li.addClass("poke-list-item");
  $li.data("id", pokemon.id);
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function (callback) {
  var that = this
  this.pokes.fetch({
    success: function (resp) {
      resp.each( function(pokemon) {
        that.addPokemonToList(pokemon);
      });
    }
  });
};
