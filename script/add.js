const form = document.querySelector('form');
function upForm(){
    form.style.display = 'flex';
    document.getElementById('btn').style.display = 'none';
};


//Смена темы для Body (с зимы на лето)
function funcSummer(){
    const theme = document.querySelector("#theme-link"); 
    
    if (theme.getAttribute("href") == "style/winter.css") {       
        theme.href = "style/summer.css";
    } else {
        theme.href = "style/winter.css";
    }
};

//Валидация почты и имя
const emailInput = form.querySelector('#mail');
const nameInput = form.querySelector('#name');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const email = emailInput.value;
    const name = nameInput.value;
    //Проверяем заполнение поля
    if(!email || !name){
        alert('Заполните все поля');
        return;
    }

    // Проверяем, что имя пользователя содержит только буквы и цифры
    if (!isValidLogin(name)) {
        nameInput.style.borderColor = 'red';
        alert('Логин может содержать только буквы на латинице и цифры');
        return;
    }else{
        nameInput.style.borderColor = 'green';
    }
    //Проверка email
    if (!isValidEmail(email)) {
        alert('Заполните данные правильно');
        return;
    }

    function isValidLogin(name) {
        // Проверка имени регулярным выражением
        const pattern = /^[a-zA-Z0-9]+$/;
        localStorage.setItem('name', name);
        return pattern.test(name);
    }

    function isValidEmail(email){
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        localStorage.setItem('email', email);
        return EMAIL_REGEXP.test(email);
    }


    //Отправка формы
    const btnForm = document.querySelector('#btnForm');
    btnForm.addEventListener('click', ()=>{
        window.location.href = '/ajax.html';
    })
})
