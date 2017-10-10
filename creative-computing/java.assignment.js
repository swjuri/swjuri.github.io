document.write('1');
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.
        if (i<5){
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");

        }

        
    }

    document.write('<br />');
}

document.write('<br />');
document.write('2');
        

    for (var i = 0; i < 10; i = i + 1) {
        for (var j = 0; j < 10; j = j + 1) {
            console.log("Row " + i + ", Column " + j);

            // The next line is the only JS you'll have to change.
            if (j<5){
                console.log("   pink");
                document.write("<div class='box pink'></div>");
            } else {
                console.log("   turquoise");
                document.write("<div class='box turquoise'></div>");

            }

            
        }

        document.write('<br />');
    }

    document.write('<br />');
    document.write('3');
        

        for (var i = 0; i < 10; i = i + 1) {
            for (var j = 0; j < 10; j = j + 1) {
                console.log("Row " + i + ", Column " + j);

                // The next line is the only JS you'll have to change.
                if (j==i){
                    console.log("   pink");
                    document.write("<div class='box pink'></div>");
                } else {
                    console.log("   turquoise");
                    document.write("<div class='box turquoise'></div>");

                }

                
            }

            document.write('<br />');
        }

        document.write('<br />');
        document.write('4');
                

            for (var i = 0; i < 10; i = i + 1) {
                for (var j = 0; j < 10; j = j + 1) {
                    console.log("Row " + i + ", Column " + j);

                    // The next line is the only JS you'll have to change.
                    if (j<i){
                        console.log("   pink");
                        document.write("<div class='box pink'></div>");
                    } else {
                        console.log("   turquoise");
                        document.write("<div class='box turquoise'></div>");

                    }

                    
                }

                document.write('<br />');
            }

                document.write('<br />');
            document.write('5');
                for (var i = 0; i < 10; i = i + 1) {
                    for (var j = 0; j < 10; j = j + 1) {
                        console.log("Row " + i + ", Column " + j);

                        // The next line is the only JS you'll have to change.
                        if ((i/j)&(j/i)&(j**i)){
                            console.log("   pink");
                            document.write("<div class='box pink'></div>");
                        } else {
                            console.log("   turquoise");
                            document.write("<div class='box turquoise'></div>");

                        }

                        
                    }

                    document.write('<br />');
                }

                document.write('<br />');

                    document.write('<br />');
                    document.write('6');
                        for (var i = 0; i < 10; i = i + 1) {
                            for (var j = 0; j < 10; j = j + 1) {
                                console.log("Row " + i + ", Column " + j);

                                // The next line is the only JS you'll have to change.
                                if ((i+j) & (j<10)){
                                    console.log("   pink");
                                    document.write("<div class='box pink'></div>");
                                } else {
                                    console.log("   turquoise");
                                    document.write("<div class='box turquoise'></div>");

                                }

                        
                    }

                    document.write('<br />');
                }

                document.write('<br />');
                    document.write('<br />');
                    document.write('7');
                        for (var i = 0; i < 10; i = i + 1) {
                            for (var j = 0; j < 10; j = j + 1) {
                                console.log("Row " + i + ", Column " + j);

                                // The next line is the only JS you'll have to change.
                                if ((i**j) & (j<10)){
                                    console.log("   pink");
                                    document.write("<div class='box pink'></div>");
                                } else {
                                    console.log("   turquoise");
                                    document.write("<div class='box turquoise'></div>");

                                }

                        
                    }

                    document.write('<br />');
                }

                document.write('<br />');







                



























                        