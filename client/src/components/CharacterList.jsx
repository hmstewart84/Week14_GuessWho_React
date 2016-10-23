var React = require('react')
var Character = require('./Character.jsx')

var CharacterList = React.createClass({

  render: function(){
    var gameCharacter = this.props.characters.map(function(character){
      return(
        <div className="container">
        <div className = "box">
        <Character key={character.id} character={character}  />
        </div>
        </div>
        )
    });
    return (
      <div>
        {gameCharacter}  
      </div>
    );

  }
  
});

module.exports = CharacterList;