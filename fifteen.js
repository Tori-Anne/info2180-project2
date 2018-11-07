
// set image as background-image of each puzzle piece
function setPuzzlePieces(){
    var tiles = document.getElementById("puzzlearea");
    var puzzlePiece = tiles.getElementsByTagName("div");
    for (var i = 0; i < puzzlePiece.length - 1; i++){
        puzzlePiece[i].addClassName("puzzlepiece");
        puzzlePiece[i].style.backgroundImage = "url('background.jpg')";
		puzzlePiece[i].style.backgroundSize = "400px 400px";
        puzzlePiece[i].style.backgroundPosition = "-304px 0px";
    }
}


// determines whether a given square can move or not
function isMovable(){
	var tiles = document.getElementById("puzzlearea");
    var puzzlePiece = tiles.getElementsByTagName("div");
    for (var i = 0; i < puzzlePiece.length - 1; i++){
		if (puzzlePiece[i].innerHTML != ""){
			puzzlePiece[i].addEventListener("mouseover", function(){
                puzzlePiece[i].addClassName("movablepiece");
		    }
		}
	}
}



// when the shuffle button is clicked, the tiles of the puzzle are randomized
function shuffleTiles(){
	var shuffleButton = document.getElementById("shufflebutton");
	shuffleButton.addEventListener("click", function(){
		
	
}