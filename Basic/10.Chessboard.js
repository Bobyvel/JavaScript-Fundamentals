function chessboard(size) {
    let html = '<div class="chessboard">\n';
    let color = 'black';
    for (let i = 1; i <= size; i++) {
        html += ' <div>\n';

        for (let j = 1; j <= size; j++) {
            html += `  <span class="${color}"></span>\n`;
            color = (color === 'black') ? 'white' : 'black';

            if (size % 2 == 0 && j == size){
                color = (color === 'black') ? 'white' : 'black';
            }
        }
        html += ' </div>\n';
    }

    html += '</div>';

    console.log(html);
}

chessboard(2);