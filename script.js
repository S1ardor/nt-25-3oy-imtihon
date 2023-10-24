// * * * 1-mashq * * * //
// let arr = []
// let sum = 0
// for (let i = 0; i < 5; i++) {
//     const numbers = +prompt('son kriting');
//     if (!numbers && numbers !== 0) {
//         break;
//     } else {
//         arr.push(numbers)
//         sum = sum + numbers;
//     }
// }
// console.log(arr);
// console.log(sum);

// * * * 2-misol * * * //
// let jazzToBlues = ['Jazz', 'Blues'];
// console.log(jazzToBlues);
// jazzToBlues.push('Rock-n-roll');
// console.log(jazzToBlues);
// jazzToBlues.splice(1, 1, "Classic")
// console.log(jazzToBlues);
// jazzToBlues.shift();
// console.log(jazzToBlues);
// jazzToBlues.unshift('Rap', 'Reggae');
// console.log(jazzToBlues);

// * * * 3-mashq * * * //
// let salaries = {
//     "Bob": 1700,
//     "John": 6000,
//     "Evelina": 1200
// }
// for (const newSalarial in salaries)
//     let = newSalarial; {
//     const newSalarial = Object.values(salaries);
//     console.log(newSalarial);
//     let amount = newSalarial.reduce((a, c) => a + c);
//     console.log(amount);
// }

// * * * 4-mashq * * * //
// const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let coupleSummarized = 0;
// let oddsummarized = 0;
// newArray.forEach((element) => {
//     if (element % 2 == 0) {
//         coupleSummarized += element
//     } else if (element % 2 != 0) {
//         oddsummarized += element
//     }
// })
// console.log([oddsummarized]);
// console.log([coupleSummarized]);

// * * * 5-mashq * * * //
// const stayedNumbes = [1, 2, 4, 6, 7, 9, 11];
// let arr = [];
// let nawArr = []
// const maximum = stayedNumbes.reduce((a, c) => Math.max(a, c));
// const minimum = stayedNumbes.reduce((a, c) => Math.min(a, c));
// for (let a = minimum; a <= maximum; a++) {
//     arr.push(a);
// }
// arr.forEach(element => {
//     if (stayedNumbes.includes(element) == 0)
//         nawArr.push(element);
// });
// console.log(stayedNumbes);
// console.log(nawArr);




// * * * 6-mashq Figma * * * //
const pokemons = document.querySelector('.pokemon');
const durugs = document.querySelector('.drug')
const pokemonToObjects = [

    {
        name: 'Bokemon',
        drugs: 'Grass, Poison',
        number: {
            kg: 6.9,
            age: 99,
        },
        image: 'images/pokemon-5.png'
    },
    {
        name: 'Pokemon',
        drugs: 'Grass, Poison',
        number: {
            kg: 4.7,
            age: 68
        },
        image: 'images/pokemon-5.png'
    },
    {
        name: 'Aokemon',
        drugs: 'Grass, Poison',
        number: {
            kg: 6.8,
            age: 98
        },
        image: 'images/pokemon-4.webp'
    },
    {
        name: 'Gokemon',
        drugs: 'Grass, Poison',
        number: {
            kg: 9.3,
            age: 59
        },
        image: 'images/pokemon-5.png'
    },
    {
        name: 'Okemon',
        drugs: 'Grass, Poison',
        number: {
            kg: 7.5,
            age: 39
        },
        image: 'images/pokemon-4.webp'
    },
    {
        name: 'Rokemon',
        drugs: 'Grass, Poison',
        number: {
            kg: 5.3,
            age: 84
        },
        image: 'images/pokemon-5.png'
    },
    {
        name: 'Dokemon',
        drugs: 'Grass, Poison',
        number: {
            kg: 9.6,
            age: 69
        },
        image: 'images/pokemon-4.webp'
    },
    {
        name: 'Kemon',
        drugs: 'Grass, Poison',
        number: {
            kg: 6.8,
            age: 98
        },
        image: 'images/pokemon-4.webp'
    },

];

function updatePokemon() {
    pokemons.innerHTML = '';

    console.log();
    pokemonToObjects.forEach((poken) => {

        const columns = document.createElement('div');
        columns.classList.add('col-lg-4');

        const poock = document.createElement('div');
        poock.classList.add('poock');
        columns.appendChild(poock);

        const img = document.createElement('img');
        img.src = poken.image;
        img.alt = poken.name;
        poock.appendChild(img);

        const name = document.createElement('h4');
        name.textContent = poken.name;
        columns.appendChild(name);

        const drugs = document.createElement('h5');
        drugs.textContent = poken.drugs;
        columns.appendChild(drugs);


        const product_options = document.createElement('div');
        product_options.className = "product_options"

        const number = document.createElement('h6');
        number.textContent = `${poken.number.kg} kg`;
        product_options.appendChild(number);

        const num = document.createElement('h6');
        num.textContent = `${poken.number.age} age`;
        product_options.appendChild(num);

        columns.appendChild(product_options)
        pokemons.appendChild(columns)
    });
}

updatePokemon()

const buttonatoz = document.querySelector('.atoz');
const buttonztoa = document.querySelector('.ztoa');
const buttonlowtohigh = document.querySelector('.lowtohigh');
const buttonhightoLow = document.querySelector('.hightoLow');

if (buttonatoz) {
    buttonatoz.addEventListener('click', () => {
        pokemonToObjects.sort((a, c) => a.name.localeCompare(c.name))
        updatePokemon()
    })
};

if (buttonztoa) {
    buttonztoa.addEventListener('click', () => {
        pokemonToObjects.sort((a, c) => c.name.localeCompare(a.name))
        updatePokemon()
    })
};

if (buttonlowtohigh) {
    buttonlowtohigh.addEventListener('click', () => {
        pokemonToObjects.sort((a, b) => a.number.kg - b.number.kg)
        updatePokemon();
    })
};

if (buttonhightoLow) {
    buttonhightoLow.addEventListener('click', () => {
        pokemonToObjects.sort((a, b) => a.number.age - b.number.age)
        updatePokemon();
    })
};