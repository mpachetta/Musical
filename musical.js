$(function () {


    let nombre_usuario ="";
    let actual_instrumentos_name = []
    let puntaje = 0;
    let cont_trofeos = 0;
    let sound = document.createElement("AUDIO");
let trofeos_ganados=[]

//Pantalla inicial
    pantalla_ini = () => {
        $("#pantallas").append(cont_pantalla_ini);
        $(".cont_pantallas").addClass("w3-animate-opacity");
        $("footer").append(credito)
        $("#usuName").keydown(() => {
            $("#entrar").attr("disabled", false)
        })
        
            $("#usuName").val(localStorage.getItem('mi_nombre'))
        
        $("#pantallas #entrar").on("click", () => {
            nombre=$("#usuName").val();
            localStorage.setItem('mi_nombre',nombre)
            nombre_usuario=localStorage.getItem('mi_nombre');
            
            pantalla_great(nombre_usuario);
        })
        
    }


    //Pantalla saludo
    pantalla_great = (x) => {
        $("#pantallas").empty().append(cont_pantalla_great)
        $(".cont_pantallas").addClass("w3-animate-opacity")
        $("#usuName_alt").val(x);

        $("#jugar").on("click", () => {
            pantalla_selectGame();
        })
    }


    //Pantalla seleccionar juego
    pantalla_selectGame = () => {
        $("#pantallas").empty().append(cont_pantalla_selectGame)
        $(".cont_pantallas").addClass("w3-animate-opacity")
        $("footer").empty()
        $(".btn_sect_game").on("click", (e) => {
            let juegoElegido = e.target.value;
            if (juegoElegido == "leer") {
                pantalla_gameLeer();
            }
            if (juegoElegido == "escuchar") {
                pantalla_gameEscuchar();
            }
            if (juegoElegido == "escribir") {
                pantalla_gameEscribir();
            }

        })
    }

    //Pantalla informa puntos y trofeos
    pantalla_premios = (x) => {
        $("#pantallas").empty().append(cont_pantalla_premios)
        $(".cont_pantallas").addClass("w3-animate-opacity")
        $("#usuName_alt").val(x);
        $("#puntaje").append(puntaje, " puntos")
        $("#premios").append(trofeos_ganados)

        $("#salir_premios").click(() => {
            pantalla_selectGame();
        })

    }

    //Sección resultados
    resultadoLeer = (msg) => {

        $("#devolucion").append(msg).addClass("w3-animate-opacity")
        $("#b_comprobar").attr("id", "b_salirResultado").text("CONTINUAR")

        $("#b_salirResultado").click(() => {
            if (msg == resultado_msg_OK) {
                puntaje++;
                if (cont_trofeos < 9) {
                    cont_trofeos++;
                } else {
                    trofeos_ganados.push(trofeo)
                    cont_trofeos = 0;
                }


            }
            $("#devolucion").empty()
            $("#b_comprobar").text("COMPROBAR")

            pantalla_gameLeer()
        })


    }
    resultadoEscuchar = (msg) => {

        $("#devolucion").append(msg).addClass("w3-animate-opacity")

        $("#b_comprobar2").attr("id", "b_salirResultado2").text("CONTINUAR")

        $("#b_salirResultado2").click(() => {
            if (msg == resultado_msg_OK) {
                puntaje++;
                if (cont_trofeos < 9) {
                    cont_trofeos++;
                } else {
                    trofeos_ganados.push(trofeo)
                    cont_trofeos = 0;
                }

            }
            $("#devolucion").empty()
            $("#b_comproba2").text("COMPROBAR")

            pantalla_gameEscuchar();
        })


    }
    resultadoEscribir = (msg) => {

        $("#devolucion").append(msg).addClass("w3-animate-opacity")

        $("#b_comprobar3").attr("id", "b_salirResultado3").text("CONTINUAR")

        $("#b_salirResultado3").click(() => {
            if (msg == resultado_msg_OK) {
                puntaje++;
                if (cont_trofeos < 9) {
                    cont_trofeos++;
                } else {
                    trofeos_ganados.push(trofeo)
                    cont_trofeos = 0;
                }

            }
            $("#devolucion").empty()
            $("#b_comprobar3").text("COMPROBAR")

            pantalla_gameEscribir();
        })


    }

//Determina aleatorio
    aleatorio = (x) => {


        let y = Math.round(Math.random() * x - 1)
        while (y == -1 || y == -0) {
            y = Math.round(Math.random() * x - 1)
        }
        return y

    }

    //Barra de progreso

    progresar = (valor) => {
        porcentaje = valor * 30
        $("#barra").css("width", porcentaje)

    }

    let y = aleatorio(instrumentos_name.length);

    //Pantalla Leer
    
    pantalla_gameLeer = () => {


        $("#pantallas").empty().append(cont_pantalla_gameLeer)
        $(".cont_pantallas").addClass("w3-animate-opacity")

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

        let incluidos = actual_instrumentos_name.includes(instrumentos_name[y]);

        if (incluidos == false) {
            darContenido(y)

        } else if (incluidos == true) {
            while (incluidos == true) {

                y = aleatorio(instrumentos_name.length);
                

                break;

            }
            darContenido(y)
        }
        // if (incluidos == false) {
        //     darContenido(y)

        // } else if (incluidos == true) {
        //     while (incluidos == true) {

        //         y = aleatorio(instrumentos_name.length);
        //         darContenido(y)

        //         break;

        //     }

        // }

        actual_instrumentos_name.push(instrumentos_name[y]);
        progreso = actual_instrumentos_name.length

        $("#opciones input").click((e) => {
            opcion_elegida = e.target.value
            $("#b_comprobar").css("backgroundColor", "#ADDEC9").attr("disabled", false)
        })

        if (progreso <= 10) {


            $("#b_comprobar").click(() => {

                if (instrumentos_name[y] == opcion_elegida) {
                    resultadoLeer(resultado_msg_OK)
                    final=`${instrumentos_name[y]}_final.mp3`
                    sound.setAttribute("src",final)
                } else {
                    resultadoLeer(resultado_msg_bad)
                    sound.setAttribute("src","error_fallo.mp3")
                }
                if (va == 1) {
                    $("#input_opcion1").css("border", "solid 3px green") 

                } else if (va == 2) {
                    $("#input_opcion2").css("border", "solid 3px green")

                } else if (va == 3) {

                    $("#input_opcion3").css("border", "solid 3px green")

                }
            })
            progresar(progreso)




        } else {
            sound.pause();
            pantalla_premios(nombre_usuario);
            actual_instrumentos_name = []
        }

        $("#b_volver").click(pantalla_selectGame).click(() => {
            sound.pause();
            actual_instrumentos_name = []
        })

    }

//Pantalla Escuchar

    pantalla_gameEscuchar = () => {


        $("#pantallas").empty().append(cont_pantalla_gameEscuchar)
        $(".cont_pantallas").addClass("w3-animate-opacity")

        darContenido2 = (y) => {

            let snd_actual = `${instrumentos_name[y]}.mp3`

            sound.setAttribute("autoplay", true)
            $("#proposicion2 img").attr("src", "volume.png")
            sound.setAttribute("src", snd_actual)
            $("#proposicion2 img").click(() => {
                sound.setAttribute("src", snd_actual)
            })

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
                $("#opcion1 img").attr("src", instrumentos_name[y] + ".png").attr("id", instrumentos_name[y])
                $("#opcion2 img").attr("src", instrumentos_name[ov1] + ".png").attr("id", instrumentos_name[ov1])
                $("#opcion3 img").attr("src", instrumentos_name[ov2] + ".png").attr("id", instrumentos_name[ov2])

            } else if (va == 2) {
                $("#opcion2 img").attr("src", instrumentos_name[y] + ".png").attr("id", instrumentos_name[y])
                $("#opcion1 img").attr("src", instrumentos_name[ov1] + ".png").attr("id", instrumentos_name[ov1])
                $("#opcion3 img").attr("src", instrumentos_name[ov2] + ".png").attr("id", instrumentos_name[ov2])

            } else if (va == 3) {

                $("#opcion3 img").attr("src", instrumentos_name[y] + ".png").attr("id", instrumentos_name[y])
                $("#opcion2 img").attr("src", instrumentos_name[ov1] + ".png").attr("id", instrumentos_name[ov1])
                $("#opcion1 img").attr("src", instrumentos_name[ov2] + ".png").attr("id", instrumentos_name[ov2])
            }



        }

        let incluidos2 = actual_instrumentos_name.includes(y);

        if (incluidos2 == false) {
            darContenido2(y)

        } else if (incluidos2 == true) {
            while (incluidos2 == true) {

                y = aleatorio(instrumentos_name.length);
                darContenido2(y)

                break;

            }

        }

        actual_instrumentos_name.push(y);
        progreso = actual_instrumentos_name.length

        $("#opciones2 img").click((e) => {
            $("#b_comprobar2").css("backgroundColor", "#ADDEC9").attr("disabled", false)
            opcion_elegida2 = e.target.id
           
        })

        if (progreso <= 10) {


            $("#b_comprobar2").click(() => {

                if (instrumentos_name[y] == opcion_elegida2) {
                    resultadoEscuchar(resultado_msg_OK)
                    final2=`${instrumentos_name[y]}_final.mp3`
                    sound.setAttribute("src",final2)

                } else {
                    resultadoEscuchar(resultado_msg_bad)
                    sound.setAttribute("src","error_fallo.mp3")
                }
                if (va == 1) {
                    $("#opcion1 img").css("border", "solid 3px green")

                } else if (va == 2) {
                    $("#opcion2 img").css("border", "solid 3px green")

                } else if (va == 3) {

                    $("#opcion3 img").css("border", "solid 3px green")

                }
            })
            progresar(progreso)




        } else {
            sound.pause();
            pantalla_premios(nombre_usuario);
            actual_instrumentos_name = []

        }

        $("#b_volver").click(pantalla_selectGame).click(() => {
            sound.pause();
            actual_instrumentos_name = []
        })

    }

// Panalla Escribir

    pantalla_gameEscribir = () => {


        $("#pantallas").empty().append(cont_pantalla_gameEscribir)
        $(".cont_pantallas").addClass("w3-animate-opacity")
        $("#input_respuesta").focus()



        darContenido3 = (y) => {
            let img_actual = `${instrumentos_name[y]}.png`

            $("#proposicion img").attr("src", img_actual)
            let sound_actual = `${instrumentos_name[y]}.mp3`
            sound.setAttribute("autoplay", true);
            sound.setAttribute("src", sound_actual);

            va = aleatorio(4)
            
                $("#input_opcion1").val(instrumentos_name[y])

        }

        let incluidos = actual_instrumentos_name.includes(y);

        if (incluidos == false) {
            darContenido3(y)

        } else if (incluidos == true) {
            while (incluidos == true) {

                y = aleatorio(instrumentos_name.length);
                darContenido3(y)

                break;

            }

        }

        actual_instrumentos_name.push(y);
        progreso = actual_instrumentos_name.length
        let j=1;
        ayudar = () => {
            $("#b_comprobar3").css("backgroundColor", "#ADDEC9").attr("disabled", false)
            
            $("#input_respuesta").val(instrumentos_name[y].substr(0, j));
            let x = instrumentos_name[y].length;

            j += 1;
            $("#input_respuesta").focus()
        };

        $("#ayuda").click(ayudar);
        $("#input_respuesta").keydown(()=>{

            $("#b_comprobar3").css("backgroundColor", "#ADDEC9").attr("disabled", false)
            
        })
        
        if (progreso <= 10) {


            $("#b_comprobar3").click(() => {
                opcion_elegida3=$("#input_respuesta").val()
                if (instrumentos_name[y] == opcion_elegida3) {
                    resultadoEscribir(resultado_msg_OK)
                    final3=`${instrumentos_name[y]}_final.mp3`
                    sound.setAttribute("src",final3)
                } else {
                    resultadoEscribir(resultado_msg_bad)
                    sound.setAttribute("src","error_fallo.mp3")
                }
                if (va == 1) {
                    $("#input_opcion1").css("border", "solid 3px green") 

                } else if (va == 2) {
                    $("#input_opcion2").css("border", "solid 3px green")

                } else if (va == 3) {

                    $("#input_opcion3").css("border", "solid 3px green")

                }
            })
            progresar(progreso)




        } else {
            sound.pause();
            pantalla_premios(nombre_usuario);
            actual_instrumentos_name = []
        }

        $("#b_volver").click(pantalla_selectGame).click(() => {
            sound.pause();
            actual_instrumentos_name = []
        })

    }

    pantalla_ini();
});

//lograr que no repita los instrumentos en un mismo juego, inlcuirlos en una variable para verificar por include() tal como hago con el sorteo. incluso desde allí mismo puedo hacerlo.
//tendria que usar, en vez de instrumentos_name la actual_instrumentos_name o que en actual
//lo que incluya no sea [y] sino el nombre del  instrumento