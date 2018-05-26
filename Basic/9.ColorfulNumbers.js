function colorNumbers(count) {

    let htmlOutput = "<ul>\n";
    for (let i = 1; i <= count; i++) {

        let color = i % 2 === 0 ? "blue" : "green";

        htmlOutput += `  <li><span style='color:${color}'>${i}</span></li>\n`;

    }
    htmlOutput += "</ul>";
    console.log(htmlOutput);
}

colorNumbers(10);
document.body.innerHTML = nums(10);