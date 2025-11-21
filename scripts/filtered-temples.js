const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10-12",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/6-Rome-Temple-2160338.jpg"
    },
    {
        templeName: "Córdoba Argentina",
        location: "Córdoba, Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436937-wallpaper.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11-15",
        area: 35546,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784290-wallpaper.jpg"
    },
    {
        templeName: "London England",
        location: "London, England",
        dedicated: "1958, September, 7-9",
        area: 42652,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-393730-wallpaper.jpg"
    },

];

createTempleCard(temples);

const allTemplesLink = document.querySelector('#home');
allTemplesLink.addEventListener('click', () => {
    createTempleCard(temples);
});
    
const oldTemplesLink = document.querySelector('#old');
oldTemplesLink.addEventListener('click', () => {
    let oldTemples = temples.filter((temple) => parseInt(temple.dedicated) < 1900);
    createTempleCard(oldTemples);
});

const newTemplesLink = document.querySelector('#new');
newTemplesLink.addEventListener('click', () => {
    let newTemples = temples.filter((temple) => parseInt(temple.dedicated) > 2000);
    createTempleCard(newTemples);
});

const largeTemplesLink = document.querySelector('#large');
largeTemplesLink.addEventListener('click', () => { 
    let largeTemples = temples.filter((temple) => temple.area > 90000);
    createTempleCard(largeTemples);
});

const smallTemplesLink = document.querySelector('#small');
smallTemplesLink.addEventListener('click', () => {
    let smallTemples = temples.filter((temple) => temple.area < 10000);
    createTempleCard(smallTemples);
});

function createTempleCard(filteredTemples) {
    document.querySelector(".gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        // The template
        const gallery = document.querySelector('.gallery');
        
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const location = document.createElement('span');
        const dedicated = document.createElement('span');
        const area = document.createElement('span');
        const photo = document.createElement('img');
        
        // The values
        name.textContent = temple.templeName;
        
        const locLabel = document.createElement('label');
        locLabel.textContent = "Location: ";
        const locData = document.createElement('p');
        locData.textContent = temple.location;
        
        const dedLabel = document.createElement('label');
        dedLabel.textContent = "Dedicated: ";
        const dedData = document.createElement('p');
        dedData.textContent = temple.dedicated;
        
        const areaLabel = document.createElement('label');
        areaLabel.textContent = "Size: ";
        const areaData = document.createElement('p');
        areaData.textContent = temple.area + " sq ft";
        
        photo.src = temple.imageUrl;
        photo.alt = temple.templeName + " Temple";
        photo.loading = "lazy";
        
        // Adding them to the html
        gallery.append(card);
        card.append(name, location, dedicated, area, photo);
        
        location.append(locLabel, locData);
        dedicated.append(dedLabel, dedData);
        area.append(areaLabel, areaData);
        
        card.appendChild(photo);
    });
};

