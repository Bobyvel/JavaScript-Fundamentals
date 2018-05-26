function chessboard(size) {
    let html = '<div class="chessboard">\n';

    for (let i = 1; i <= size; i++) {
        html += ' <div>\n';
        color = i % 2 == 0 ? 'white' : 'black';

        for (let j = 1; j <= size; j++) {
            html += `  <span class="${color}"></span>\n`;
            color = (color === 'black') ? 'white' : 'black';
        }
        html += ' </div>\n';
    }

    html += '</div>';

    console.log(html);
}

chessboard(2);