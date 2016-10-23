var React = require('react');
var ReactDOM = require('react-dom');
var CharacterBox = require('./components/CharacterBox.jsx')

var characters = 
[{id: 1, name: "Charlie", img: "/images/Charlie.jpg", gender:"man", tattoo: false, glasses: false}, 
{id: 2, name: "Dee", img:"./images/Dee.jpg", gender: "woman", tattoo: false, glasses: false},
{id: 3, name:"Dennis", img:"./images/Dennis.jpg", gender: "man", tattoo: false, glasses: false}, 
{id: 4, name:"Frank", img:"./images/Frank.jpg", gender:"man", tattoo: false, glasses: true}, 
{id: 5, name: "Mac", img:"./images/Mac.jpg", gender:"man", tattoo: true, glasses: false}]

var questions = 
[{id: 1, question:"Does this character have glasses?"},
{id: 2, question:"Does this character have a tattoo?"}, 
{id: 3, question: "Is this character a woman?"}]



window.onload = function(){
  ReactDOM.render(
     <CharacterBox questions={questions} characters={characters}/>,
    document.getElementById('app')
  );
}