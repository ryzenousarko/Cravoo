// =====================================================
// CRAVOO FOOD DELIVERY APP
// =====================================================


// =====================================================
// GLOBAL DATA
// =====================================================

let cart = [];


// =====================================================
// LOCAL STORAGE HELPERS
// =====================================================

function getUsers() {

    return JSON.parse(
        localStorage.getItem("cravooUsers")
    ) || [];

}


function saveUsers(users) {

    localStorage.setItem(
        "cravooUsers",
        JSON.stringify(users)
    );

}


function getCurrentUser() {

    return JSON.parse(
        localStorage.getItem("cravooCurrentUser")
    );

}


function saveCurrentUser(user) {

    localStorage.setItem(
        "cravooCurrentUser",
        JSON.stringify(user)
    );

}


// =====================================================
// LOGIN / SIGNUP
// =====================================================

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("show");

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("show");

}


function openSignup() {

    document
        .getElementById("signupModal")
        .classList.add("show");

}


function closeSignup() {

    document
        .getElementById("signupModal")
        .classList.remove("show");

}


function showSignup() {

    closeLogin();

    openSignup();

}


function showLogin() {

    closeSignup();

    openLogin();

}


// =====================================================
// SIGNUP
// =====================================================

function signupUser(event) {

    event.preventDefault();


    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value
        .trim()
        .toLowerCase();

    const phone =
        document.getElementById("signupPhone").value.trim();

    const password =
        document.getElementById("signupPassword").value;


    let users = getUsers();


    const existingUser =
        users.find(user => user.email === email);


    if (existingUser) {

        alert(
            "An account with this email already exists."
        );

        return;

    }


    const newUser = {

        id: Date.now(),

        name: name,

        email: email,

        phone: phone,

        password: password,

        orders: [],

        favorites: []

    };


    users.push(newUser);

    saveUsers(users);

    saveCurrentUser(newUser);


    closeSignup();

    updateUserArea();

    alert(
        "Account created successfully! Welcome to Cravoo 🎉"
    );

}


// =====================================================
// LOGIN
// =====================================================

function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail").value
        .trim()
        .toLowerCase();

    const password =
        document.getElementById("loginPassword").value;


    const users = getUsers();


    const user =
        users.find(
            u =>
                u.email === email &&
                u.password === password
        );


    if (!user) {

        alert(
            "Incorrect email or password."
        );

        return;

    }


    saveCurrentUser(user);

    closeLogin();

    updateUserArea();


    alert(
        `Welcome back, ${user.name}! 👋`
    );

}


// =====================================================
// USER AREA
// =====================================================

function updateUserArea() {

    const userArea =
        document.getElementById("userArea");

    const user =
        getCurrentUser();


    if (!user) {

        userArea.innerHTML = `

            <button
                class="login-nav-btn"
                onclick="openLogin()"
            >
                Login / Signup
            </button>

        `;

        return;

    }


    userArea.innerHTML = `

        <button
            class="login-nav-btn"
            onclick="openProfile()"
        >
            👤 ${user.name.split(" ")[0]}
        </button>

    `;

}


// =====================================================
// LOGOUT
// =====================================================

function logoutUser() {

    localStorage.removeItem(
        "cravooCurrentUser"
    );

    closeProfile();

    updateUserArea();

    alert(
        "You have been logged out."
    );

}


// =====================================================
// PROFILE
// =====================================================

function openProfile() {

    const user =
        getCurrentUser();


    if (!user) {

        openLogin();

        return;

    }


    document.getElementById("profileName")
        .innerText = user.name;


    document.getElementById("profileEmail")
        .innerText = user.email;


    document.getElementById("orderCount")
        .innerText =
        user.orders ? user.orders.length : 0;


    document.getElementById("favoriteCount")
        .innerText =
        user.favorites ? user.favorites.length : 0;


    document
        .getElementById("profileModal")
        .classList.add("show");

}


function closeProfile() {

    document
        .getElementById("profileModal")
        .classList.remove("show");

}


// =====================================================
// CART
// =====================================================

function addToCart(name, price) {

    const existingItem =
        cart.find(item => item.name === name);


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }


    updateCart();

    openCart();

}


function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cart-count");


    let totalItems = 0;

    let subtotal = 0;


    cart.forEach(item => {

        totalItems += item.quantity;

        subtotal +=
            item.price * item.quantity;

    });


    cartCount.innerText =
        totalItems;


    document.getElementById("subtotal")
        .innerText = subtotal;


    document.getElementById("total")
        .innerText =
        subtotal > 0
            ? subtotal + 40
            : 40;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add some delicious food!
                </p>

            </div>

        `;

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-icon">
                🍽️
            </div>

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ₹${item.price}
                </p>

            </div>

            <div class="quantity">

                <button
                    onclick="changeQuantity(${index}, -1)"
                >
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="changeQuantity(${index}, 1)"
                >
                    +
                </button>

            </div>

        `;


        cartItems.appendChild(
            cartItem
        );

    });

}


function changeQuantity(index, change) {

    cart[index].quantity += change;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

}


function openCart() {

    document
        .getElementById("cart")
        .classList.add("open");


    document
        .getElementById("overlay")
        .classList.add("show");

}


function closeCart() {

    document
        .getElementById("cart")
        .classList.remove("open");


    document
        .getElementById("overlay")
        .classList.remove("show");

}


// =====================================================
// CATEGORY FILTER
// =====================================================

function filterCategory(category, button) {

    const foodCards =
        document.querySelectorAll(".food-card");


    const buttons =
        document.querySelectorAll(".category");


    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    button.classList.add("active");


    let visible = 0;


    foodCards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display =
                "block";

            visible++;

        } else {

            card.style.display =
                "none";

        }

    });


    document.getElementById("noResults")
        .style.display =
        visible === 0
            ? "block"
            : "none";

}


// =====================================================
// SEARCH
// =====================================================

function searchFood() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const foodCards =
        document.querySelectorAll(".food-card");


    let visible = 0;


    foodCards.forEach(card => {

        const name =
            card.dataset.name
            .toLowerCase();


        const category =
            card.dataset.category
            .toLowerCase();


        const text =
            card.innerText
            .toLowerCase();


        if (
            name.includes(search) ||
            category.includes(search) ||
            text.includes(search)
        ) {

            card.style.display =
                "block";

            visible++;

        } else {

            card.style.display =
                "none";

        }

    });


    document.getElementById("noResults")
        .style.display =
        visible === 0
            ? "block"
            : "none";

}


// =====================================================
// FAVORITES
// =====================================================

function toggleFavorite(button, foodName) {

    const user =
        getCurrentUser();


    if (!user) {

        alert(
            "Please login to save favourites ❤️"
        );

        openLogin();

        return;

    }


    let users =
        getUsers();


    const userIndex =
        users.findIndex(
            u => u.id === user.id
        );


    if (!users[userIndex].favorites) {

        users[userIndex].favorites = [];

    }


    const favorites =
        users[userIndex].favorites;


    const existing =
        favorites.indexOf(foodName);


    if (existing === -1) {

        favorites.push(foodName);

        button.classList.add("liked");

        button.innerText = "♥";

        alert(
            `${foodName} added to favourites ❤️`
        );

    } else {

        favorites.splice(existing, 1);

        button.classList.remove("liked");

        button.innerText = "♡";

    }


    saveUsers(users);

    saveCurrentUser(users[userIndex]);


    updateUserArea();

}


// =====================================================
// CHECKOUT
// =====================================================

function openCheckout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty! Add some food first 🍔"
        );

        return;

    }


    const user =
        getCurrentUser();


    if (!user) {

        alert(
            "Please login before placing an order."
        );

        closeCart();

        openLogin();

        return;

    }


    document.getElementById("customerName")
        .value = user.name;


    document.getElementById("customerPhone")
        .value = user.phone;


    closeCart();


    document
        .getElementById("checkoutModal")
        .classList.add("show");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("show");

}


// =====================================================
// PLACE ORDER
// =====================================================

function placeOrder(event) {

    event.preventDefault();


    const user =
        getCurrentUser();


    if (!user) {

        alert(
            "Please login first."
        );

        return;

    }


    const name =
        document.getElementById("customerName")
        .value;


    const phone =
        document.getElementById("customerPhone")
        .value;


    const address =
        document.getElementById("customerAddress")
        .value;


    const payment =
        document.getElementById("paymentMethod")
        .value;


    let subtotal = 0;


    cart.forEach(item => {

        subtotal +=
            item.price * item.quantity;

    });


    const order = {

        id:
            "CRV" +
            Math.floor(
                100000 +
                Math.random() * 900000
            ),

        date:
            new Date().toLocaleString(),

        items:
            [...cart],

        subtotal:
            subtotal,

        delivery:
            40,

        total:
            subtotal + 40,

        name:
            name,

        phone:
            phone,

        address:
            address,

        payment:
            payment,

        status:
            "Order Confirmed"

    };


    let users =
        getUsers();


    const userIndex =
        users.findIndex(
            u => u.id === user.id
        );


    if (!users[userIndex].orders) {

        users[userIndex].orders = [];

    }


    users[userIndex].orders.unshift(
        order
    );


    saveUsers(users);

    saveCurrentUser(users[userIndex]);


    closeCheckout();


    document.getElementById("successName")
        .innerText = name;


    document
        .getElementById("successModal")
        .classList.add("show");


    cart = [];

    updateCart();

}


// =====================================================
// SUCCESS
// =====================================================

function closeSuccess() {

    document
        .getElementById("successModal")
        .classList.remove("show");

}


// =====================================================
// ORDERS
// =====================================================

function showOrders() {

    closeProfile();


    const user =
        getCurrentUser();


    const ordersList =
        document.getElementById("ordersList");


    if (
        !user ||
        !user.orders ||
        user.orders.length === 0
    ) {

        ordersList.innerHTML = `

            <div class="empty-cart">

                <div>
                    📦
                </div>

                <h3>
                    No orders yet
                </h3>

                <p>
                    Your delicious journey starts here!
                </p>

            </div>

        `;

    } else {

        ordersList.innerHTML = "";


        user.orders.forEach(order => {

            const itemNames =
                order.items
                .map(
                    item =>
                        `${item.name} × ${item.quantity}`
                )
                .join(", ");


            const orderElement =
                document.createElement("div");


            orderElement.className =
                "order-card";


            orderElement.innerHTML = `

                <h4>
                    Order #${order.id}
                </h4>

                <p>
                    ${order.date}
                </p>

                <p>
                    ${itemNames}
                </p>

                <p>
                    <strong>
                        Total: ₹${order.total}
                    </strong>
                </p>

                <span class="order-status">
                    ${order.status}
                </span>

            `;


            ordersList.appendChild(
                orderElement
            );

        });

    }


    document
        .getElementById("ordersModal")
        .classList.add("show");

}


function closeOrders() {

    document
        .getElementById("ordersModal")
        .classList.remove("show");

}


// =====================================================
// INITIALIZE APP
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCart();

        updateUserArea();

    }
);
