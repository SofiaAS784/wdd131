const productSelect = document.querySelector('select');
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

let count = 1;
products.forEach(product => {
    let productOption = document.createElement('option');
    productOption.textContent = product.name;
    productOption.value = count;
    productSelect.appendChild(productOption);
    count++;
});

let numReviews = Number(window.localStorage.getItem("numReviews")) || 0;
let reviewsDisplay = document.getElementByIdr('reviewsCount');

if (numReviews > 0) {
    reviewsDisplay.textContent = 'Number of reviews made in this session: ' + numReviews;
}

numReviews++;

localStorage.setItem("numReviews", numReviews);