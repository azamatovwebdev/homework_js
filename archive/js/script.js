let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    modal = document.querySelector('.modal'),
    text = document.querySelector('.textarea'),
    close = document.querySelector(".close");

receiveBtn.addEventListener('click', function() {
    modal.style.display = "block"
    
});

close.addEventListener('click', function() {
    modal.style.display = "none"
});

nameInput.addEventListener('input', function() {
    text.value = "Меня зовут " + nameInput.value + ". Хотелось бы у вас спросить: ";
    if (nameInput.value == "") {
        text.value = ""
    }

});




