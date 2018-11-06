
// set image as background-image of each puzzle piece
function setBackgroundImage(){
    tiles = document.getElementById("puzzlearea").innerHTML;
    for (var i = 0; i < tiles.length - 1; i++){
        tiles[i].addClassName("puzzlepiece");
        tiles[i].style.backgroundImage = "url('background.jpg')";
		//background position
    }
}
	