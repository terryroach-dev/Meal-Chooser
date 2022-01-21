const meals = [
    {
        title: "breakfast calzones",
        book: "comfort food",
        page: 32,
        type: "breakfast"
    },
    {
        title: "pizza-toppped omlette",
        book: "comfort food",
        page: 37,
        type: "breakfast"
    },
    {
        title: "creamy lemon chicken",
        book: "comfort food",
        page: 46,
        type: "tea"
    },
    {
        title: "kung pao pork",
        book: "comfort food",
        page: 49,
        type: "tea"
    },
    {
        title: "sweet & spicy meatballs",
        book: "comfort food",
        page: 50,
        type: "tea"
    },
    {
        title: "peanut butter chicken curry",
        book: "comfort food",
        page: 56,
        type: "lunch"
    },
    {
        title: "rainbow soup",
        book: "comfort food",
        page: 62,
        type: "lunch"
    },
    {
        title: "garlic mushroom biryani",
        book: "comfort food",
        page: 72,
        type: "tea"
    },
    {
        title: "katsu chicken nuggets & curry dip",
        book: "comfort food",
        page: 77,
        type: "tea"
    },
    {
        title: "cheesy chips and gravy",
        book: "comfort food",
        page: 79,
        type: "lunch"
    },
    {
        title: "bolodnese cheese fries",
        book: "comfort food",
        page: 88,
        type: "tea"
    },
    {
        title: "creamy roasted red pepper and chicken pasta",
        book: "comfort food",
        page: 100,
        type: "tea"
    },
    {
        title: "curried sausages",
        book: "comfort food",
        page: 102,
        type: "tea"
    },
    {
        title: "spanish rice",
        book: "comfort food",
        page: 120,
        type: "tea"
    },
    {
        title: "paprika chicken",
        book: "comfort food",
        page: 132,
        type: "tea"
    },
    {
        title: "creamy, cheesy garlic mushrrom risotto",
        book: "comfort food",
        page: 135,
        type: "tea"
    },
    {
        title: "german potato soup",
        book: "comfort food",
        page: 144,
        type: "lunch"
    },
    {
        title: "curried chicken and rice soup",
        book: "comfort food",
        page: 146,
        type: "lunch"
    },
    {
        title: "creamy chicken soup",
        book: "comfort food",
        page: 152,
        type: "lunch"
    },
    {
        title: "kate's tagine",
        book: "comfort food",
        page: 168,
        type: "tea"
    },
    {
        title: "tipsy bbq chicken",
        book: "comfort food",
        page: 174,
        type: "tea"
    },
    {
        title: "hunters chicken pie",
        book: "comfort food",
        page: 182,
        type: "tea"
    },
    {
        title: "forgotten lamb",
        book: "comfort food",
        page: 184,
        type: "tea"
    },
    {
        title: "steak and chips pie",
        book: "comfort food",
        page: 187,
        type: "tea"
    },
    {
        title: "chicken vesuvio",
        book: "comfort food",
        page: 197,
        type: "tea"
    },
    {
        title: "danger dogs",
        book: "comfort food",
        page: 198,
        type: "tea"
    },
    {
        title: "cheese, onion and potato pie",
        book: "comfort food",
        page: 200,
        type: "tea"
    },
    {
        title: "chicken tetrazzini",
        book: "comfort food",
        page: 205,
        type: "tea"
    },
    {
        title: "cheesy fajita orzotto",
        book: "comfort food",
        page: 206,
        type: "tea"
    },
    {
        title: "cowboy fries",
        book: "comfort food",
        page: 212,
        type: "side"
    },
    {
        title: "balsamic roasted onions",
        book: "comfort food",
        page: 222,
        type: "side"
    },
    {
        title: "the ultimate grilled cheese",
        book: "comfort food",
        page: 232,
        type: "snack"
    },
    {
        title: "banana sponge puddings",
        book: "comfort food",
        page: 242,
        type: "dessert"
    },
    {
        title: "millionaire's shortbread",
        book: "comfort food",
        page: 250,
        type: "snack"
    },
    {
        title: "coconut and jam sponge",
        book: "comfort food",
        page: 254,
        type: "dessert"
    },
    {
        title: "biscoff blondies",
        book: "comfort food",
        page: 274,
        type: "dessert"
    },
    {
        title: "chocco nut lava cakes",
        book: "comfort food",
        page: 263,
        type: "dessert"
    },
    {
        title: "jam roly poly",
        book: "comfort food",
        page: 258,
        type: "dessert"
    },
    {
        title: "treacle sponge",
        book: "comfort food",
        page: 266,
        type: "dessert"
    },
    {
        title: "mexican hot chocolate",
        book: "comfort food",
        page: 269,
        type: "snack"
    },
    {
        title: "bakewell rice pudding",
        book: "comfort food",
        page: 270,
        type: "dessert"
    },
    {
        title: "banana dippers",
        book: "quick & easy",
        page: 26,
        type: "breakfast"
    },
    {
        title: "squashage fingers",
        book: "quick & easy",
        page: 39,
        type: "breakfast"
    },
    {
        title: "char siu pork burgers",
        book: "quick & easy",
        page: 46,
        type: "tea"
    },
    {
        title: "teriyaki chicken",
        book: "quick & easy",
        page: 48,
        type: "tea"
    },
    {
        title: "tex-mex meatballs",
        book: "quick & easy",
        page: 50,
        type: "tea"
    },
    {
        title: "baked chimichanga",
        book: "quick & easy",
        page: 57,
        type: "tea"
    },
    {
        title: "veggie satay noodles",
        book: "quick & easy",
        page: 62,
        type: "lunch"
    },
    {
        title: "swedish meatballs",
        book: "quick & easy",
        page: 66,
        type: "tea"
    },
    {
        title: "chicken shashlik",
        book: "quick & easy",
        page: 70,
        type: "tea"
    },
    {
        title: "crispy chilli beef",
        book: "quick & easy",
        page: 74,
        type: "tea"
    },
    {
        title: "a chicken's vindaloo",
        book: "quick & easy",
        page: 76,
        type: "tea"
    },
    {
        title: "zingy chicken salad",
        book: "quick & easy",
        page: 78,
        type: "tea"
    },
    {
        title: "chinese chicken and broccoli",
        book: "quick & easy",
        page: 82,
        type: "tea"
    },
    {
        title: "spicy rice",
        book: "quick & easy",
        page: 84,
        type: "side"
    },
    {
        title: "chicken chow mein",
        book: "quick & easy",
        page: 86,
        type: "tea"
    },
    {
        title: "chicken chasseur",
        book: "quick & easy",
        page: 97,
        type: "tea"
    },
    {
        title: "salisbury steak",
        book: "quick & easy",
        page: 100,
        type: "tea"
    },
    {
        title: "mongolian beef",
        book: "quick & easy",
        page: 105,
        type: "tea"
    },
    {
        title: "pizza pasta",
        book: "quick & easy",
        page: 110,
        type: "tea"
    },
    {
        title: "cheeseburger quiche",
        book: "quick & easy",
        page: 118,
        type: "tea"
    },
    {
        title: "sausage casserole",
        book: "quick & easy",
        page: 122,
        type: "tea"
    },
    {
        title: "mushroom bourguignon",
        book: "quick & easy",
        page: 139,
        type: "tea"
    },
    {
        title: "mexican street corn soup",
        book: "quick & easy",
        page: 140,
        type: "lunch"
    },
    {
        title: "vegetarian gumbo",
        book: "quick & easy",
        page: 144,
        type: "tea"
    },
    {
        title: "caribbean vegetable stew",
        book: "quick & easy",
        page: 150,
        type: "tea"
    },
    {
        title: "harissa and honey chicken",
        book: "quick & easy",
        page: 163,
        type: "tea"
    },
    {
        title: "summer vegetable risotto",
        book: "quick & easy",
        page: 182,
        type: "tea"
    },
    {
        title: "chimichurri lamb chops",
        book: "quick & easy",
        page: 188,
        type: "tea"
    },
    {
        title: "crustless quiche lorraine",
        book: "quick & easy",
        page: 192,
        type: "tea"
    },
    {
        title: "chicken kievs",
        book: "quick & easy",
        page: 195,
        type: "tea"
    },
    {
        title: "bombay potatoes",
        book: "quick & easy",
        page: 202,
        type: "side"
    },
    {
        title: "coleslaw",
        book: "quick & easy",
        page: 220,
        type: "side"
    },
    {
        title: "chocolate tarts",
        book: "quick & easy",
        page: 230,
        type: "dessert"
    },
    {
        title: "salted caramel rice krispie bars",
        book: "quick & easy",
        page: 232,
        type: "snack"
    },
    {
        title: "blueberry, gin & banana ice cream",
        book: "quick & easy",
        page: 240,
        type: "dessert"
    },
    {
        title: "churros and chocolate sauce",
        book: "quick & easy",
        page: 246,
        type: "dessert"
    },
    {
        title: "lemon surprise pudding",
        book: "quick & easy",
        page: 250,
        type: "dessert"
    },
    {
        title: "cinnamon swirls",
        book: "quick & easy",
        page: 250,
        type: "snack"
    },
    {
        title: "monte cristo sandwich",
        book: "everyday light",
        page: 22,
        type: "lunch"
    },
    {
        title: "breakfast banana split",
        book: "everyday light",
        page: 24,
        type: "breakfast"
    },
    {
        title: "egg in the hole breakfast bagel",
        book: "everyday light",
        page: 29,
        type: "breakfast"
    },
    {
        title: "sausage and egg english muffin",
        book: "everyday light",
        page: 30,
        type: "breakfast"
    },
    {
        title: "giant baked beans",
        book: "everyday light",
        page: 36,
        type: "side"
    },
    {
        title: "crying tiger beef",
        book: "everyday light",
        page: 46,
        type: "tea"
    },
    {
        title: "chicken tikka drumsticks",
        book: "everyday light",
        page: 54,
        type: "tea"
    },
    {
        title: "popcorn chicken",
        book: "everyday light",
        page: 56,
        type: "tea"
    },
    {
        title: "chipotle pork burger",
        book: "everyday light",
        page: 60,
        type: "tea"
    },
    {
        title: "yeung chow fried rice",
        book: "everyday light",
        page: 62,
        type: "tea"
    },
    {
        title: "sloppy dogs",
        book: "everyday light",
        page: 65,
        type: "tea"
    },
    {
        title: "firecracker prawns",
        book: "everyday light",
        page: 72,
        type: "tea"
    },
    {
        title: "pizza-loaded fries",
        book: "everyday light",
        page: 74,
        type: "tea"
    },
    {
        title: "orange, carrot and beetroot salad",
        book: "everyday light",
        page: 78,
        type: "lunch"
    },
    {
        title: "cauliflower-base pizza",
        book: "everyday light",
        page: 82,
        type: "tea"
    },
    {
        title: "broccoli, chilli and king prawn stir fry",
        book: "everyday light",
        page: 86,
        type: "tea"
    },
    {
        title: "quesadilla",
        book: "everyday light",
        page: 92,
        type: "tea"
    },
    {
        title: "ploughman's platter with homemade chutney",
        book: "everyday light",
        page: 95,
        type: "lunch"
    },
    {
        title: "lemon and pepper chicken tagliatelle",
        book: "everyday light",
        page: 96,
        type: "tea"
    },
    {
        title: "sausage and onion plait",
        book: "everyday light",
        page: 100,
        type: "lunch"
    },
    {
        title: "chipotle turkey meatballs",
        book: "everyday light",
        page: 120,
        type: "tea"
    },
    {
        title: "cheese and onion crispbakes",
        book: "everyday light",
        page: 122,
        type: "lunch"
    },
    {
        title: "hot and sour soup",
        book: "everyday light",
        page: 125,
        type: "lunch"
    },
    {
        title: "butter bean and sweet potato tikka masala",
        book: "everyday light",
        page: 128,
        type: "lunch"
    },
    {
        title: "jambalaya",
        book: "everyday light",
        page: 130,
        type: "tea"
    },
    {
        title: "chicken dopiaza with cumin roast potatoes",
        book: "everyday light",
        page: 133,
        type: "tea"
    },
    {
        title: "beef kofta curry",
        book: "everyday light",
        page: 138,
        type: "tea"
    },
    {
        title: "chicken, vegetable and rice bak",
        book: "everyday light",
        page: 143,
        type: "tea"
    },
    {
        title: "sopa criolla",
        book: "everyday light",
        page: 152,
        type: "tea"
    },
    {
        title: "beef and sweet potato stew",
        book: "everyday light",
        page: 154,
        type: "tea"
    },
    {
        title: "cherry cola pulled pork",
        book: "everyday light",
        page: 156,
        type: "tea"
    },
    {
        title: "spring vegetable soup",
        book: "everyday light",
        page: 164,
        type: "lunch"
    },
    {
        title: "ramen bowls",
        book: "everyday light",
        page: 168,
        type: "lunch"
    },
    {
        title: "pork cassoulet",
        book: "everyday light",
        page: 171,
        type: "tea"
    },
    {
        title: "ratatouille chicken",
        book: "everyday light",
        page: 174,
        type: "tea"
    },
    {
        title: "herb-crusted lamb",
        book: "everyday light",
        page: 176,
        type: "tea"
    },
    {
        title: "keema pie",
        book: "everyday light",
        page: 182,
        type: "tea"
    },
    {
        title: "welsh rarebit potatoes",
        book: "everyday light",
        page: 210,
        type: "tea"
    },
    {
        title: "barbecue potato wedges",
        book: "everyday light",
        page: 214,
        type: "side"
    },
    {
        title: "katsu chicken scotch eggs",
        book: "everyday light",
        page: 216,
        type: "lunch"
    },
    {
        title: "ketchup tomatoes",
        book: "everyday light",
        page: 221,
        type: "side"
    },
    {
        title: "french peas",
        book: "everyday light",
        page: 226,
        type: "side"
    },
    {
        title: "garlic scalloped potatoes",
        book: "everyday light",
        page: 234,
        type: "side"
    },
    {
        title: "lemon and coriander hummus",
        book: "everyday light",
        page: 234,
        type: "snack"
    },
    {
        title: "vegetable parmesan chips",
        book: "everyday light",
        page: 238,
        type: "side"
    },
    {
        title: "pink apple slaw",
        book: "everyday light",
        page: 242,
        type: "side"
    },
    {
        title: "batatas picantes",
        book: "everyday light",
        page: 250,
        type: "side"
    },
    {
        title: "raspberry and elderflower swirl",
        book: "everyday light",
        page: 257,
        type: "dessert"
    },
    {
        title: "full english wraps",
        book: "book 1",
        page: 24,
        type: "breakfast"
    },
    {
        title: "breakfast muffins",
        book: "book 1",
        page: 31,
        type: "breakfast"
    },
    {
        title: "lemon and blueberry baked oats",
        book: "book 1",
        page: 41,
        type: "breakfast"
    },
    {
        title: "carrot cake overnight oats",
        book: "book 1",
        page: 44,
        type: "breakfast"
    },
    {
        title: "tandoori chicken kebab",
        book: "book 1",
        page: 48,
        type: "tea"
    },
    {
        title: "chicken balti",
        book: "book 1",
        page: 50,
        type: "tea"
    },
    {
        title: "chicken and mushroom stir fry",
        book: "book 1",
        page: 52,
        type: "tea"
    },
    {
        title: "chicken satay",
        book: "book 1",
        page: 55,
        type: "tea"
    },
    {
        title: "philly cheesesteak",
        book: "book 1",
        page: 56,
        type: "tea"
    },
    {
        title: "super simple chicken curry",
        book: "book 1",
        page: 58,
        type: "tea"
    },
    {
        title: "bbq chicken drumsticks and thighs",
        book: "book 1",
        page: 64,
        type: "tea"
    },
    {
        title: "doner kebab",
        book: "book 1",
        page: 66,
        type: "tea"
    },
    {
        title: "cheeseburger pizza",
        book: "book 1",
        page: 69,
        type: "tea"
    },
    {
        title: "honey chilli chicken",
        book: "book 1",
        page: 70,
        type: "tea"
    },
    {
        title: "singapore nasi goreng",
        book: "book 1",
        page: 77,
        type: "tea"
    },
    {
        title: "turkey keema",
        book: "book 1",
        page: 78,
        type: "tea"
    },
    {
        title: "chicken in black bean sauce",
        book: "book 1",
        page: 80,
        type: "tea"
    },
    {
        title: "stuffed meatballs",
        book: "book 1",
        page: 87,
        type: "tea"
    },
    {
        title: "pizza-stuffed chicken",
        book: "book 1",
        page: 92,
        type: "tea"
    },
    {
        title: "chicken dippers",
        book: "book 1",
        page: 104,
        type: "tea"
    },
    {
        title: "pesto pasta",
        book: "book 1",
        page: 108,
        type: "lunch"
    },
    {
        title: "sumac lamb chops",
        book: "book 1",
        page: 114,
        type: "tea"
    },
    {
        title: "cold asian noodle salad",
        book: "book 1",
        page: 116,
        type: "lunch"
    },
    {
        title: "creamy garlic chicken",
        book: "book 1",
        page: 119,
        type: "tea"
    },
    {
        title: "cajun dirty rice",
        book: "book 1",
        page: 120,
        type: "tea"
    },
    {
        title: "campfire stew",
        book: "book 1",
        page: 126,
        type: "tea"
    },
    {
        title: "cuban beef",
        book: "book 1",
        page: 129,
        type: "tea"
    },
    {
        title: "cock and bull",
        book: "book 1",
        page: 132,
        type: "tea"
    },
    {
        title: "mediterranean-style lamb shanks",
        book: "book 1",
        page: 137,
        type: "tea"
    },
    {
        title: "goulash",
        book: "book 1",
        page: 140,
        type: "tea"
    },
    {
        title: "beef in red wine with shallots",
        book: "book 1",
        page: 143,
        type: "tea"
    },
    {
        title: "beef ragu fettuccine",
        book: "book 1",
        page: 151,
        type: "tea"
    },
    {
        title: "lamb guvech",
        book: "book 1",
        page: 153,
        type: "tea"
    },
    {
        title: "bacon and cheese potato skins",
        book: "book 1",
        page: 158,
        type: "tea"
    },
    {
        title: "hunter's chicken",
        book: "book 1",
        page: 160,
        type: "tea"
    },
    {
        title: "bacon, onion and potato bake",
        book: "book 1",
        page: 162,
        type: "tea"
    },
    {
        title: "buffalo skins",
        book: "book 1",
        page: 164,
        type: "tea"
    },
    {
        title: "bolognese bake",
        book: "book 1",
        page: 182,
        type: "tea"
    },
    {
        title: "chicken parmigiana",
        book: "book 1",
        page: 185,
        type: "tea"
    },
    {
        title: "meat and potato pasties",
        book: "book 1",
        page: 189,
        type: "lunch"
    },
    {
        title: "salt and pepper chips",
        book: "book 1",
        page: 202,
        type: "side"
    },
    {
        title: "balsamic and red onion gravy",
        book: "book 1",
        page: 206,
        type: "side"
    },
    {
        title: "chip shop curry sauce",
        book: "book 1",
        page: 208,
        type: "side"
    },
    {
        title: "bang bang cauli",
        book: "book 1",
        page: 214,
        type: "side"
    },
    {
        title: "halloumi fries",
        book: "book 1",
        page: 217,
        type: "side"
    },
    {
        title: "chips n dips",
        book: "book 1",
        page: 222,
        type: "snack"
    },
    {
        title: "balsamic and red onion gravy",
        book: "book 1",
        page: 206,
        type: "side"
    },
    {
        title: "tuna scotch eggs",
        book: "book 1",
        page: 230,
        type: "snack"
    },
    {
        title: "sweet potato rostis with sour cream and chive dip",
        book: "book 1",
        page: 235,
        type: "snack"
    },
    {
        title: "tiramisu",
        book: "book 1",
        page: 240,
        type: "dessert"
    },
    {
        title: "chocolate eclairs",
        book: "book 1",
        page: 243,
        type: "dessert"
    },
    {
        title: "bakewell tarts",
        book: "book 1",
        page: 244,
        type: "dessert"
    },
    {
        title: "mini coffee and pecan cakes",
        book: "book 1",
        page: 246,
        type: "dessert"
    },
    {
        title: "salted caramel banoffee pies",
        book: "book 1",
        page: 250,
        type: "dessert"
    },
    {
        title: "sticky toffee pudding",
        book: "book 1",
        page: 252,
        type: "dessert"
    },
    {
        title: "creme brulee",
        book: "book 1",
        page: 254,
        type: "dessert"
    },
];

const breakfastResultsEl = document.getElementById('breakfast-results');
const lunchResultsEl = document.getElementById('lunch-results');
const teaResultsEl = document.getElementById('tea-results');
const dessertResultsEl = document.getElementById('dessert-results');
const sideResultsEl = document.getElementById('side-results');
const snackResultsEl = document.getElementById('snack-results');
const breakfastMeals = document.getElementById('breakfast-meals');
const lunchMeals = document.getElementById('lunch-meals');
const teaMeals = document.getElementById('tea-meals');
const dessertMeals = document.getElementById('dessert-meals');
const sideMeals = document.getElementById('side-meals');
const snackMeals = document.getElementById('snack-meals');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const errorEl = document.querySelector('.error-section');
const mealsBtn = document.getElementById('get-meals-btn');

function renderMeals(mealType, mealTypeValue, mealTypeEl){
    let mealsPlural = mealType + "s"
    mealTypeEl.style.display = "block";
    mealTypeEl.innerHTML = `<h1 class="meal-type">${mealType}</h1>`
    mealsPlural = meals.filter(meal => meal.type === mealType);
    const numMeals = mealTypeValue;
    const randNumArray = [];
    while(randNumArray.length < numMeals && randNumArray.length < mealsPlural.length) {
        const randNum = Math.floor(Math.random() * mealsPlural.length);
        if(!randNumArray.includes(randNum)) {
            randNumArray.push(randNum);
        }
    }
    for(let i = 0; i < randNumArray.length; i++) {
        mealTypeEl.innerHTML += `
            <h2 class="meal-title">${mealsPlural[randNumArray[i]].title}</h2>
            <h3 class="meal-book">Book: ${mealsPlural[randNumArray[i]].book}</h3>
            <h4 class="meal-page">Page: ${mealsPlural[randNumArray[i]].page}</h4>`
    }
};

function renderSearchResults(mealSearchLength, mealTypeEl, mealSearch) {
    for(let i = 0; i < mealSearchLength; i++) {
                mealTypeEl.innerHTML += `
                    <h2 class="meal-title">${mealSearch[i].title}</h2>
                    <h3 class="meal-book">Book: ${mealSearch[i].book}</h3>
                    <h4 class="meal-page">Page: ${mealSearch[i].page}</h4>`
            }
}

function searchFood() {
    breakfastResultsEl.textContent = "";
    breakfastResultsEl.style.display = "none";
    lunchResultsEl.textContent = "";
    lunchResultsEl.style.display = "none";
    teaResultsEl.textContent = "";
    teaResultsEl.style.display = "none";
    dessertResultsEl.textContent = "";
    dessertResultsEl.style.display = "none";
    sideResultsEl.textContent = "";
    sideResultsEl.style.display = "none";
    snackResultsEl.textContent = "";
    snackResultsEl.style.display = "none";
    if(searchInput.value.length > 1) {
        const foodSearch = meals.filter(search => search.title.includes(searchInput.value) 
        || search.type.includes(searchInput.value));
        const breakfastSearch = foodSearch.filter(breakfast => breakfast.type === "breakfast");
        if(breakfastSearch.length > 0) {
            breakfastResultsEl.style.display = "block";
            breakfastResultsEl.innerHTML = `<h1 class="meal-type">Breakfast</h1>`
            renderSearchResults(breakfastSearch.length, breakfastResultsEl, breakfastSearch)
        } else {
            breakfastResultsEl.innerHTML = "";
        };
        const lunchSearch = foodSearch.filter(lunch => lunch.type === "lunch");
        console.log(lunchSearch);
        if(lunchSearch.length > 0) {
            lunchResultsEl.style.display = "block";
            lunchResultsEl.innerHTML = `<h1 class="meal-type">Lunch</h1>`
            renderSearchResults(lunchSearch.length, lunchResultsEl, lunchSearch)
        } else {
            lunchResultsEl.innerHTML = "";
        };
        const teaSearch = foodSearch.filter(tea => tea.type === "tea");
        if(teaSearch.length > 0) {
            teaResultsEl.style.display = "block";
            teaResultsEl.innerHTML = `<h1 class="meal-type">Tea</h1>`
            renderSearchResults(teaSearch.length, teaResultsEl, teaSearch)
        } else {
            teaResultsEl.innerHTML = "";
        };
        const dessertSearch = foodSearch.filter(dessert => dessert.type.includes("dessert"));
        if(dessertSearch.length > 0) {
            dessertResultsEl.style.display = "block";
            dessertResultsEl.innerHTML = `<h1 class="meal-type">Dessert</h1>`
            renderSearchResults(dessertSearch.length, dessertResultsEl, dessertSearch)
        } else {
            dessertResultsEl.innerHTML = "";
        };
        const sideSearch = foodSearch.filter(side => side.type.includes("side"));
        if(sideSearch.length > 0) {
            sideResultsEl.style.display = "block";
            sideResultsEl.innerHTML = `<h1 class="meal-type">Side</h1>`
            renderSearchResults(sideSearch.length, sideResultsEl, sideSearch)
        } else {
            sideResultsEl.innerHTML = "";
        };
        const snackSearch = foodSearch.filter(snack => snack.type.includes("snack"));
        if(snackSearch.length > 0) {
            snackResultsEl.style.display = "block";
            snackResultsEl.innerHTML = `<h1 class="meal-type">Snack</h1>`
            renderSearchResults(snackSearch.length, snackResultsEl, snackSearch)
        } else {
            snackResultsEl.innerHTML = "";
        };
        searchInput.value = "";
    } else {
        errorEl.style.display = "block";
        searchInput.value = "";
        setTimeout(() => {errorEl.style.display = "none"}, 2000);
    };
};

function getMeals() {
    if(breakfastMeals.value > 0) {
        renderMeals("breakfast", breakfastMeals.value, breakfastResultsEl);
    } else {
        breakfastResultsEl.style.display = "none";
        breakfastResultsEl.innerHTML = "";
    };
    if(lunchMeals.value > 0) {
        renderMeals("lunch", lunchMeals.value, lunchResultsEl);
    } else {
        lunchResultsEl.style.display = "none";
        lunchResultsEl.innerHTML = "";
    };
    if(teaMeals.value > 0) {
        renderMeals("tea", teaMeals.value, teaResultsEl);
    } else {
        teaResultsEl.style.display = "none";
        teaResultsEl.innerHTML = "";
    };
    if(dessertMeals.value > 0) {
        renderMeals("dessert", dessertMeals.value, dessertResultsEl)
    } else {
        dessertResultsEl.style.display = "none";
        dessertResultsEl.innerHTML = "";
    };
    if(sideMeals.value > 0) {
        renderMeals("side", sideMeals.value, sideResultsEl);
    } else {
        sideResultsEl.style.display = "none";
        sideResultsEl.innerHTML = "";
    };
    if(snackMeals.value > 0) {
        renderMeals("snack", snackMeals.value, snackResultsEl);
    } else {
        snackResultsEl.style.display = "none";
        snackResultsEl.innerHTML = "";
    };
    
    const lunches = meals.filter(meal => meal.type === "lunch");
    const teas = meals.filter(meal => meal.type === "tea");
    const sides = meals.filter(meal => meal.type === "side");
    const desserts = meals.filter(meal => meal.type === "dessert");
    const snacks = meals.filter(meal => meal.type === "snack");
}

searchBtn.addEventListener("click", searchFood);
mealsBtn.addEventListener("click", getMeals);