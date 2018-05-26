function print(array) {
let delimeter = array.pop();

    console.log(array.join(delimeter));
}

print(['One', 'Two', 'Three', 'Four', 'Five', '-']);