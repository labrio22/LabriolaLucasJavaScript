        /* SE CREA FORMULARIO AL CLICKEAR 
                    BOTON COMENZAR */

        document.getElementById("empezar").addEventListener("click", function () {
            let contenedorForm = document.createElement("form");
            contenedorForm.innerHTML = `
              <form action="" method="post">
              <label for="nombre">Ingrese su nombre</label>
              <input type="text" id="nombre" name="nombre">
           
              <label for="edad">Edad</label>
              <input type="text" id="edad" name="edad">
           
              <label for="peso">Peso</label>
              <input type="text" id="peso" name="peso">
           
              <label for="altura">Altura</label>
              <input type="text" id="altura" name="altura">
              <select name="genero" id="genero">
                    <option value="escoger"> <selected>Elija una opción</selected></option>
                    <option value="hombre">hombre</option>
                    <option value="mujer">mujer</option>
            </select>
            <select name="nivelDeActividad" id="nivelDeActividad">
                    <option value="nivelDeActividad"><selected>Elija una opción</selected></option>
                    <option value="moderada">moderada</option>
                    <option value="ligera">ligera</option>
                    <option value="fuerte">fuerte</option>
            </select>
              </form>
              <input id="botoncito1" type="submit" value="Enviar">
              `;
              document.body.appendChild(contenedorForm);

              /* TRAIGO LOS INPUTS 
              CON SUS RESPECTIVOS ID*/

            document.getElementById("botoncito1").addEventListener("click", function (e) {
                e.preventDefault();
            let nombreValor = document.getElementById("nombre").value;
            let edadValor = parseFloat(document.getElementById("edad").value);
            let pesoValor = parseFloat(document.getElementById("peso").value);
            let alturaValor = parseFloat(document.getElementById("altura").value);
            let generoValor = document.getElementById("genero").value;
            let nivelDeActividad = document.getElementById("nivelDeActividad").value;

            // Metabolismo Basal Calculator
            function cuentaImc(pesoValor, alturaValor){
              let resultadoImc = pesoValor / (alturaValor**2);
              return resultadoImc;
            }
            let imc = cuentaImc(pesoValor,alturaValor);
        
            console.log("Su indice de masa muscular es de " + imc)
        
             if (imc > 25) {
                 console.log('Su masa corporal esta por encima, tenga cuidado!')
             } else if (imc < 25) {
                 console.log('Su masa corporal esta bien, mantengase asi!')
             }
             
             let metabolismoBasalUsuario;
             
             if (generoValor === 'hombre') {
                 metabolismoBasalUsuario = (10 * pesoValor) + (6.25 * alturaValor) - (5*edadValor) + 5
                 console.log('Su metabolisimo basal es de ' + parseInt(metabolismoBasalUsuario) + ' calorias para mantener')
             } else if (generoValor === 'mujer') {
                 metabolismoBasalUsuario = (10 * pesoValor) + (6.25 * alturaValor) - (5*edadValor) - 161
                 console.log('Su calorias de reposo son ' + parseInt(metabolismoBasalUsuario) + ' calorias para mantener')
             }
             
             // Calorias a comer segun tu metabolismo basal
             
             if (nivelDeActividad === "moderad") {
                 let actividadModerada = (metabolismoBasalUsuario * 1.3)
                 console.log('Su calorias a consumir para mantener son ' + actividadModerada)
             
             } else if (nivelDeActividad === "ligera") {
                 let actividadLigera =  (metabolismoBasalUsuario * 1.5)
                 console.log('Su calorias a consumir para mantener son ' + actividadLigera)
             
             } else if (nivelDeActividad === "fuerte") {
                 let actividadFuerte = (metabolismoBasalUsuario * 1.7)
                 alert('Su calorias a consumir para mantener son ' + actividadFuerte)
             
             } else {
                 console.log('Número incorrecto')
             }

             // CREACION DE NUEVA PERSONA SEGUN DATOS INGRESADOS POR EL USUARIO
            
                    class Personas {
                        constructor(nombreValor, edadValor, pesoValor, alturaValor) {
                            this.nombreValor = nombreValor;
                            this.edadValor = edadValor;
                            this.pesoValor = pesoValor;
                            this.alturaValor = alturaValor;
                        }
                    
                        registrado() {
                            alert(`El usuario ${this.nombreValor} ha sido guardado correctamente`);
                        }
                    }
            
            const persona1 = new Personas(nombreValor , edadValor, pesoValor, alturaValor);
            
            persona1.registrado();
            // console.log(persona1);
            
            let personasCreadas = [ {nombreValor: 'Mario ', edadValor:50, pesoValor:75, alturaValor:180},
                                    {nombreValor: 'Juan ', edadValor:45, pesoValor:68, alturaValor:170},
                                    {nombreValor: 'Jesus ', edadValor:19, pesoValor:71, alturaValor:190}
                                 ];
            
            personasCreadas.push(persona1);
            const avisoUsuariosNuevos = personasCreadas.map(persona => {
                return `Nombre: ${persona.nombreValor}, Edad: ${persona.edadValor}, Peso: ${persona.pesoValor}, Altura: ${persona.alturaValor}`;
            }).join('\n');
            
            personasCreadas.forEach((persona, x) => {
                const claveUnica = `persona_${x}`;
                localStorage.setItem(claveUnica, JSON.stringify(persona));
            }); 
            console.log(avisoUsuariosNuevos);

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const personaData = JSON.parse(localStorage.getItem(key));
                console.log(`Clave: ${key}, Datos:`, personaData);
            }           
              console.log("Ha sido un exito");
        })
        
    })
    
    

