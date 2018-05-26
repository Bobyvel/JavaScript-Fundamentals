function calendar([day, month, year]) {

    // Print the calendar table header
    let calendar = '<table>\n';
    calendar += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';
    month--; // months in Date() are [0...11], not [1...12]

    // Print the days of the previous month
    let firstDayCurrentMonth = new Date(year, month, 1);
    let previousDaysCount = firstDayCurrentMonth.getDay();
    let lastDayPreviouMonth = new Date(year, month, 0).getDate();

    if (previousDaysCount > 0) {
        calendar += '<tr>';
        for (let i = previousDaysCount; i > 0; i--) {
            calendar += `<td class="prev-month">${lastDayPreviouMonth + 1 - i}</td>`;
        }
    }

    // Print the days of the current month
    let currentMountCount = new Date(year, month + 1, 0).getDate();
    let weekCount = previousDaysCount;

    for (let i = 1; i <= currentMountCount; i++) {
        if (weekCount === 0) {
            calendar += '<tr>';
        }
        if (i === day) {
            calendar += `<td class="today">${i}</td>`;
            weekCount++;
        } else {
            calendar += `<td>${i}</td>`;
            weekCount++;
        }
        if (weekCount === 7) {
            calendar += '</tr>\n';
            weekCount = 0;
        }
    }


    // Print the days of the next month
    let lastDayCurrentMonth = new Date(year, month + 1, 0).getDay();

    if (lastDayCurrentMonth < 6) {
        for (let i = 1; i < 7 - lastDayCurrentMonth; i++) {
            calendar += `<td class="next-month">${i}</td>`;
        }
        calendar += '</tr>\n';
    }

    calendar += '</table>';
    console.log(calendar);
}

//calendar([24, 12, 2012]);
//calendar([4, 9, 2016]);
calendar([1, 4, 2016]);