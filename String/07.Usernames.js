function extractUsernames(inputEmails) {

    let results = [];

    for (let email of inputEmails) {

        let [alias, domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(dom => username += dom[0]);
        results.push(username);
    }
    console.log(results.join(', '));
}
extractUsernames(['pesho@gmail.com', 'tod_or@mail.dir.bg']);