var board = new Array();
var score = 0;
var has_conflicted = new Array();
var startx = 0;
var starty = 0;
var endx = 0;
var endy = 0;
var success_string = 'Success';
var gameover_string = 'GameOver';

$(document).ready(function(){
	new_game();
});

function new_game()	{
	//initialize game
	init();
	//generate two random number
	generate_one_number();
	generate_one_number();
}

function init() {
	for (var i=0; i<4; i++) {
        board[i] = new Array();
        has_conflicted[i] = new Array();
        for (var j=0; j<4; j++) {
            board[i][j] = 0;
            has_conflicted[i][j] = false;
        }
    }
    score = 0;
	update_board_view();
}

function update_board_view() {
	for (var i = 0; i < 4; i++){
		for (var j = 0; j < 4; j++){
            var grid_cell = $('#grid_cell_' + i + '_' + j);
			if (board[i][j] == 0) {
                grid_cell.css('background-color', '#ccc0b3');
                grid_cell.css('background-image', '');
			} else {
				grid_cell.css('background-image', get_number_background_color(board[i][j]));
				grid_cell.css('color', get_number_color(board[i][j]));
			}
			has_conflicted[i][j] = false;
		}
    }
}

function generate_one_number() {
	if (nospace(board)) {
		return false;
    }

    spaces = []
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                spaces.push([i,j])
            }
        }
    }
    
	//random location
    var loc = parseInt(Math.floor(Math.random() * spaces.length));
    randx = spaces[loc][0];
    randy = spaces[loc][1];

    var rand_number = Math.random() < 0.5 ? 2 : 4;

	board[randx][randy] = rand_number;
	show_number_with_animation(randx, randy, rand_number);
	return true;
}

var fired = false;
$(document).keydown(function(event){
    if (fired) {
        return
    }
	//if the game is won
	if ($('#score').text() == success_string){
		new_game();
		return;
	}
	switch(event.keyCode) {
		//left
		case 37: 
			event.preventDefault();
			if (move_left()){
				setTimeout('generate_one_number()', 210);
				setTimeout('is_gameover()', 300);
			}
			break;
		case 38: //up
			event.preventDefault();
			if (move_up()){
				setTimeout('generate_one_number()', 210);
				setTimeout('is_gameover()', 300);
            }
            break;
		case 39: //right
            event.preventDefault();
            if (move_right()) {
                setTimeout('generate_one_number()', 210);
                setTimeout('is_gameover()', 300);
            }
            break;
        case 40: //down
            event.preventDefault();
            if (move_down()) {
                setTimeout('generate_one_number()', 210);
                setTimeout('is_gameover()', 300);
            }
            break;
        default:
            break;
    }
});

$(document).keyup(function(event) {
    fired = false;
})


//mobile touch
document.addEventListener('touchstart', function(event) {
	startx = event.touches[0].pageX;
	starty = event.touches[0].pageY;
});

document.addEventListener('touchmove', function(event) {
	event.preventDefault();
});

document.addEventListener('touchend', function(event) {
    endx = event.changedTouches[0].pageX;
    endy = event.changedTouches[0].pageY;

    var deltax = endx - startx;
    var deltay = endy - starty;
    if (Math.abs(deltax) < 0.3 * document_width && Math.abs(deltay) < 0.3 * document_width) {
        return;
    }
    if ($('#score').text() == success_string) {
        new_game();
        return;
    }
    //x
    if (Math.abs(deltax) >= Math.abs(deltay)) {
        if (deltax > 0) {
            //move right
            if (move_right()) {
                setTimeout('generate_one_number()', 210);
                setTimeout('is_gameover()', 300);
            }
        } else {
            //move left
            if (move_left()) {
                setTimeout('generate_one_number()', 210);
                setTimeout('is_gameover()', 300);
            }
        }
    } else {    //y
        if (deltay > 0) {
            //move down
            if (move_down()) {
                setTimeout('generate_one_number()', 210);
                setTimeout('is_gameover()', 300);
            }
        } else {
            //move up
            if (move_up()) {
                setTimeout('generate_one_number()', 210);
                setTimeout('is_gameover()', 300);
            }
        }
    }
});

//move left
function move_left() {
	if (!can_move_left(board)) {
		return false;
    }
    board = rotate_right(board)
    var res = move_up()
    board = rotate_right(board)
    board = rotate_right(board)
    board = rotate_right(board)

    setTimeout('update_board_view()', 200)
	return res;
}
//move right
function move_right() {
    if (!can_move_right(board)) {
        return false;
    }
    board = rotate_right(board)
    board = rotate_right(board)
    board = rotate_right(board)
    var res = move_up()
    board = rotate_right(board)
 
    setTimeout('update_board_view()', 200)
    return res;
}

//向上移动
function move_up() {
    if (!can_move_up(board)) {
        return false;
    }
    //move up
    for (var j = 0; j < 4; j++) {
        var arr = []
        for (var i = 0; i < 4; i++) {
            arr.push(board[i][j])
        }
        var res = shift_array(arr, 4)
        score += res[1]
        for (var i = 0; i < 4; i++) {
            board[i][j] = res[0][i]
        }
    }
    setTimeout('update_board_view()', 200)
    setTimeout('update_score('+score+')', 200)
    return true;
}

//move down
function move_down() {
    if (!can_move_down(board)) {
        return false;
    }
    board = rotate_right(board)
    board = rotate_right(board)
    var res = move_up()
    board = rotate_right(board)
    board = rotate_right(board)

    setTimeout('update_board_view()', 200)
    return res;    
}

function is_gameover(){
	for (var i=0; i<4; i++){
		for (var j=0; j<4; j++){
			if (board[i][j] == 2048) {
				update_score(success_string);
			}
			return;
		}
	}
}

function gameover() {
	update_score(gameover_string);
}