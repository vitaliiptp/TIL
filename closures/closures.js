const message = 'The British are coming.';
function sayMessage(){
    alert(message); // Here we have access to message,
    // even though it's declared outside this function!
}

// Function for getting the id of a dom element,
// giving it a new, unique id if it doesn't have an id yet
const getUniqueId = (() => {
    let nextGeneratedId = 0;
    return element => {
        if (!element.id) {
            element.id = `generated-uid-${nextGeneratedId}`;
            nextGeneratedId++;
        }
        return element.id;
    };
})();