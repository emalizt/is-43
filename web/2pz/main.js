// Задание 1. Анкета пользователя

const name = "Иван";
const age = 20;
const city = "Москва";

console.log("Пользователь: " + name);
console.log("Возраст: " + age);
console.log("Город: " + city);


// Задание 2. Проверка доступа к мероприятию

const visitorAge = 18;

if (visitorAge >= 16) {
    console.log("Вход разрешён");
} else {
    console.log("Вход запрещён");
}


// Задание 3. Список покупок

const products = ["Хлеб", "Молоко", "Яблоки", "Сыр", "Сок"];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + ". " + products[i]);
}


// Задание 4. Добавление товара в корзину

const cart = ["Ноутбук", "Мышь", "Клавиатура"];

cart.push("Наушники");

console.log("Обновленный список товаров:");
console.log(cart);


// Задание 5. Каталог товаров

const prices = [150, 300, 450, 800];

const newPrices = prices.map(price => price * 1.2);

console.log("Исходные цены:", prices);
console.log("Цены после увеличения на 20%:", newPrices);


// Задание 6. Поиск товара

const goods = ["Ноутбук", "Мышь", "Клавиатура", "Монитор"];

const foundProduct = goods.find(product => product === "Монитор");

console.log("Найденный товар:", foundProduct);


// Задание 7. Информация о студенте

const student = {
    name: "Иван",
    group: "П-21",
    course: 2
};

console.log("Имя:", student.name);
console.log("Группа:", student.group);
console.log("Курс:", student.course);


// Задание 8. Электронный дневник

const pupil = {
    name: "Анна",
    grade: 4
};

pupil.attendance = "100%";

console.log("Информация об ученике:");
console.log(pupil);


// Задание 9. Расчет стоимости заказа

function calculateOrder(price, quantity) {
    return price * quantity;
}

const total = calculateOrder(500, 3);

console.log("Итоговая стоимость:", total);


// Задание 10. Интернет-магазин

const shop = [
    {
        name: "Наушники",
        price: 2500
    },
    {
        name: "Мышь",
        price: 1500
    },
    {
        name: "Клавиатура",
        price: 3000
    }
];

for (const product of shop) {
    console.log(product.name + " — " + product.price + " руб.");
}


// Задание 11. Сотрудники компании

const employees = [
    {
        name: "Иван",
        position: "Программист",
        salary: 85000
    },
    {
        name: "Анна",
        position: "Дизайнер",
        salary: 65000
    },
    {
        name: "Петр",
        position: "Аналитик",
        salary: 90000
    },
    {
        name: "Олег",
        position: "Менеджер",
        salary: 70000
    }
];

const highSalaryEmployees = employees.filter(employee => employee.salary > 70000);

console.log("Сотрудники с зарплатой больше 70000 рублей:");

console.log(highSalaryEmployees);