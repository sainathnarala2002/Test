function bmicalculate(){
    let weight = parseInt(document.getElementById("weight").value)
    let heightFt  = parseFloat(document.getElementById("height-ft").value)
    let heightIn = parseFloat(document.getElementById("height-in").value)
    let output = document.getElementById("output")

    let height = parseFloat((heightFt*0.3048)+(heightIn*0.0254)).toFixed(2)
      
    let bmi = (weight/(height*height)).toFixed(2)

    output.value = bmi

    if(bmi<18.5){
        output.style.backgroundColor = "rgb(230, 214, 29)"
    }else if(bmi<25){
        output.style.backgroundColor = "rgb(0, 209, 45)"
    }else if(bmi<30){
        output.style.backgroundColor = "rgb(217, 142, 13)"
    }else{
        output.style.backgroundColor = "rgb(214, 26, 16)"
    }
}

function displayResult(){
    var x = document.getElementById("result");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}