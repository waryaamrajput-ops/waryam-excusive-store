// =========================
// Exclusive Store - app.js
// =========================


// -------------------------
// Product Data
// -------------------------

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 96,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "The North Coat",
    price: 260,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name: "Premium Duffle Bag",
    price: 960,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    name: "RGB Liquid CPU Cooler",
    price: 160,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    name: "Small Bookshelf",
    price: 360,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9,
    name: "Breed Dry Dog Food",
    price: 100,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 10,
    name: "Canon EOS DSLR Camera",
    price: 360,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 11,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 12,
    name: "Premium Beauty Set",
    price: 500,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&q=80"
  }
];


// -------------------------
// Local Storage
// -------------------------

let cart = JSON.parse(localStorage.getItem("exclusiveCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("exclusiveWishlist")) || [];

function saveCart() {
  localStorage.setItem("exclusiveCart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("exclusiveWishlist", JSON.stringify(wishlist));
}


// -------------------------
// Top Promo Slider
// -------------------------

const promoSlides = document.querySelectorAll(".promo-slide");
const promoPrev = document.getElementById("promoPrev");
const promoNext = document.getElementById("promoNext");

let promoIndex = 0;
let promoTimer;

function showPromoSlide(index) {
  if (!promoSlides.length) return;

  promoIndex = (index + promoSlides.length) % promoSlides.length;

  promoSlides.forEach((slide, i) => {
    if (i === promoIndex) {
      slide.classList.remove("hidden");
      slide.classList.add("flex");
    } else {
      slide.classList.add("hidden");
      slide.classList.remove("flex");
    }
  });
}

function startPromoSlider() {
  clearInterval(promoTimer);

  promoTimer = setInterval(() => {
    showPromoSlide(promoIndex + 1);
  }, 3500);
}

if (promoPrev) {
  promoPrev.addEventListener("click", () => {
    showPromoSlide(promoIndex - 1);
    startPromoSlider();
  });
}

if (promoNext) {
  promoNext.addEventListener("click", () => {
    showPromoSlide(promoIndex + 1);
    startPromoSlider();
  });
}

showPromoSlide(0);
startPromoSlider();


// -------------------------
// Main Hero Slider
// -------------------------

const heroSlider = document.getElementById("heroSlider");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");

const heroData = [
  {
    label: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    icon: '<i class="fa-brands fa-apple text-5xl"></i>',
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=900&q=85"
  },
  {
    label: "Gaming Collection",
    title: "Upgrade Your Gaming Setup",
    icon: '<i class="fa-solid fa-gamepad text-5xl"></i>',
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=900&q=85"
  },
  {
    label: "Premium Audio",
    title: "Feel Every Beat",
    icon: '<i class="fa-solid fa-headphones text-5xl"></i>',
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85"
  }
];

let heroIndex = 0;
let heroTimer;

function updateHeroSlider() {
  if (!heroSlider) return;

  const slide = heroData[heroIndex];

  const content = heroSlider.querySelector(
    ".grid.md\\:grid-cols-2"
  );

  if (!content) return;

  const textArea = content.children[0];
  const imageArea = content.children[1];

  if (textArea) {
    textArea.innerHTML = `
      <div class="flex items-center gap-4 mb-5">
        ${slide.icon}
        <span>${slide.label}</span>
      </div>

      <h1 class="text-4xl md:text-5xl font-semibold leading-tight">
        ${slide.title}
      </h1>

      <a
        href="#products"
        class="mt-8 inline-flex items-center gap-3
        border-b border-white pb-1 w-fit"
      >
        Shop Now
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    `;
  }

  if (imageArea) {
    imageArea.innerHTML = `
      <img
        src="${slide.image}"
        alt="${slide.label}"
        class="w-full h-[320px] object-cover rounded-lg"
      >
    `;
  }

  updateHeroDots();
}

function updateHeroDots() {
  if (!heroSlider) return;

  const dots = heroSlider.querySelectorAll(
    ".absolute.bottom-5 button"
  );

  dots.forEach((dot, index) => {
    if (index === heroIndex) {
      dot.classList.add(
        "bg-primary",
        "border-2",
        "border-white"
      );

      dot.classList.remove("bg-gray-500");
    } else {
      dot.classList.remove(
        "bg-primary",
        "border-2",
        "border-white"
      );

      dot.classList.add("bg-gray-500");
    }
  });
}

function showNextHero() {
  heroIndex = (heroIndex + 1) % heroData.length;
  updateHeroSlider();
}

function showPreviousHero() {
  heroIndex =
    (heroIndex - 1 + heroData.length) %
    heroData.length;

  updateHeroSlider();
}

function startHeroSlider() {
  clearInterval(heroTimer);

  heroTimer = setInterval(() => {
    showNextHero();
  }, 4500);
}

if (heroNext) {
  heroNext.addEventListener("click", () => {
    showNextHero();
    startHeroSlider();
  });
}

if (heroPrev) {
  heroPrev.addEventListener("click", () => {
    showPreviousHero();
    startHeroSlider();
  });
}

if (heroSlider) {
  const dots = heroSlider.querySelectorAll(
    ".absolute.bottom-5 button"
  );

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      heroIndex = index;
      updateHeroSlider();
      startHeroSlider();
    });
  });
}

startHeroSlider();


// -------------------------
// Product Cards Setup
// -------------------------

const productCards = document.querySelectorAll("article.group");

productCards.forEach((card, index) => {
  const product = products[index];

  if (!product) return;

  card.dataset.productId = product.id;
  card.dataset.productName = product.name.toLowerCase();

  const buttons = card.querySelectorAll("button");

  buttons.forEach(button => {
    const icon = button.querySelector("i");

    if (
      icon &&
      (
        icon.classList.contains("fa-heart") ||
        icon.classList.contains("fa-regular")
      )
    ) {
      if (icon.classList.contains("fa-heart")) {
        button.dataset.action = "wishlist";
      }
    }

    if (
      button.textContent
        .trim()
        .toLowerCase()
        .includes("add to cart")
    ) {
      button.dataset.action = "cart";
    }
  });
});


// -------------------------
// Add To Cart
// -------------------------

function addToCart(productId) {
  const product = products.find(
    item => item.id === productId
  );

  if (!product) return;

  const existingItem = cart.find(
    item => item.id === productId
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();

  showNotification(`${product.name} added to cart`);
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");

  if (!cartCount) return;

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  cartCount.textContent = totalItems;
}


// -------------------------
// Wishlist
// -------------------------

function toggleWishlist(productId, button) {
  const product = products.find(
    item => item.id === productId
  );

  if (!product) return;

  const icon = button.querySelector(".fa-heart");

  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(
      id => id !== productId
    );

    if (icon) {
      icon.classList.remove(
        "fa-solid",
        "text-primary"
      );

      icon.classList.add("fa-regular");
    }

    showNotification(
      `${product.name} removed from wishlist`
    );
  } else {
    wishlist.push(productId);

    if (icon) {
      icon.classList.remove("fa-regular");

      icon.classList.add(
        "fa-solid",
        "text-primary"
      );
    }

    showNotification(
      `${product.name} added to wishlist`
    );
  }

  saveWishlist();
  updateWishlistCount();
}

function updateWishlistCount() {
  const wishlistCount =
    document.getElementById("wishlistCount");

  if (!wishlistCount) return;

  wishlistCount.textContent = wishlist.length;
}


// -------------------------
// Product Button Events
// -------------------------

productCards.forEach(card => {
  const productId = Number(card.dataset.productId);

  const cartButton = card.querySelector(
    '[data-action="cart"]'
  );

  const wishlistButton = card.querySelector(
    '[data-action="wishlist"]'
  );

  if (cartButton) {
    cartButton.addEventListener("click", () => {
      addToCart(productId);
    });
  }

  if (wishlistButton) {
    wishlistButton.addEventListener("click", () => {
      toggleWishlist(
        productId,
        wishlistButton
      );
    });
  }
});


// -------------------------
// Restore Wishlist Icons
// -------------------------

function restoreWishlistIcons() {
  productCards.forEach(card => {
    const productId =
      Number(card.dataset.productId);

    if (!wishlist.includes(productId)) {
      return;
    }

    const button = card.querySelector(
      '[data-action="wishlist"]'
    );

    if (!button) return;

    const icon = button.querySelector(".fa-heart");

    if (!icon) return;

    icon.classList.remove("fa-regular");

    icon.classList.add(
      "fa-solid",
      "text-primary"
    );
  });
}


// -------------------------
// Search Products
// -------------------------

const searchInput =
  document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", event => {
    const searchText =
      event.target.value.trim().toLowerCase();

    productCards.forEach(card => {
      const productName =
        card.dataset.productName || "";

      if (productName.includes(searchText)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}


// -------------------------
// Countdown
// -------------------------

let countdownSeconds =
  3 * 24 * 60 * 60 +
  23 * 60 * 60 +
  19 * 60 +
  56;

function updateCountdown() {
  const daysElement =
    document.getElementById("days");

  const hoursElement =
    document.getElementById("hours");

  const minutesElement =
    document.getElementById("minutes");

  const secondsElement =
    document.getElementById("seconds");

  if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
  ) {
    return;
  }

  if (countdownSeconds <= 0) {
    countdownSeconds =
      4 * 24 * 60 * 60;
  }

  const days = Math.floor(
    countdownSeconds / 86400
  );

  const hours = Math.floor(
    (countdownSeconds % 86400) / 3600
  );

  const minutes = Math.floor(
    (countdownSeconds % 3600) / 60
  );

  const seconds =
    countdownSeconds % 60;

  daysElement.textContent =
    String(days).padStart(2, "0");

  hoursElement.textContent =
    String(hours).padStart(2, "0");

  minutesElement.textContent =
    String(minutes).padStart(2, "0");

  secondsElement.textContent =
    String(seconds).padStart(2, "0");

  countdownSeconds--;
}

updateCountdown();

setInterval(updateCountdown, 1000);


// -------------------------
// Mobile Menu
// -------------------------

const menuBtn =
  document.getElementById("menuBtn");

const navbar =
  document.querySelector("header nav");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("hidden");

    navbar.classList.toggle("absolute");
    navbar.classList.toggle("top-20");
    navbar.classList.toggle("left-0");
    navbar.classList.toggle("w-full");
    navbar.classList.toggle("bg-white");
    navbar.classList.toggle("p-6");
    navbar.classList.toggle("shadow-lg");
    navbar.classList.toggle("flex-col");

    const icon =
      menuBtn.querySelector("i");

    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }
  });
}


// -------------------------
// Smooth Scrolling
// -------------------------

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {
    link.addEventListener("click", event => {
      const href =
        link.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const target =
        document.querySelector(href);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


// -------------------------
// Login Form
// -------------------------

const loginSection =
  document.getElementById("login");

if (loginSection) {
  const loginForm =
    loginSection.querySelector("form");

  const loginButton =
    loginForm?.querySelector("button");

  if (loginForm && loginButton) {
    loginButton.addEventListener(
      "click",
      () => {
        const inputs =
          loginForm.querySelectorAll("input");

        const email =
          inputs[0]?.value.trim();

        const password =
          inputs[1]?.value.trim();

        if (!email || !password) {
          showNotification(
            "Please enter email and password"
          );

          return;
        }

        showNotification(
          "Login successful"
        );

        loginForm.reset();
      }
    );
  }
}


// -------------------------
// Signup Form
// -------------------------

const signupSection =
  document.getElementById("signup");

if (signupSection) {
  const signupForm =
    signupSection.querySelector("form");

  const signupButton =
    signupForm?.querySelector("button");

  if (signupForm && signupButton) {
    signupButton.addEventListener(
      "click",
      () => {
        const inputs =
          signupForm.querySelectorAll("input");

        const name =
          inputs[0]?.value.trim();

        const email =
          inputs[1]?.value.trim();

        const password =
          inputs[2]?.value.trim();

        if (
          !name ||
          !email ||
          !password
        ) {
          showNotification(
            "Please fill all signup fields"
          );

          return;
        }

        if (password.length < 6) {
          showNotification(
            "Password must be at least 6 characters"
          );

          return;
        }

        showNotification(
          "Account created successfully"
        );

        signupForm.reset();
      }
    );
  }
}


// -------------------------
// Contact Form
// -------------------------

const contactSection =
  document.getElementById("contact");

if (contactSection) {
  const contactForm =
    contactSection.querySelector("form");

  const contactButton =
    contactForm?.querySelector("button");

  if (contactForm && contactButton) {
    contactButton.addEventListener(
      "click",
      () => {
        const name =
          contactForm
            .querySelector(
              'input[type="text"]'
            )
            ?.value.trim();

        const email =
          contactForm
            .querySelector(
              'input[type="email"]'
            )
            ?.value.trim();

        const message =
          contactForm
            .querySelector("textarea")
            ?.value.trim();

        if (!name || !email || !message) {
          showNotification(
            "Please complete the contact form"
          );

          return;
        }

        showNotification(
          "Message sent successfully"
        );

        contactForm.reset();
      }
    );
  }
}


// -------------------------
// Simple Notification
// -------------------------

function showNotification(message) {
  const oldNotification =
    document.getElementById(
      "storeNotification"
    );

  if (oldNotification) {
    oldNotification.remove();
  }

  const notification =
    document.createElement("div");

  notification.id =
    "storeNotification";

  notification.textContent =
    message;

  notification.className = `
    fixed
    bottom-6
    left-1/2
    -translate-x-1/2
    bg-black
    text-white
    px-6
    py-3
    rounded
    shadow-xl
    z-[100]
    text-sm
  `;

  document.body.appendChild(
    notification
  );

  setTimeout(() => {
    notification.remove();
  }, 2200);
}


// -------------------------
// Initial Setup
// -------------------------

updateCartCount();
updateWishlistCount();
restoreWishlistIcons();