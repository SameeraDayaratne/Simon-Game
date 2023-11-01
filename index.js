let greenAudio = new Audio("./sounds/green.mp3");
let redAudio = new Audio("./sounds/red.mp3");
let yellowAudio = new Audio("./sounds/yellow.mp3");
let blueAudio = new Audio("./sounds/blue.mp3");
let wrongAudio = new Audio("./sounds/wrong.mp3");

let count = 0;
let arr = [];
let level = 1;

$("#green").on("click" , function () {
    greenAudio.play();
});

$("#red").on("click" , function () {
    redAudio.play();
});

$("#yellow").on("click" , function () {
    yellowAudio.play();
});

$("#blue").on("click" , function () {
    blueAudio.play();
});


$(document).on("keypress", handleKeypress);

function handleKeypress(){

    $(document).off("keypress", handleKeypress);
    setLevel();

    generateColor();
}

$(".btn").on("click", function (e) {
    var id = $(this).attr('id'); 

    
    if(count <= arr.length - 1)
    {
       
        if(id == arr[count])
        {
            count++;
            if(count >= arr.length)
            {
                setLevel();
        count = 0;
        setTimeout(function(){
            generateColor();
        },2000);
            }
        }
        else{
           
            wrongAudio.play();
            
            $(document.body).addClass("game-over");
            setTimeout(function() {
                $(document.body).removeClass("game-over");
            } , 100);

            count = 0;
            level = 1;

            arr = [];
             
            $("h1").text("Game Over, Press Any Key to Restart");
            $(document).on("keypress", handleKeypress);
            //alert("lost");
        }
    }
    
        
        
        
    

});

function generateColor(){

    
    var random = Math.ceil((Math.random())*4);
        
        switch (random) {
            case 1:
                arr.push("green");
                playSounds("green");
            break;

            case 2:
                arr.push("red");
                playSounds("red");
            break;
                
            case 3:
                arr.push("yellow");
                playSounds("yellow");
            break;

            case 4:
                arr.push("blue");
                playSounds("blue");
               
            break;
        
            default:
                break;
        }

        console.log(arr);

        

}

function playSounds(color){

    // If you want to play all sounds in an order
    // arr.forEach((element,i) => {

    //     setTimeout(function(){
    //         switch (element) {
    //             case "green":

    //                 greenAudio.play();
    //                 $("#green").addClass("pressed");
    //             setTimeout(function() {
    //                 $("#green").removeClass("pressed");
    //             } , 100);

    //             break;
            
    //             case "red":
        
    //                 redAudio.play();
    //                 $("#red").addClass("pressed");
    //             setTimeout(function() {
    //                 $("#red").removeClass("pressed");
    //             } , 100);
          
    //             break;
        
    //             case "yellow":

    //                 yellowAudio.play();
    //                 $("#yellow").addClass("pressed");
    //             setTimeout(function() {
    //                 $("#yellow").removeClass("pressed");
    //             } , 100);
    
    //             break;
        
    //             case "blue":
        
    //                 blueAudio.play();
    //                 $("#blue").addClass("pressed");
    //             setTimeout(function() {
    //                 $("#blue").removeClass("pressed");
    //             } , 100);

    //             break;
        
    //             default:
    //                 break;
    //         }
        
            
    //     },i*1000);
    
    //             })

    switch (color) {
        case "green":

            greenAudio.play();
            $("#green").addClass("pressed");
        setTimeout(function() {
            $("#green").removeClass("pressed");
        } , 100);

        break;
    
        case "red":

            redAudio.play();
            $("#red").addClass("pressed");
        setTimeout(function() {
            $("#red").removeClass("pressed");
        } , 100);
  
        break;

        case "yellow":

            yellowAudio.play();
            $("#yellow").addClass("pressed");
        setTimeout(function() {
            $("#yellow").removeClass("pressed");
        } , 100);

        break;

        case "blue":

            blueAudio.play();
            $("#blue").addClass("pressed");
        setTimeout(function() {
            $("#blue").removeClass("pressed");
        } , 100);

        break;

        default:
            break;
    }
}

function setLevel(){

    $("h1").text("Level " + level);
    level++;
}