console.log('hi')

document.addEventListener("DOMContentLoaded", function() {
            window.addEventListener("onresize", function(e){

                document.getElementById("body11").style.backgroundColor =
                '#'+Math.floor(Math.random()*16777215).toString(16);
            }
        });



  
});
