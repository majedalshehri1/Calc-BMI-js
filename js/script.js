    //add action in the button:
    document.getElementById("submit-btn").addEventListener("click", function(){

    //put ( input value ) weight & height 
    var weight = document.getElementById("weight-input").value 
    var height = document.getElementById("height-input").value

    //defined the BMI 
    var bmi = weight/ (height*height)

    //put into value BMI in the innerHTML (in the page)
    document.getElementById("bmi").innerHTML = bmi

    var bmiCategory = "نحيف"
    if (bmi < 18) {
        bmiCategory = "نحيف"
    } else if (bmi < 24.9) {
        bmiCategory = "وزن مثالي"
    }
    else if (bmi < 29.9) {
        bmiCategory = "وزن زائد"
    }
    else if (bmi < 34.9) {
        bmiCategory = "سمنة درجة أولى"
    }
    else if (bmi < 39.9) {
        bmiCategory = "سمنة درجة ثانية"
    }
    else{
        bmiCategory = "سمنة خطيرة"
    }
    
    //put into value BMI in the bmiCategory
    document.getElementById("bmi-category").innerHTML = bmiCategory

    })