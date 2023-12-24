document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('addItemButton');
    const itemList = document.getElementById('itemList');
    const inputField = document.getElementById('inputField');
    const messageElement = document.getElementById('message');


    addItemButton.addEventListener('click', function() {
        addItem();
        showMessage('Item added successfully.');
    });

    function addItem() {
        const value = inputField.value.trim();

        if (value !== '') {
        const newItem = document.createElement('div');
        newItem.classList.add('item');

        const itemText = document.createElement('input');
        itemText.value = value;
        itemText.disabled = true;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            itemList.removeChild(newItem);
            showMessage('Item deleted successfully.');
        };

        newItem.appendChild(itemText);
        newItem.appendChild(deleteButton);
        itemList.appendChild(newItem);

        inputField.value = '';
        }
    }
    function showMessage(message) {
        messageElement.textContent = message;
        setTimeout(function() {
            messageElement.textContent = '';
        }, 2000); // Display message for 2 seconds
    }
});