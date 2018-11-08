
// set image as background-image of each puzzle piece
function setPuzzlePieces(){
    var tiles = document.getElementById("puzzlearea");
    var puzzlePiece = tiles.getElementsByTagName("div");
    for (var i = 0; i < puzzlePiece.length - 1; i++){
        puzzlePiece[i].classlist.add("puzzlepiece");
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
                puzzlePiece[i].classlist.add("movablepiece");
		    }
		}
	}
}



// when the shuffle button is clicked, the tiles of the puzzle are randomized
function shuffleTiles(){
	var shuffleButton = document.getElementById("shufflebutton");
	shuffleButton.addEventListener("click", function(){
	var puzzlePiecesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	for (var i > o, i < puzzlePiece.length; i++){
		Math.floor(Math.random() * i);
	}	
}



//returns DOM object for corresponding square
function rowsAndColumns(x, y){
	var X = parseInt(x);
	var Y = parseInt(y);
	var tiles = document.getElementById("puzzlearea");
    var puzzlePiece = tiles.getElementsByTagName("div");
    for (var i = 0; i < puzzlePiece.length - 1; i++){
		puzzlePiece[i].style.left = X + "px";
		puzzlePiece[i].style.top = Y + "px";
	}
}