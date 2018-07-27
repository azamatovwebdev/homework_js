function myFirstApp(name, age) {
    alert("Привет, меня зовут " + name + " И это моя первая программа!");
    function showSkills(){
        let skills = [
            "Html",
            "CSS",
            "Brackets",
            "Figma"
        ];
        for (let i = 0; i < skills.length; i++){
            document.write("Я Владею " + skills[i] + "<br>");
        }
    }
     showSkills();
    
    function checkAge(){
        if (age>=18){
            alert("Тебе есть 18 и ты можешь купить бутылку пиваса (но не стоит)")
        } else{
            alert("Тебе нет 18 и ты не можешь купить бутылку пиваса (оно и не надо)")
        }
    }
    checkAge();
    function calcPow(num){
        alert(num + " в квадрате = " + Math.pow(num, 2))
    }
    calcPow(7);
}
myFirstApp("Ildar", 18); 
