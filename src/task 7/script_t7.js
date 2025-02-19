document.getElementById("changeTitle").addEventListener("click", function() {
    document.getElementById("title").textContent = "Заголовок змінено!";
});

function greetUser(name) {
    console.log("Привіт, " + name + "!");
}

greetUser("Дмитро");

function checkAge() {
    let age = prompt("Введіть свій вік:");

    if (isNaN(age) || age.trim() === "") {
        alert("Будь ласка, введіть число!");
        checkAge(); 
    } else if (age < 18) {
        alert("Доступ заборонено");
    } else {
        alert("Доступ дозволено");
    }
}

checkAge();