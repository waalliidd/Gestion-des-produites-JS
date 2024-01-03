    let title = document.getElementById('title');
    let price = document.getElementById('price');
    let taxes = document.getElementById('taxes');
    let discount = document.getElementById('discount');
    let total = document.getElementById('total');
    let count = document.getElementById('count');
    let ads = document.getElementById('ads');
    let category = document.getElementById('category');
    let submit = document.getElementById('submit');
    function getTotal() {
        if (price.value != '') {
            let result = (+price.value + +taxes.value + +ads.value) - +discount.value; total.innerHTML = result;
            total.style.background = '#040';
        } else {
            total.style.background = 'red';
        }
    };
    let dataPro;
    if (localStorage.product != null) {
        dataPro = JSON.parse(localStorage.product);
        console.log(dataPro, "this is datapro");
    } else {
        dataPro = [];
    }
    submit.onclick = function () {
        let newPro = {
            title: title.value,
            price: price.value,
            taxes: taxes.value,
            discount: discount.value,
            ads: ads.value,
            category: category.value
        };
        dataPro.push(newPro);
        localStorage.setItem('product', JSON.stringify(dataPro));
        clearData()
        showData()
    };
    function clearData() {
        title.value = '';
        price.value = '';
        taxes.value = '';
        ads.value = '';
        discount.value = '';
        category.value = '';
        total.innerHTML = '';
    };

    function showData() {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].category}</td>
                
            </tr>
        `;
    }
        document.getElementsByTagName('tbody').innerHTML = table;
        console.log(table);
}


