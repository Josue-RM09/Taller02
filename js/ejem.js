$(document).bind('keydown', function (e) {


    if (e.ctrlKey || e.metaKey) {

        if(String.fromCharCode(e.which).toLowerCase() === 'q') {
            var Req = document.getElementById('Req');
            var Caja = document.getElementById('Caja');
            var textArea = document.getElementById('txtArea');

            Req.innerHTML = "Presione <b>'Enter'</b>, cuando termine de redactar"
            Caja.style.visibility = "hidden";
            textArea.style.display = "inline";}
            return;
        }
            
        var key=e.keyCode || e.which;
        if (key==13){
            var Caja = document.getElementById('Caja');
            var Req = document.getElementById('Req');
            Req.innerHTML = "Presione <b>'Ctrl+Q'</b>, para empezr a redactar"
            Caja.innerHTML = "";
            Caja.style.visibility = "visible";
            var Area = document.getElementById("txtArea").value;
            var para = document.createElement("div");
            para.innerHTML = Area;
            document.getElementById("Caja").appendChild(para);
            alert("Su mensaje se ha guardado con exito...");
            return;
        }    
          

        });
const Brn = document.getElementById('Btn');