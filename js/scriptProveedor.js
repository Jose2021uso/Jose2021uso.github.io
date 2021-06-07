var proveedores = [];
        var princi = document.getElementById("principal");
        var contador = 0;

        var formulario = `<form method="GET">
                <fieldset>
                    <legend>Datos del proveedor</legend>
                    <div class="input-field col s12">
                        <label for="nomProv">Nombre de Proveedor</label>
                        <input type="text" id="nomProv" required>
                    </div>

                    <div class="input-field col s12">
                        <label for="telef">Telefono</label>
                        <input type="text" id="telef" required>
                    </div>

                    <div class="input-field col s6">
                        <label for="correo">Correo</label>
                        <input type="email" id="correo" required>
                    </div>

                    <div class="input-field col s6">
                        <label for="direccion">Dirección</label>
                        <input type="text" id="direccion" required>
                    </div>
                    

                    <button class="btn waves-effect waves-light" type="reset" onclick="nuevoProv()">Registrar</button>
                    
                </fieldset>
            </form>`

        var tablaproveedores = `<table class="highlight" id="tproveedores">
                <tr>
                    <th>N°</th><th>Proveedor</th><th>Teléfono</th><th>Correo</th><th>Dirección</th>
                </tr>
            </table>`

        var buscarproveedor = `
            <div class="input-field col s12">
                
                <label for="buscarProv">Ingrese parametro a buscar:</label>
                <input type="text" id="buscarProv" required>
                <button class="btn waves-effect waves-light" type="reset" onclick="mostrarBusqueda()">Buscar</button>

            </div>`

        var mensajeIngresarProveedor = `
            <div class="row">
                <div class="col s12">¡Dede llenar todos los campos para hacer su registro!</div>
            </div>` 
        
        var mensajeBuscarProveedor = `
            <div class="row">
                <div class="col s12">¡Proveedor no encntrado!</div>
            </div>`
        
        function nuevoproveedor(){
            princi.innerHTML = formulario;
        }

        function verproveedor(){
            princi.innerHTML = tablaproveedores;
            mostrarTabla();
            mostrarContador();
        }

        function nuevoProv(){

            console.log("entre a la funcion");
            
            
            var lnombre = document.getElementById("nomProv").value;
            var ltelefono = document.getElementById("telef").value;
            var lcorreo = document.getElementById("correo").value;
            var ldireccion = document.getElementById("direccion").value;

            if(lnombre != ""){
                if(ltelefono != ""){
                    if(lcorreo != ""){
                        if(ldireccion != ""){ 
                            contador = contador + 1;    
                            proveedores.push({nombre:lnombre,telefono:ltelefono,correo:lcorreo,direccion:ldireccion}) 
                        }
                        else{
                            mensajeRegistrarPro();
                         }
                    }else{
                        mensajeRegistrarPro();
                    }
                }else{
                    mensajeRegistrarPro();
                }
            }
            else{
                mensajeRegistrarPro();
            }
            
            
            console.log(proveedores);
        }
        
        function mostrarTabla(){
            var tproveedores = document.getElementById("tproveedores");
            
            for(i in proveedores){
                tproveedores.innerHTML += `<tr>
                                        <td>${parseInt(i)+ parseInt(1)}</td>
                                        <td>${proveedores[i].nombre}</td>
                                        <td>${proveedores[i].telefono}</td>
                                        <td>${proveedores[i].correo}</td>
                                        <td>${proveedores[i].direccion}</td>
                                        </tr>`;
            }
        }
    
        function eliminarprimer(){
            console.log(proveedores.shift());
            verproveedor();
            contador = contador - 1;
        }

        function eliminarultimo(){
            console.log(proveedores.pop());
            verproveedor();
            contador = contador - 1;
        }

        function borrar(){
            proveedores = [];
            verproveedor();
            contador = 0;
        }
        
        function buscarproveedores(){
            princi.innerHTML = buscarproveedor;
        }

        function verResultado(posicion){
            princi.innerHTML = tablaproveedores;
            var tproveedores = document.getElementById("tproveedores");

            tproveedores.innerHTML += `<tr>
                                    <td>${parseInt(posicion)+ parseInt(1)}</td>
                                    <td>${proveedores[posicion].nombre}</td>
                                    <td>${proveedores[posicion].telefono}</td>
                                    <td>${proveedores[posicion].correo}</td>
                                    <td>${proveedores[posicion].direccion}</td>
                                    </tr>`;
        }

        function mostrarBusqueda(){
            console.log("entre a la funcion");
            var parametro = document.getElementById("buscarProv").value;
            var encontrado = false;
            var posicion = 0;
            for (var i = 0; i < contador; i++) {
                    if((parametro == proveedores[i].nombre) || (parametro == proveedores[i].telefono) || (parametro == proveedores[i].correo) || (parametro == proveedores[i].direccion)){
                        encontrado = true;
                        posicion = i;
                    }
                    
                }
            if(encontrado == true){
                verResultado(posicion);
                
            }
            else{
                mensajeBuscarProv();
            }
            
            
        }
        function mostrarContador(){
            console.log(contador);
            
        }
        function mensajeRegistrarPro(){
            princi.innerHTML = mensajeIngresarProveedor;
        }
        function mensajeBuscarProv(){
            princi.innerHTML = mensajeBuscarProveedor;
        }