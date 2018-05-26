function table(number) {

    let code = '<table border="1">\n' + '<tr><th>x</th>';
    for (let i = 1; i <= number; i++) {
        code += `<th>${i}</th>`;
    }
    code += '</tr>\n';

    for (let i = 1; i <= number; i++) {
        code += `<tr><th>${i}</th>`;
        for (let j = 1; j <= number; j++) {
            code += `<td>${i * j}</td>`;
        }
        code += '</tr>\n';
    }
    code += '</table>';
    console.log(code);
}

table(5);