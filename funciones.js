/* VARIABLES globales*/
	var defVentana=1280;
	var defTam=380;
	var nuTam;
	var inicioContar;
	var interval;
	var tiempoRestante = 0;
	var diferenciaPausa = 0;
	var color = 0; /*verde=0, amarillo=1, rojo=2*/
	
/* Llamadas y funciones */
	$(document).ready(function(){
		$('.semaforo').css('opacity','0.4');
		$("#verde").css('opacity','1');
		$('body').css('background-color','white');

		$("#verde").click(function(){
			$('.semaforo').css('opacity','0.4');
			$("#verde").css('opacity','1');
			$(".semaforo").css('border', '0px solid black');
			$('body').css('background-color','white');
			color = 0;
		});
		$("#amarillo").click(function(){
			$('.semaforo').css('opacity','0.4');
			$("#amarillo").css('opacity','1');
			$("#amarillo").css('border', '1px solid black');
			$("#rojo").css('border', '0px solid black');
			$('body').css('background-color','#ff9900');
			color = 1;
		});
		$("#rojo").click(function(){
			$('.semaforo').css('opacity','0.4');
			$("#rojo").css('opacity','1');
			$('body').css('background-color','#800000');
			$("#rojo").css('border', '1px solid black');
			$("#amarillo").css('border', '0px solid black');
			var audio = new Audio('rojo.wav');
			audio.play();
			color = 2;
		});

        /* Llamadas CRONÓMETRO */
		$('#iniciarCrono').click(function(){
			iniciarCrono();
			perderfocusCrono();
		});
		$('#inicializarCrono').click(function(){
			inicializarCrono();
			perderfocusCrono();
		});

        /* Llamadas CUENTA ATRÁS */
		$('#iniciarAtras').click(function(){
			iniciarAtras();
			perderfocusAtras();
		});
		$('#inicializarAtras').click(function(){
			inicializarAtras();
			perderfocusAtras();
		});

         /* Llamada botones suma y resta */
		 $("#cont_mas_2min").click(function(){
			cont_mas_2min();
			perderfocusAtras();
		});

		$("#cont_mas_10min").click(function(){
			cont_mas_10min();
			perderfocusAtras();
		});

		$("#cont_mas_30s").click(function(){
			cont_mas_30s();
			perderfocusAtras();
		});
		$("#cont_menos_30s").click(function(){
			cont_menos_30s();
			perderfocusAtras();
		});

		$("#aviso").click(function(){
			aviso();
		});
		
        /* Llamadas entre PÁGINAS */
		$('#atras').click(function(){
			window.location=('index.html');
        });
		$('#crono').click(function(){
			window.location=('crono.html');
        });
		$('#aleatorio').click(function(){
			window.location=('aleatorio.html');
        });
		$('#info').click(function(){
			window.location=('info.html');
        });

        /* Llamadas AJUSTE */
		ajustar();
		setTimeout(function(){ ajustar(); }, 500);
	});
	
        /* Función Aviso */
		function aviso(){
			var audio = new Audio('aviso.wav');
			audio.play();
			document.getElementById('aviso').blur();
		}

	/* Funciones CUENTA ATRÁS*/
    function iniciarAtras(){
		if(tiempoRestante==0){
			alert('Para usar la cuenta atrás debes introducir un tiempo desde el que empezar a descontar, para ello puedes usar los botones +10min, +2min y +30s ó las teclas numéricas. Si lo que quieres es usar el cronómetro, clica en el botón CRONÓMETRO que está bajo del temporizador.');
		}
		else{
			if(estadoAtras == 1){
				estadoAtras = 2;
				inicioContar = Date.now();
				interval = setInterval(function(){ actualizarAtras(); }, 100);
				document.getElementById('iniciarAtras').setAttribute("value", "PAUSAR");			
			}
			else if (estadoAtras == 2){
				estadoAtras = 1;
				tiempoRestante= tiempoRestante-tiempoTranscurrido;
				actualizarContadorAtras(tiempoRestante);
				clearInterval(interval);
				document.getElementById('iniciarAtras').setAttribute("value", "CONTINUAR");
			}
		}
	}

	function inicializarAtras(){
		tiempoRestante = 0;
		estadoAtras = 1;
		actualizarContadorAtras(tiempoRestante);
		clearInterval(interval);
		document.getElementById('iniciarAtras').setAttribute("value", "INICIAR");
	}

	function actualizarAtras(){
		tiempoTranscurrido = Date.now()-inicioContar;
		var diferencia = tiempoRestante-tiempoTranscurrido;
		if(diferencia < 0) diferencia=0;
		actualizarContadorAtras(diferencia);
		if(diferencia==0){
			inicializarAtras();
			var audio = new Audio('fin.wav');
			audio.play();
		}
	}

	function actualizarContadorAtras(tiempoAtras){
		var seg = parseInt(tiempoAtras/1000);
		seg = seg%60;

		var mins = parseInt(tiempoAtras/60000);

		if(seg<10) seg="0"+seg;
		if(mins<10) mins = "0"+mins;

		$('#tiempoAtras').text(""+mins+":"+seg);
	}

				/*Funciones de los botones de sumar y restar tiempo*/
                function cont_mas_1min(){
                    tiempoRestante +=60000;
                    actualizarContadorAtras(tiempoRestante);
                }
				
				function cont_mas_2min(){
                    tiempoRestante +=120000;
                    actualizarContadorAtras(tiempoRestante);
                }
				
				function cont_mas_3min(){
                    tiempoRestante +=180000;
                    actualizarContadorAtras(tiempoRestante);
                }
				
				function cont_mas_4min(){
                    tiempoRestante +=240000;
                    actualizarContadorAtras(tiempoRestante);
                }
				
				function cont_mas_5min(){
                    tiempoRestante +=300000;
                    actualizarContadorAtras(tiempoRestante);
                }
				
				function cont_mas_6min(){
                    tiempoRestante +=360000;
                    actualizarContadorAtras(tiempoRestante);
                }
				
				function cont_mas_7min(){
                    tiempoRestante +=420000;
                    actualizarContadorAtras(tiempoRestante);
                }
				
				function cont_mas_8min(){
                    tiempoRestante +=480000;
                    actualizarContadorAtras(tiempoRestante);
                }
				
				function cont_mas_9min(){
                    tiempoRestante +=540000;
                    actualizarContadorAtras(tiempoRestante);
                }

                function cont_mas_10min(){
                    tiempoRestante +=600000;
                    actualizarContadorAtras(tiempoRestante);
                }

                function cont_mas_30s(){
                    tiempoRestante +=30000;
                    actualizarContadorAtras(tiempoRestante);
                }
                function cont_menos_30s(){
                    tiempoRestante -=30000;
                    if(tiempoRestante < 0)
                        tiempoRestante=0;
                    actualizarContadorAtras(tiempoRestante);
                }
	
	/* Funciones CRONÓMETRO */
	function iniciarCrono(){ /* INICIAR o CONTINUAR*/
		if(estadoCrono == 1){
			estadoCrono = 2;
			inicioContar = Date.now();
			interval = setInterval(function(){ actualizarCrono(); }, 100);
			document.getElementById('iniciarCrono').setAttribute("value", "PAUSAR");
		}
		else if(estadoCrono == 2){ /* PAUSAR */
			estadoCrono = 1;
			diferenciaPausa=tiempoTranscurrido;
			actualizarContadorCrono(tiempoTranscurrido);
			clearInterval(interval);
			document.getElementById('iniciarCrono').setAttribute("value", "CONTINUAR");
		}
	}
	function inicializarCrono(){
		tiempoTranscurrido = 0;
		diferenciaPausa = 0;
		estadoCrono = 1;
		actualizarContadorCrono(tiempoTranscurrido);
		clearInterval(interval);
		document.getElementById('iniciarCrono').setAttribute("value", "INICIAR");
	}

	function actualizarCrono(){
		tiempoTranscurrido = Date.now()-inicioContar + diferenciaPausa;
		var diferencia = tiempoTranscurrido;
		if(diferencia < 0) diferencia=0;
		actualizarContadorCrono(diferencia);
	}
	function actualizarContadorCrono(tiempoCrono){
		var seg = parseInt(tiempoCrono/1000);
		seg = seg%60;

		var mins = parseInt(tiempoCrono/60000);

		if(seg<10) seg="0"+seg;
		if(mins<10) mins = "0"+mins;

		$('#tiempoCrono').text(""+mins+":"+seg);
	}


	/* Funciones control por TECLADO*/
	function teclado(e){
        tecla = e.keyCode || e.which;

		/* Cambios entre ventanas */
		if(tecla==67){ /*Con la C se abre la cuenta atrás. Si la cuenta atrás ya está abierta abre el cronómetro*/
			if(estadoAtras==0){
				window.location=('index.html');
			}
			else if(estadoCrono==0){
				window.location=('crono.html');
			}
		}
		else if(tecla==65){ /*Con la A abre aleatorio*/
			window.location=('aleatorio.html');
		}
		else if(tecla==73){ /*Con la I abre +Info*/
			window.location=('info.html');
		}
		
		/* Si pulsa ENTER */
		else if(tecla==13){ 
			if(estadoAtras==1){ 	 /* si la cuenta atrás no está iniciada, INICIA. */
			iniciarAtras();
			}
			else if(estadoAtras==2){ /* pero si la cuenta atrás está iniciada, PAUSA. */
				estadoAtras = 1;
				tiempoRestante= tiempoRestante-tiempoTranscurrido;
				actualizarContadorAtras(tiempoRestante);
				clearInterval(interval);
				document.getElementById('iniciarAtras').setAttribute("value", "CONTINUAR");
			}
			else if(estadoCrono==1){ /* si el cronómetro no está iniciado, INICIA*/
			iniciarCrono();
			}
			else if(estadoCrono==2){ /* pero si el cronómetro está iniciado, PAUSA. */
				estadoCrono = 1;
				diferenciaPausa=tiempoTranscurrido;
				actualizarContadorCrono(tiempoTranscurrido);
				clearInterval(interval);
				document.getElementById('iniciarCrono').setAttribute("value", "CONTINUAR");
			}
			else{
			fijos(); 
			variables();
			}
		}
		
		/* Si pulsa ESPACIO */
		else if(tecla==32){
			aviso(); /*Suena tono de aviso*/
		}
		
		/* Inicializar si se pulsa DELETE o SUPRIMIR*/
		else if(tecla==46 || tecla==8){ 
			if(estadoAtras!=0){ 	 /* si la cuenta atrás no está iniciada, INICIA. */
			inicializarAtras();
			}
			else if(estadoCrono!=0){ /* pero si la cuenta atrás está iniciada, PAUSA. */
			inicializarCrono();
			}
		}

		/*Si verde activo y FLECHA DERECHA, AV PAG o FLECHA ARRIBA, muestra amarillo*/
        else if(color==0 && (tecla==39 || tecla==34 || tecla==38)){ 
			$('.semaforo').css('opacity','0.4');
			$("#amarillo").css('opacity','1');
			$('body').css('background-color','#ff9900');
			color = 1;
        	}

		/*Si verde no activo y FLECHA DERECHA, AV PAG o FLECHA ARRIBA, muestra rojo*/
		else if(color>0 && (tecla==39 || tecla==34 || tecla==38)){
			$('.semaforo').css('opacity','0.4');
			$("#rojo").css('opacity','1');
			$('body').css('background-color','#800000');
			var audio = new Audio('rojo.wav');
			audio.play();
			color = 2;
		}
	
		/*SEMÁFORO Muestra verde si FLECHA IZQUIERDA, RE PAG o FLECHA ABAJO*/
		else if(tecla==40 || tecla==37 || tecla==33){
			$('.semaforo').css('opacity','0.4');
			$("#verde").css('opacity','1');
			$('body').css('background-color','white');
			color = 0;
        	}

		/*Suma al contador*/
        else if(tecla==107 || tecla==171){ /*más 30s*/
   			cont_mas_30s();
           }
        else if(tecla==109 || tecla==173){ /*menos 30s*/
			cont_menos_30s();
           }
		else if(tecla==49 || tecla==97){ /*más 1 min*/
           cont_mas_1min();
           }
		else if(tecla==50 || tecla==98){ /*más 2 min*/
           cont_mas_2min();
           }
        else if(tecla==51 || tecla==99){ /*más 3 min*/
           cont_mas_3min();
           }
		else if(tecla==52 || tecla==100){ /*más 4 min*/
           cont_mas_4min();
           }
		else if(tecla==53 || tecla==101){ /*más 5 min*/
           cont_mas_5min();
           }
		else if(tecla==54 || tecla==102){ /*más 6 min*/
           cont_mas_6min();
           }
		else if(tecla==55 || tecla==103){ /*más 7 min*/
           cont_mas_7min();
           }
		else if(tecla==56 || tecla==104){ /*más 8 min*/
           cont_mas_8min();
           }
		else if(tecla==57 || tecla==105){ /*más 9 min*/
           cont_mas_9min();
           }
		else if(tecla==48 || tecla==96){ /*más 10 min*/
           cont_mas_10min();
           }

		/*Abre página de Ayuda si pulsa F1*/
		else if(tecla==112){
			window.location=('ayuda.html');
           }
	}

	/* Funciones resultado ALEATORIO */
	function fijos() {
	    var myRdm = Math.random();
	    document.getElementById("bi").innerHTML    = Math.floor( 2*myRdm + 1);
	    document.getElementById("tri").innerHTML   = Math.floor( 3*myRdm + 1);
	    document.getElementById("tetra").innerHTML = Math.floor( 4*myRdm + 1);
	    document.getElementById("penta").innerHTML = Math.floor( 5*myRdm + 1);
	}

	function variables() {
	    var myRdm = Math.random();
		var a = document.getElementById("a").value;
		if(a !='') document.getElementById("w").innerHTML = Math.floor( a*myRdm + 1);

		var b = document.getElementById("b").value;
		if(b !='') document.getElementById("x").innerHTML = Math.floor( b*myRdm + 1);

		var c = document.getElementById("c").value;
		if(c !='') document.getElementById("y").innerHTML = Math.floor( c*myRdm + 1);

		var d = document.getElementById("d").value;
		if(d !='') document.getElementById("z").innerHTML = Math.floor( d*myRdm + 1);
	}
	
	/*Perder focus tras click*/
	function perderfocusAtras() {
		document.getElementById('iniciarAtras').blur();
		document.getElementById('inicializarAtras').blur();
		
		document.getElementById('cont_mas_10min').blur();
		document.getElementById('cont_mas_2min').blur();
		document.getElementById('cont_mas_30s').blur();
		document.getElementById('cont_menos_30s').blur();
	}
	
	function perderfocusCrono() {
		document.getElementById('iniciarCrono').blur();
		document.getElementById('inicializarCrono').blur();
	}

	/* Llamadas y funciones de AJUSTE DE VENTANA */
		$( window ).resize(function(){
			ajustar();
		});

	function ajustar(){
		var Tam = TamVentana();
		var nuTam=Math.floor(defTam*(Tam[0]/defVentana));
		$('#tiempoAtras').css("font-size",nuTam);
		$('#tiempoCrono').css("font-size",nuTam);
		$('.semaforo').css("height",nuTam*0.31);
		$('.hueco').css("height",nuTam*0.0175);
		
		$("#verde").css("width",$('#verde').css("height"));
		$("#rojo").css("width",$('#rojo').css("height"));
		$("#amarillo").css("width",$('#amarillo').css("height"));
	}

	function TamVentana() {
		 var Tamanyo = [0, 0];
		  if (typeof window.innerWidth != 'undefined')
		  {
			Tamanyo = [
				window.innerWidth,
				window.innerHeight
			];
		  }
		  else if (typeof document.documentElement != 'undefined'
			  && typeof document.documentElement.clientWidth !=
			  'undefined' && document.documentElement.clientWidth != 0)
		  {
		 Tamanyo = [
				document.documentElement.clientWidth,
				document.documentElement.clientHeight
			];
		  }
		  else {
          Tamanyo = [
				document.getElementsByTagName('body')[0].clientWidth,
				document.getElementsByTagName('body')[0].clientHeight
			];
		  }
		  return Tamanyo;
	}
