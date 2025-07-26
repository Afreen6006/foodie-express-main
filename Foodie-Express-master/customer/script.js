// ========== Restaurant Data ========== 
const topRestaurants = [
  {
    name: "Hotel Sai Nath & Sai Restaurant",
    image: "Sainath.jpg",
    offer: "25% OFF ABOVE ₹1399",
    rating: "4.4",
    time: "35-40 mins",
    cuisine: "North Indian, South Indian, Chinese",
    location: "Chhindwara Locality",
    items: [
      { name: "Masala Dosa", image: "masaladosa.jpg", price: 110 },
      { name: "Veg Biryani", image: "vegbriyani.jpg", price: 180 }
    ]
  },
  {
    name: "Dev International",
    image: "Dev.jpg",
    offer: "₹65 OFF ABOVE ₹199",
    rating: "4.3",
    time: "50-55 mins",
    cuisine: "North Indian, Fast Food",
    location: "Mohan Nagar",
    items: [
      { name: "Veg Hakka Noodles", image: "veg_hakka.jpg", price: 120 },
      { name: "Veg Chow Mein", image: "vegchowmein.jpg", price: 130 }
    ]
  },
  {
    name: "Adil Hotel",
    image: "Adil.jpg",
    offer: "FREE ITEM",
    rating: "4.3",
    time: "35-40 mins",
    cuisine: "North Indian, Biryani, Tandoor",
    location: "Chhindwara Locality",
    items: [
      { name: "Chicken Biryani", image: "chickenbriyani.jpg", price: 220 },
      { name: "Singapore Noodles", image: "singaporenoodles.jpg", price: 160 }
    ]
  },
  {
    name: "Bakery World",
    image: "BakeryWorld.jpg",
    offer: "FREE ITEM",
    rating: "4.4",
    time: "45-50 mins",
    cuisine: "Bakery, Icecreams, Snacks",
    location: "Parasia Road",
    items: [
      { name: "Chocolate Muffin", image: "muffin.jpg", price: 55 },
      { name: "Ice Cream Cup", image: "icecreamcup.jpg", price: 40 }
    ]
  },
  {
    name: "Satkar Restaurant",
    image: "Satkar.jpg",
    offer: "ITEMS AT ₹59",
    rating: "4.4",
    time: "35-40 mins",
    cuisine: "North Indian, South Indian, Biryani, Tandoor",
    location: "Satkar Chowk",
    items: [
      { name: "Butter Naan", image: "naan.jpg", price: 30 },
      { name: "Paneer Butter Masala", image: "paneer.jpg", price: 160 }
    ]
  },
  {
    name: "Madurai Idly Shop",
    image: "Madurai.jpg",
    offer: "ITEMS AT ₹129",
    rating: "4.4",
    time: "20-25 mins",
    cuisine: "South Indian, North Indian, Biryani, Tandoor",
    location: "Bus Stand",
    items: [
      { name: "Mini Idly", image: "miniidly.jpg", price: 60 },
      { name: "Onion Dosa", image: "oniondosa.jpg", price: 100 }
    ]
  }
];

const onlineRestaurants = [
  {
    name: "Pizza Hut",
    image: "Pizza.jpg",
    offer: "ITEMS AT ₹284",
    rating: "4.2",
    time: "50-55 mins",
    cuisine: "Pizzas",
    location: "Parasia Road",
    items: [
      { name: "Margherita Pizza", image: "pizza1.jpg", price: 189, isPureVeg: true },
      { name: "Veggie Supreme", image: "pizza2.jpg", price: 259, isPureVeg: true },
      { name: "Paneer Delight", image: "pizza3.jpg", price: 229, isPureVeg: true }
    ]
  },
  {
    name: "Jai Ganesh Bhojnalaya",
    image: "Jaiganesh.jpg",
    offer: "₹200 OFF ABOVE ₹400",
    rating: "4.1",
    time: "45-50 mins",
    cuisine: "North Indian, South Indian",
    location: "Bus Stand",
    items: [
      { name: "Thali Meal", image: "thali.jpg", price: 120, isPureVeg: true },
      { name: "Dosa", image: "dosa.jpg", price: 90, isPureVeg: true },
      { name: "Idly", image: "idly.jpg", price: 50, isPureVeg: true }
    ]
  },
  {
    name: "Hotel Sai Nath & Sai Restaurant",
    image: "Sainath.jpg",
    offer: "25% OFF ABOVE ₹1399",
    rating: "4.4",
    time: "40-45 mins",
    cuisine: "North Indian, South Indian",
    location: "Chhindwara Locality",
    items: [
      { name: "Masala Dosa", image: "masaladosa.jpg", price: 110, isPureVeg: true },
      { name: "Veg Biryani", image: "vegbriyani.jpg", price: 180, isPureVeg: true }
    ]
  },
  {
    name: "Bakery World",
    image: "BakeryWorld.jpg",
    offer: "FREE ITEM",
    rating: "4.4",
    time: "45-50 mins",
    cuisine: "Bakery, Ice Cream, Snacks",
    location: "Parasia Road",
    items: [
      { name: "Chocolate Muffin", image: "muffin.jpg", price: 55, isPureVeg: true },
      { name: "Ice Cream Cup", image: "icecreamcup.jpg", price: 40, isPureVeg: true }
    ]
  },
  {
    name: "Satkar Restaurant",
    image: "Satkar.jpg",
    offer: "ITEMS AT ₹59",
    rating: "4.4",
    time: "35-40 mins",
    cuisine: "North Indian, Biryani, Tandoor",
    location: "Satkar Chowk",
    items: [
      { name: "Butter Naan", image: "naan.jpg", price: 30, isPureVeg: true },
      { name: "Paneer Butter Masala", image: "paneer.jpg", price: 160, isPureVeg: true }
    ]
  },
  {
    name: "Madurai Idly Shop",
    image: "Madurai.jpg",
    offer: "ITEMS AT ₹129",
    rating: "4.4",
    time: "20-25 mins",
    cuisine: "South Indian, North Indian, Biryani, Tandoor",
    location: "Bus Stand",
    items: [
      { name: "Mini Idly", image: "miniidly.jpg", price: 60, isPureVeg: true },
      { name: "Onion Dosa", image: "oniondosa.jpg", price: 100, isPureVeg: true }
    ]
  }
];

// Category item data
const categoryItems = {
  "Biryani": [
    { name: "Veg Biryani", image: "vegbriyani.jpg", price: 180, restaurant: "Hotel Sai Nath", offer: "25% OFF" },
    { name: "Chicken Biryani", image: "chickenbriyani.jpg", price: 220, restaurant: "Adil Hotel", offer: "FREE ITEM" },
    { name: "Mutton Biryani", image: "muttonbriyani.jpg", price: 280, restaurant: "Satkar Restaurant", offer: "₹50 OFF" },
    { name: "Prawn Biryani", image: "prawnbriyani.jpg", price: 300, restaurant: "Adil Hotel", offer: "20% OFF" },
    { name: "Hyderabadi Biryani", image: "hyderabadi.jpg", price: 250, restaurant: "Satkar Restaurant", offer: "Buy 1 Get 1" },
    { name: "Egg Biryani", image: "eggbriyani.jpg", price: 200, restaurant: "Hotel Sai Nath", offer: "₹30 OFF" }
  ],
  "Pizza": [
    { name: "Margherita Pizza", image: "pizza1.jpg", price: 189, restaurant: "Pizza Hut", offer: "20% OFF" },
    { name: "Veggie Supreme", image: "pizza2.jpg", price: 259, restaurant: "Pizza Hut", offer: "Buy 1 Get 1" },
    { name: "Peppy Paneer", image: "pizza3.jpg", price: 229, restaurant: "Pizza Hut", offer: "₹50 OFF" },
    { name: "Cheese Burst", image: "cheeseburst.jpg", price: 279, restaurant: "Pizza Hut", offer: "15% OFF" },
    { name: "Chicken Supreme", image: "chickensupreme.jpg", price: 299, restaurant: "Pizza Hut", offer: "FREE Drink" }
  ],
  "Noodles": [
    { name: "Veg Hakka Noodles", image: "veg_hakka.jpg", price: 120, restaurant: "Dev International", offer: "15% OFF" },
    { name: "Schezwan Noodles", image: "schezwan_noodles.jpg", price: 150, restaurant: "Adil Hotel", offer: "FREE Drink" },
    { name: "Chicken Noodles", image: "chicken_noodles.jpg", price: 180, restaurant: "Satkar Restaurant", offer: "₹30 OFF" },
    { name: "Veg Chow Mein", image: "vegchowmein.jpg", price: 130, restaurant: "Dev International", offer: "20% OFF" },
    { name: "Singapore Noodles", image: "singaporenoodles.jpg", price: 160, restaurant: "Adil Hotel", offer: "₹25 OFF" }
  ],
  "Khichdi": [
    { name: "Moong Dal Khichdi", image: "moong_khichdi.jpg", price: 90, restaurant: "Jai Ganesh Bhojnalaya", offer: "20% OFF" },
    { name: "Masala Khichdi", image: "masala_khichdi.jpg", price: 110, restaurant: "Hotel Sai Nath", offer: "Free Papad" },
    { name: "Veg Khichdi", image: "veg_khichdi.jpg", price: 100, restaurant: "Madurai Idly Shop", offer: "₹15 OFF" },
    { name: "Masoor Dal Khichdi", image: "masoordal.jpg", price: 95, restaurant: "Jai Ganesh Bhojnalaya", offer: "Buy 1 Get 1" },
    { name: "Spiced Khichdi", image: "spicedkhichdi.jpg", price: 115, restaurant: "Hotel Sai Nath", offer: "₹20 OFF" }
  ],
  "Shake": [
    { name: "Chocolate Shake", image: "choc_shake.jpg", price: 80, restaurant: "Bakery World", offer: "Buy 1 Get 1" },
    { name: "Strawberry Shake", image: "straw_shake.jpg", price: 85, restaurant: "Bakery World", offer: "20% OFF" },
    { name: "Vanilla Shake", image: "vanilla_shake.jpg", price: 75, restaurant: "Madurai Idly Shop", offer: "₹10 OFF" },
    { name: "Banana Shake", image: "bananashake.jpg", price: 80, restaurant: "Bakery World", offer: "15% OFF" },
    { name: "Mango Shake", image: "mangoshake.jpg", price: 90, restaurant: "Madurai Idly Shop", offer: "₹15 OFF" }
  ],
  "Chole Bhature": [
    { name: "Chole Bhature Plate", image: "chole_bhature.jpg", price: 120, restaurant: "Satkar Restaurant", offer: "25% OFF" },
    { name: "Spicy Chole", image: "spicy_chole.jpg", price: 100, restaurant: "Jai Ganesh Bhojnalaya", offer: "Free Pickle" },
    { name: "Chole with Extra Bhature", image: "extra_bhature.jpg", price: 150, restaurant: "Hotel Sai Nath", offer: "₹30 OFF" },
    { name: "Chole with Roti", image: "cholerooti.jpg", price: 110, restaurant: "Satkar Restaurant", offer: "20% OFF" },
    { name: "Masala Chole", image: "masalachole.jpg", price: 105, restaurant: "Jai Ganesh Bhojnalaya", offer: "₹15 OFF" }
  ],
  "Tea": [
    { name: "Masala Tea", image: "masala_tea.jpg", price: 20, restaurant: "Madurai Idly Shop", offer: "Buy 2 Get 1" },
    { name: "Ginger Tea", image: "ginger_tea.jpg", price: 25, restaurant: "Satkar Restaurant", offer: "15% OFF" },
    { name: "Green Tea", image: "green_tea.jpg", price: 30, restaurant: "Bakery World", offer: "₹5 OFF" },
    { name: "Cardamom Tea", image: "cardamomtea.jpg", price: 22, restaurant: "Madurai Idly Shop", offer: "Buy 1 Get 1" },
    { name: "Lemon Tea", image: "lemontea.jpg", price: 25, restaurant: "Satkar Restaurant", offer: "₹10 OFF" }
  ],
  "Lassi": [
    { name: "Sweet Lassi", image: "sweetlassi.jpg", price: 60, restaurant: "Bakery World", offer: "Buy 1 Get 1" },
    { name: "Mango Lassi", image: "mangolassi.jpg", price: 80, restaurant: "Jai Ganesh Bhojnalaya", offer: "20% OFF" },
    { name: "Salty Lassi", image: "saltylassi.jpg", price: 65, restaurant: "Madurai Idly Shop", offer: "₹10 OFF" },
    { name: "Rose Lassi", image: "roselassi.jpg", price: 70, restaurant: "Bakery World", offer: "15% OFF" },
    { name: "Banana Lassi", image: "bananalassi.jpg", price: 75, restaurant: "Jai Ganesh Bhojnalaya", offer: "₹20 OFF" }
  ],
  "Homely food": [
    { name: "Dal Tadka", image: "dal_tadka.jpg", price: 90, restaurant: "Hotel Sai Nath", offer: "25% OFF" },
    { name: "Roti Sabzi", image: "roti_sabzi.jpg", price: 100, restaurant: "Jai Ganesh Bhojnalaya", offer: "Free Roti" },
    { name: "Rice Curry", image: "rice_curry.jpg", price: 120, restaurant: "Satkar Restaurant", offer: "₹20 OFF" },
    { name: "Aloo Matar", image: "aloomatarr.jpg", price: 95, restaurant: "Hotel Sai Nath", offer: "20% OFF" },
    { name: "Paneer Sabzi", image: "paneersabzi.jpg", price: 130, restaurant: "Jai Ganesh Bhojnalaya", offer: "₹25 OFF" }
  ],
  "Paratha": [
    { name: "Aloo Paratha", image: "alooparatha.jpg", price: 70, restaurant: "Hotel Sai Nath", offer: "2 for 1" },
    { name: "Paneer Paratha", image: "paneerparatha.jpg", price: 90, restaurant: "Satkar Restaurant", offer: "25% OFF" },
    { name: "Gobi Paratha", image: "gobiparatha.jpg", price: 75, restaurant: "Jai Ganesh Bhojnalaya", offer: "FREE Raita" }
  ]
};

// ========== Scroll Categories Function ==========
function scrollCategories(direction) {
  const container = document.getElementById("categoryScroll");
  if (container) container.scrollLeft += direction * 300;
}

// ========== Show Category Items Function ==========
function showCategoryItems(category) {
  const section = document.getElementById("categoryItemsSection");
  const title = document.getElementById("categoryTitle");
  const container = document.getElementById("categoryItemsContainer");

  if (!section || !title || !container) {
    console.error("One or more DOM elements not found");
    return;
  }


  title.textContent = `${category} Items`;
  container.innerHTML = "";

  if (categoryItems[category]) {
    categoryItems[category].forEach(item => {
      const card = document.createElement("div");
      card.className = "category-item-card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onerror="this.src='placeholder.jpg';">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>
        <p class="offer"><small>${item.restaurant} | ${item.offer}</small></p>
        <button onclick="addToCart('${item.name}', '${item.image}', ${item.price})">Add to Cart</button>
      `;
      container.appendChild(card);
    });
    section.classList.add("active");
  } else {
    section.classList.remove("active");
  }
}

// ========== Show Offer Items Function (Updated) ==========
function showOfferItems() {
  window.location.href = "offers.html"; // Redirect to offers page
}

// ========== Render Restaurants Function ==========
function renderRestaurants(containerId, data, showItems = false) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container ${containerId} not found`);
    return;
  }
  container.innerHTML = "";

  data.forEach(rest => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.innerHTML = `
      <img src="${rest.image}" alt="${rest.name}" onerror="this.src='placeholder.jpg';">
      <div class="restaurant-info">
        <p><strong>${rest.offer}</strong></p>
        <h3>${rest.name}</h3>
        <p>⭐ ${rest.rating} · ${rest.time}</p>
        <p>${rest.cuisine}</p>
        <p>${rest.location}</p>
      </div>
    `;

    if (showItems && rest.items) {
      const menu = document.createElement("div");
      menu.className = "restaurant-menu";

      rest.items.forEach(item => {
        const itemCard = document.createElement("div");
        itemCard.className = "menu-item";
        itemCard.innerHTML = `
          <img src="${item.image}" alt="${item.name}" onerror="this.src='placeholder.jpg';">
          <div>
            <p><strong>${item.name}</strong></p>
            <p>₹${item.price}</p>
            <button onclick="addToCart('${item.name}', '${item.image}', ${item.price})">Add to Cart</button>
          </div>
        `;
        menu.appendChild(itemCard);
      });

      card.appendChild(menu);
    }

    container.appendChild(card);
  });
}

renderRestaurants("topRestaurants", topRestaurants);
renderRestaurants("onlineRestaurants", onlineRestaurants, true);

// ========== Add to Cart Function ==========
function addToCart(name, image, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.name === name);

  if (index !== -1) {
    cart[index].qty += 1;
  } else {
    cart.push({ name, image, price, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// ========== Modal Functions ==========
function toggleLoginModal() {
  const modal = document.getElementById("loginModal");
  if (modal) modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function loginUser() {
  const username = document.getElementById("username")?.value || "";
  const password = document.getElementById("password")?.value || "";
  if (username && password) {
    alert("Login successful!");
    toggleLoginModal();
  } else {
    alert("Please fill all fields!");
  }
}
// In script.js or payment.js
function completeOrder() {
  // ... Save order, clear cart, etc.
  window.location.href = "confirmation.html"; // Ensure this file exists
}
function placeCODOrder() {
  // Save cart to order history, etc.
  window.location.href = "confirmation.html";
}
// ========== Restaurant Render Updates ==========
function renderRestaurants(containerId, data, toggleItemsOnClick = false) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  data.forEach(rest => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.innerHTML = `
      <img src="${rest.image}" alt="${rest.name}" onerror="this.src='placeholder.jpg';">
      <div class="restaurant-info">
        <p><strong>${rest.offer}</strong></p>
        <h3>${rest.name}</h3>
        <p>⭐ ${rest.rating} · ${rest.time}</p>
        <p>${rest.cuisine}</p>
        <p>${rest.location}</p>
      </div>
    `;

    if (toggleItemsOnClick && rest.items) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        const existingMenu = card.querySelector(".restaurant-menu");
        if (existingMenu) {
          existingMenu.remove();
        } else {
          const menu = document.createElement("div");
          menu.className = "restaurant-menu";
          rest.items.forEach(item => {
            const itemCard = document.createElement("div");
            itemCard.className = "menu-item";
            itemCard.innerHTML = `
              <img src="${item.image}" alt="${item.name}" onerror="this.src='placeholder.jpg';">
              <div>
                <p><strong>${item.name}</strong></p>
                <p>₹${item.price}</p>
                <button onclick="addToCart('${item.name}', '${item.image}', ${item.price})">Add to Cart</button>
              </div>
            `;
            menu.appendChild(itemCard);
          });
          card.appendChild(menu);
        }
      });
    }

    container.appendChild(card);
  });
}

renderRestaurants("topRestaurants", topRestaurants, true);
renderRestaurants("onlineRestaurants", onlineRestaurants, true);
function logoutUser() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      alert('You have been logged out!');
      location.reload();
    }
    function logoutUser() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      alert('You have been logged out!');
      window.location.href = 'login.html';
    }