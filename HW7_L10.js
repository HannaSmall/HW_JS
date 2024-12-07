/*Task:
В нас є масив об'єктів в яких міститься email.

Copy code
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        <email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою. */




var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для валідації email
var re = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

// Отримання довірених email
var trustedEmails = arr
    .map(obj => obj.email) // Витягуємо email
    .filter(email => re.test(email)); // Фільтруємо за умовами регулярного виразу

console.log(trustedEmails);