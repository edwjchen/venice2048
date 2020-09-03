function get_number_background_color(number) {
    switch (number) {
        case 2: return 'url(https://media-exp1.licdn.com/dms/image/C5603AQGE2lt6XL5HgQ/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=1wPgVkyGEMdjVCi5s-sMnEhtIQ8AFpBVYafTIK3l0XQ)'; break;
        case 4: return 'url(https://media-exp1.licdn.com/dms/image/C4D03AQHgjJU4553MQA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=gRB1g_MzjXjDAGV6tEYuC4qXNWLhblu_aiVMKNb5y14)'; break;
        case 8: return 'url(https://media-exp1.licdn.com/dms/image/C5603AQGgsqdY8wAgsA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=AZPuY7ckuniuFqYWrs1OL-sCymhRvbyyocp-J898q74)'; break;
        case 16: return 'url(https://media-exp1.licdn.com/dms/image/C5603AQHvQVj9meBGeA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=M25WS1OyRP6WLDYNPjWm16hnYLBJKmaP8bdllRlpGSA)'; break;
        case 32: return 'url(https://media-exp1.licdn.com/dms/image/C5603AQF0bw1rbMm0tQ/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=zSlCEW-0uAXByPM3-Rlq6rY0JSU_XtvFFlXqf-jd0Uo)'; break;
        case 64: return 'url(https://media-exp1.licdn.com/dms/image/C4E03AQFI8I6Lq__NHA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=Tl-j0849AmQs1TGi20Fhy_pOK1wHR2JviLEDuhkVrRA)'; break;
        case 128: return 'url(https://media-exp1.licdn.com/dms/image/C4D03AQEXOuKoPBzrWA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=cD_Nn1OimpExZNK1_ttZoWh0YlcsSeKmUqyksdqwhsw)'; break;
        case 256: return 'url(https://media-exp1.licdn.com/dms/image/C4D03AQF-hkp4W2_A6w/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=2wCwwv1chI1vr_nFoFO9lv0wmcD8b3EZ3KE5E5DEFeg)'; break;
        case 512: return 'url(https://media-exp1.licdn.com/dms/image/C4D03AQEEgyakiKbCiQ/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=IsF9UJ5hw9RzTx9E6qG9VRTSorUTynoRMhhNmlH6oww)'; break;
        case 1024: return 'url(https://media-exp1.licdn.com/dms/image/C4D03AQGy-Wge7RaQ1w/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=ZMG1AQzacqYz7MD_ABINjDdA_xkXSJifY5OGDyTOTvM)'; break;
        case 2048: return 'url(https://media-exp1.licdn.com/dms/image/C5103AQFAvE2hv9QVug/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=Ps5kRHAV2fdCTm4ntx3X5DJT4ctdjnLETRkbJRvLvsg)'; break;
        case 4096: return 'url(https://media-exp1.licdn.com/dms/image/C4D03AQF1QDx3CKYPWw/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=jy9VKBqD0Hb0dmLcqM4MinXkgQW36XESgte4dErcp4o)'; break;
        case 8192: return 'url(https://media-exp1.licdn.com/dms/image/C5603AQEhqYYmBwHUpw/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=qona1xcVha-0wDkruNrj7hN-8wR-pWwmRuy-UOzBBUU)'; break;
    }
    return 'black';
}

function get_number_color(number) {
    if (number <= 4)
        return '#776e65';
    return 'white';
}

function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

function can_move_left(board){
	for (var i=0; i<4; i++){
		for (var j=1; j<4; j++){
			if (board[i][j] != 0){
				if (board[i][j-1] == 0 || board[i][j] == board[i][j-1]){
					return true;
				}
			}
		}
	}
	return false;
}

function can_move_right(board) {
	for (var i=0; i<4; i++){
		for (var j=2; j>=0; j--){
			if (board[i][j] != 0){
				if (board[i][j+1] == 0 || board[i][j] == board[i][j+1]){
					return true;
				}
			}
		}
	}
	return false;
}

function can_move_up(board) {
	for (var j=0; j<4; j++){
		for (var i=1; i<4; i++){
			if (board[i][j] != 0){
				if (board[i-1][j] == 0 || board[i][j] == board[i-1][j]) {
					return true;
				}
			}
		}
	}
	return false;
}

function can_move_down(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function nomove(board){
	if (can_move_down() || can_move_left() || can_move_right() || can_move_up()){
		return false;
	}
	return true;
}

function shift_array(arr, len) {
    var res = 0
    for (var i = 0; i < len; i++) {
        for (var j = i+1; j < len; j++) {
            if (arr[i] == arr[j] && arr[i] != 0) {
                arr[i] *= 2
                arr[j] = 0
                res += arr[i]
                break
            } else if (arr[i] == 0 && arr[j] != 0) {
                arr[i] = arr[j]
                arr[j] = 0
            } else if (arr[j] != 0) {
                break
            }
        }
    }
    return [arr, res]
}

function rotate_right(matrix) {
    const n = matrix.length;
    const x = Math.floor(n/ 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
        k = matrix[i][j];
        matrix[i][j] = matrix[y - j][i];
        matrix[y - j][i] = matrix[y - i][y - j];
        matrix[y - i][y - j] = matrix[j][y - i]
        matrix[j][y - i] = k
        }
    }
    return matrix;
}

function update_score(score) {
	$('.score').html("<a href=\"index.html\">Score: "+score+"</a>");
}
