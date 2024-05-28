function getRestaurant()
{
    console.log('getRestaurant() is running')
    var restaurants =[
        {
            restN:"Chef Wang Fried Rice",
            price:10,
            area:"South",
            cuisine:"Chinese",
            link:"http://chefwangfriedrice.com/",
            img:"/pictures/chef wang fried rice.jpeg",
            tag:"",
        },
        {
            restN:"Chef Leung’s Authentic Hand-milled Rice Noodle Rolls",
            price:10,
            area:"South",
            cuisine:"Chinese",
            link:"https://www.facebook.com/chefleungcf",
            img:"/pictures/chef leung ccf.jpeg",
            tag:"",
        },
        {
            restN:"Canton Delicacies",
            price:20,
            area:"Central",
            cuisine:"Chinese",
            link:"https://cantondelicacies.take.app/",
            img:"/pictures/canton delicacies.jpeg",
            tag:"",
        },
        {
            restN:"Volk",
            price:20,
            area:"West",
            cuisine:"Chinese",
            link:"https://www.facebook.com/Volksg-103791911441414/",
            img:"/pictures/volk.jpeg",
            tag:"",
        },
        {
            restN:"CK Cuisine",
            price:20,
            area:"Central",
            cuisine:"Thai",
            link:"https://ckcuisine.mymenu.com.sg/",
            img:"/pictures/ck cuisine.jpeg",
            tag:"",
        },
        {
            restN:"5-Star Dim Sum @ Mei Ling Street",
            price:20,
            area:"Central",
            cuisine:"Chinese",
            link:"NA",
            img:"/pictures/5-star dim sum.jpeg",
            tag:"",
        },
        {
            restN:"Yanan Ban Mian Noodle",
            price:10,
            area:"West",
            cuisine:"Chinese",
            link:"https://www.facebook.com/%E4%BA%9A%E7%94%B7%E6%89%B3%E9%9D%A2%E9%9D%A2%E7%B2%89%E7%B2%BF-yanan-ban-mian-noodle-102052842258851",
            img:"/pictures/yanan ban mian.jpeg",
            tag:"",
        },
        {
            restN:"Cheong Fan Paradise",
            price:10,
            area:"North",
            cuisine:"Chinese",
            link:"https://www.facebook.com/Cheong-Fan-Paradise-112566314386887",
            img:"/pictures/cheong fun paradise.jpeg",
            tag:"",
        },
        {
            restN:"Yuan Lang Soy Sauce Chicken Master",
            price:10,
            area:"Central",
            cuisine:"Chinese",
            link:"https://www.facebook.com/professorchicken",
            img:"/pictures/yuan lang chicken.jpeg",
            tag:"",
        },
        {
            restN:"Papa Jones BBQ and Grill",
            price:10,
            area:"North",
            cuisine:"Western",
            link:"https://www.facebook.com/papajonesbbqandgrill/",
            img:"/pictures/papa jones bbq.jpeg",
            tag:"",
        },
        {
            restN:"A Noodle Story",
            price:10,
            area:"Central",
            cuisine:"Chinese",
            link:"https://www.facebook.com/ANoodleStory/",
            img:"/pictures/a noodle story.jpeg",
            tag:"",
        },
        {
            restN:"Chef Wei HK Cheong Fun",
            price:5,
            area:"Central",
            cuisine:"Chinese",
            link:"https://www.facebook.com/chefweihkcheongfun",
            img:"/pictures/chef wei.jpeg",
            tag:"",
        },
        {
            restN:"Little Bowl",
            price:10,
            area:"Central",
            cuisine:"Japanese",
            link:"https://www.facebook.com/LittleBowlSingapore/",
            img:"/pictures/little bowl.jpeg",
            tag:"",
        },
        {
            restN:"Maruhachi Donburi & Curry",
            price:10,
            area:"Central",
            cuisine:"Japanese",
            link:"https://www.facebook.com/Maruhachi2020/",
            img:"/pictures/maruhachi curry.jpeg",
            tag:"",
        },
        {
            restN:"Meet 4 Meat",
            price:50,
            area:"East",
            cuisine:"Western",
            link:"https://meet4meat.sg/",
            img:"/pictures/meet 4 for meat.jpeg",
            tag:"",
        },
        {
            restN:"Nice Rice",
            price:10,
            area:"Central",
            cuisine:"Japanese",
            link:"https://www.facebook.com/NiceRice.SG",
            img:"/pictures/nice rice.jpeg",
            tag:"",
        },
        {
            restN:"Supreme Ramen Xiao Long Bao  ",
            price:20,
            area:"West",
            cuisine:"Chinese",
            link:"https://www.facebook.com/Supreme-Xiao-Long-Bao-442386399496462/",
            img:"/pictures/supreme ramen .jpeg",
            tag:"",
        },
        {
            restN:"Kerabu by Arang",
            price:50,
            area:"North",
            cuisine:"Malay",
            link:"https://www.instagram.com/kerabubyarang/?hl=en",
            img:"/pictures/kerabu by arang.jpeg",
            tag:"",
        },
        {
            restN:"Lao Fu Jia Stewed Soup Steamed Delights",
            price:10,
            area:"North",
            cuisine:"Chinese",
            link:"https://www.todayonline.com/8days/ex-crystal-jade-chef-who-opened-soup-stall-says-biz-isnt-great-he-still-earns-more-hawker-2426906",
            img:"/pictures/lao fu jia soup.jpeg",
            tag:"",
        },
    ];

    var filter1Value = document.getElementById('lc').value;
    var filter2Value = document.getElementById('type').value;
    var filter3Value = document.getElementById('price').value;
    var filter4Value = document.getElementById('preference').value.toLowerCase();

    var filteredData = restaurants.filter(function(item) {
        return (filter1Value === '' || item.area === filter1Value) &&
                (filter2Value === '' || item.cuisine === filter2Value) &&
                (filter3Value === '' || item.price <= parseFloat(filter3Value)) &&
                (filter4Value === '' || item.restN.toLowerCase().search(filter4Value)>-1);
    });

    displayResults(filteredData);
}

function displayResults(filteredData) {
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (filteredData.length === 0) {
        resultsContainer.innerHTML = 'No results found.';
        return;
    }

    // Create HTML for each result item
    
    var cardsContainer = document.getElementById("results");
    filteredData.forEach(function(item) {
        var card = createUserCard(item);
        cardsContainer.appendChild(card);
    });
}

function createUserCard(item) {
    var card = document.createElement("div");
    card.classList.add("card");

    var imgElement = document.createElement("img");
    imgElement.src = item.img;
    imgElement.style.width="280px";

    var restNElement = document.createElement("h2");
    restNElement.textContent = item.restN;

    var linkElement = document.createElement("a");
    linkElement.textContent = "Website";
    linkElement.href = item.link;

    var cuisineElement = document.createElement("p");
    cuisineElement.textContent = "Cuisine: " + item.cuisine;

    var areaElement = document.createElement("p");
    areaElement.textContent = "Location: " + item.area;

    var priceElement = document.createElement("p");
    priceElement.textContent = "Price: $<" + item.price;

    card.appendChild(restNElement);
    card.appendChild(imgElement);
    card.appendChild(cuisineElement);
    card.appendChild(priceElement);
    card.appendChild(areaElement);
    card.appendChild(linkElement);

    return card;
}