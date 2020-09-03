function show_number_with_animation(i, j, rand_number) {
    let grid_cell = $('#grid_cell_' + i + '_' + j)
	grid_cell.css('background', get_number_background_color(board[i][j]));
	grid_cell.css('color', get_number_color(rand_number))
}

