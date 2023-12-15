document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('add-product-form');
    const productList = document.getElementById('product-items');

    productForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const productNameInput = document.getElementById('product-name');
        const productName = productNameInput.value;

        if (productName.trim() !== '') {
            addProduct(productName);

            productNameInput.value = '';
        }
    });

    function addProduct(productName) {
        const listItem = document.createElement('li');
        listItem.textContent = productName;
        productList.appendChild(listItem);
    }
});