function upForm(){
    document.getElementById('form').style.display = 'flex';
    document.getElementById('btn').style.display = 'none';
};


//Смена темы для Body (с зимы на лето)
function funcSummer(){
    const theme = document.querySelector("#theme-link"); 
    // Если текущий адрес содержит "style/winter.css"
    if (theme.getAttribute("href") == "style/winter.css") {
        // …то переключаемся на "style/summer.css"
        theme.href = "style/summer.css";
        // В противном случае… 
    } else {
        theme.href = "style/winter.css";
    }
};

//Валидация почты и имя
const btnForm = document.querySelector('#btnForm');

function valid(){
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const input = document.querySelector('#mail');
    if(input.value === EMAIL_REGEXP){
        input.style.backgroundColor = 'green';
    }else{
        input.style.backgroundColor = 'red';
        btnForm.removeEventListener('click', valid);
    };
        
    const name = document.querySelector('#name');
    if(name.value.length === 0){
        document.querySelector('.validName').style.display = 'block';
        name.style.backgroundColor = 'red';
    }else{
        name.style.backgroundColor = 'green';
    }
}
btnForm.addEventListener('click', valid);

//Подключение другой страницы через Ajax