var React  = require('react')

var Character = React.createClass({

  render: function(){

    return(
      <div>
        <h2>
          {this.props.character.name}
        </h2>
        <h2>
          <img src={this.props.character.img}/>
        </h2>
      </div>
      )
  }
  
})




module.exports = Character;