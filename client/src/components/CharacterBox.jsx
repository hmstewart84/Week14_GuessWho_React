var React =  require('react')
var CharacterList = require('./CharacterList.jsx')
var CharacterGuess = require('./CharacterGuess.jsx')


var CharacterBox = React.createClass({
  
  getInitialState: function(){
    return { characterList: this.props.characters, character:null }
  },
  

  makeGuess: function(questionId){
    var random = this.state.character
    var list = this.props.characters    
     for(var i in list){
      if (list[i].gender==="woman"){
        var abc = list[i]
        abc.img = "./images/wrong.jpg"
        this.setState({abc: abc})
      }
     }

  },
  startGame: function(){
   var random = this.props.characters[Math.floor(Math.random() * this.props.characters.length)];
    this.setState({character: random})
    // console.log(this.state.character)

  },
 

  render: function(){
    
    return(
      <div>
        <CharacterList characters={this.props.characters}></CharacterList>
        <CharacterGuess questions={this.props.questions} makeGuess={this.makeGuess} />
    </div>
    )
  }
})

module.exports = CharacterBox;