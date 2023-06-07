let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(Event)=>{
        if(Event.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(Event.target.innerHTML == 'AC'){
            string="";
            document.querySelector('input').value = string;
        }
        else if(Event.target.innerHTML == 'C'){
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else if(Event.target.innerHTML == '%'){
            string=eval(string)/100;
            document.querySelector('input').value = string;

        }
        else{
        console.log(Event.target);
        string = string + Event.target.innerHTML;
        document.querySelector('input').value = string;
        }
    });
  
});