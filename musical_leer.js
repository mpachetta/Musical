$(function () {


    pantalla_gameLeer = () => {


        $("#pantallas").empty().append(cont_pantalla_gameLeer)
        $(".cont_pantallas").addClass("w3-animate-opacity")


        let y = aleatorio(instrumentos_name.length);

        darContenido = (y) => {
            let img_actual = `${instrumentos_name[y]}.png`

            $("#proposicion img").attr("src", img_actual)
            let sound_actual = `${instrumentos_name[y]}.mp3`
            sound.setAttribute("autoplay", true);
            sound.setAttribute("src", sound_actual);
            
            va = aleatorio(4)

            ov1 = aleatorio(instrumentos_name.length)

            while (ov1 == y) {
                ov1 = aleatorio(instrumentos_name.length)
            }

            ov2 = aleatorio(instrumentos_name.length)

            while (ov2 == y || ov2 == ov1) {
                ov2 = aleatorio(instrumentos_name.length)
            }


            if (va == 1) {
                $("#input_opcion1").val(instrumentos_name[y])
                $("#input_opcion2").val(instrumentos_name[ov1])
                $("#input_opcion3").val(instrumentos_name[ov2])

            } else if (va == 2) {
                $("#input_opcion2").val(instrumentos_name[y])
                $("#input_opcion1").val(instrumentos_name[ov1])
                $("#input_opcion3").val(instrumentos_name[ov2])
            } else if (va == 3) {

                $("#input_opcion3").val(instrumentos_name[y])
                $("#input_opcion2").val(instrumentos_name[ov1])
                $("#input_opcion1").val(instrumentos_name[ov2])
            }



        }

        let incluidos = actual_instrumentos_name.includes(y);

        if (incluidos == false) {
            darContenido(y)

        } else if (incluidos == true) {
            while (incluidos == true) {

                y = aleatorio(instrumentos_name.length);
                darContenido(y)

                break;

            }

        }

        actual_instrumentos_name.push(y);
        progreso = actual_instrumentos_name.length

        $("#opciones input").click((e) => {
            opcion_elegida = e.target.value

        }).mousedown((e) => {
            e.currentTarget.style.backgroundColor = "#E1EEFE"
            $("#b_comprobar").css("backgroundColor", "#ADDEC9").attr("disabled", false)
        }).mouseout((e) => {
            e.currentTarget.style.backgroundColor = "white"
        })

        if (progreso <= 10) {

            
            $("#b_comprobar").click(() => {

                if (instrumentos_name[y] == opcion_elegida) {
                    resultado(resultado_msg_OK)

                } else {
                    resultado(resultado_msg_bad)
   
                }
                if (va == 1) {
                    $("#input_opcion1").css("backgroundColor","green")
    
                } else if (va == 2) {
                    $("#input_opcion2").css("backgroundColor","green")

                } else if (va == 3) {
    
                    $("#input_opcion3").css("backgroundColor","green")

                }
            })
            progresar(progreso)
            
            


        } else {
            sound.pause();
            pantalla_selectGame();
            actual_instrumentos_name = []
        }

        $("#b_volver").click(pantalla_selectGame).click(()=>{
            sound.pause();
            actual_instrumentos_name = []
        })

    }






});