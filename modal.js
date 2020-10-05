window.onload = function(){



    document.getElementById("open").onclick = function(){


        document.getElementById("dialog").style.display ="block";
        document.querySelector("body").classList.add("bg_overlay")
        document.getElementById("modal").classList.add("bg_overlay")


    }

    document.getElementById("close").onclick = function(){

        document.getElementById("dialog").style.display="none";
        document.querySelector("body").classList.remove("bg_overlay")
        document.getElementById("modal").classList.remove("bg_overlay")



    }



}
