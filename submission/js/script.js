// ===============================
// 1. Dynamic Services (Loop Rendering)
// ===============================

const services = [
    {
        name: "Personal Training",
        description: "One-on-one fitness coaching.",
        price: "KSh 3,000"
    },
    {
        name: "Weight Loss Program",
        description: "Customized weight loss plans.",
        price: "KSh 4,500"
    },
    {
        name: "Strength Training",
        description: "Build muscle and improve endurance.",
        price: "KSh 3,500"
    },
    {
        name: "Nutrition Coaching",
        description: "Healthy meal planning and guidance.",
        price: "KSh 2,000"
    }
];

const serviceList = document.getElementById("serviceList");

services.forEach(service => {

    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <strong>${service.price}</strong>
    `;

    serviceList.appendChild(card);

});


// ===============================
// 2. Add & Remove Workout Wishlist
// ===============================

const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

function saveWorkouts() {
    localStorage.setItem("workouts", JSON.stringify(workouts));
}

function displayWorkouts() {

    itemList.innerHTML = "";

    workouts.forEach((workout, index) => {

        const li = document.createElement("li");

        li.textContent = workout + " ";

        const removeBtn = document.createElement("button");

        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", function () {

            workouts.splice(index, 1);

            saveWorkouts();

            displayWorkouts();

        });

        li.appendChild(removeBtn);

        itemList.appendChild(li);

    });

}

displayWorkouts();

addBtn.addEventListener("click", function () {

    const workout = input.value.trim();

    if (workout === "") {

        alert("Please enter a workout.");

        return;

    }

    workouts.push(workout);

    saveWorkouts();

    displayWorkouts();

    input.value = "";

});


// ===============================
// 3. Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {

        message.textContent = "Please fill in all fields.";

        message.style.color = "red";

        return;

    }

    message.textContent = "Thank you, " + name + "! Your message has been received.";

    message.style.color = "green";

    localStorage.setItem("visitorName", name);

    form.reset();

});


// ===============================
// 4. Local Storage
// ===============================

const savedName = localStorage.getItem("visitorName");

if (savedName) {

    message.textContent = "Welcome back, " + savedName + "!";

    message.style.color = "blue";

}


// ===============================
// 5. Banner Click-to-Reveal
// ===============================

const banner = document.getElementById("banner");

const caption = document.getElementById("bannerCaption");

banner.addEventListener("click", function () {

    caption.classList.toggle("hidden");

});