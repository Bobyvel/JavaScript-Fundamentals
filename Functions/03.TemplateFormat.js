function quoz(input) {

    let html = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n';

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];

        html += `${drawQuestion(question)}`;
        html += `${drawAnswer(answer)}`;
    }

    function drawQuestion(question) {
        let html = '  <question>\n' + `    ${question}\n` + '  </question>\n';
        return html;
    }

    function drawAnswer(answer) {
        let html = '  <answer>\n' + `    ${answer}\n` + '  </answer>\n';
        return html;
    }

    html += '</quiz>';
    console.log(html);
}

quoz(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);