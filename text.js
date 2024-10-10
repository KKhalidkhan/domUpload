function converting(){
    let celsius = parseInt(document.getElementById('celsius').value)
    let fahrenheit =parseInt(document.getElementById('fahrenheit').value)
    let result=document.getElementById('resut')[0]

    let toFahrenheit = (celsius*9/5)+32;
    let toCelsius = (fahrenheit-32)*5/9; 

    print.textContent=toCelsius
    print.textContent=toFahrenheit
    
    if(celsius==null){
        alert('enter the value in celsius')
    }else if(fahrenheit==null){
        alert('enter the value in fahrenheit')
    }


    // (CelsiusResult);
    // document.write(FahrenheitResult);
    // if(celsius==40){
    //     console.log("celsius")
    // }else if(fahrenheit>=40){
    //     console.log('fahrenheit')
    // }

     alert("Fahrenheit = "+ toFahrenheit + "\nCelsius ="+toCelsius);
}
