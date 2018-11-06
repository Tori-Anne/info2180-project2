
// set image as background-image of each puzzle piece
function setPuzzlePieces(){
    var tiles = document.getElementById("puzzlearea");
    var puzzlePiece = tiles.getElementsByTagName("div");
    for (var i = 0; i < puzzlePiece.length - 1; i++){
        puzzlePiece[i].addClassName("puzzlepiece");
        puzzlePiece[i].style.backgroundImage = "url('background.jpg')";
        puzzlePiece[i].style.backgroundPosition = "-304px 0px";
    }
}