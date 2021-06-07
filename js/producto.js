var productos = [];
        var princi = document.getElementById("principal");
        var contador = 0;

        var formulario = `<form method="GET">
                <fieldset>
                    <legend>Datos del producto</legend>
                    <div class="input-field col s12">
                        <label for="nomProduc">Nombre de Producto</label>
                        <input type="text" id="nomProduc" required>
                    </div>

                    <div class="input-field col s12">
                        <label for="marca">Marca</label>
                        <input type="text" id="marca" required>
                    </div>

                    <div class="input-field col s6">
                        <label for="unidades">Unidades</label>
                        <input type="number" id="unidades" required>
                    </div>

                    <div class="input-field col s6">
                        <label for="unitPrice">Precio Unitarios</label>
                        <input type="number" id="unitPrice" required>
                    </div>
                    
                    <div class="input-field col s6">
                        <label for="date">Fecha de ingreso</label>
                        <input type="date" id="date" required>
                    </div>

                    <button class="btn waves-effect waves-light" type="reset" onclick="nuevoProducto()">Registrar</button>
                    
                </fieldset>
            </form>`

        var tablaproductos = `<table class="highlight" id="tproductos">
                <tr>
                    <th>ID</th><th>Producto</th><th>Marca</th><th>Unidades</th><th>Precio Unitario</th><th>Fecha de ingreso</th>
                </tr>
            </table>`

        var buscarproducto = `
            <div class="input-field col s12">
                
                <label for="buscarPro">Ingrese parametro a buscar:</label>
                <input type="text" id="buscarPro" required>
                <button class="btn waves-effect waves-light" type="reset" onclick="mostrarBusqueda()">Buscar</button>

            </div>`

        var mensajeIngresarProducto = `
            <div class="row">
                <div class="col s12">¡Dede llenar todos los campos para hacer su registro!</div>
            </div>` 
        
        var mensajeBuscarProducto = `
            <div class="row">
                <div class="col s12">¡Producto no encntrado!</div>
            </div>`
        
        function nuevopro(){
            princi.innerHTML = formulario;
        }

        function verpro(){
            princi.innerHTML = tablaproductos;
            mostrarTabla();
            mostrarContador();
        }

        function nuevoProducto(){

            console.log("entre a la funcion");
            
            
            var lproducto = document.getElementById("nomProduc").value;
            var lmarca = document.getElementById("marca").value;
            var lunidades = document.getElementById("unidades").value;
            var lpreciounit = document.getElementById("unitPrice").value;
            var lfechaingreso = document.getElementById("date").value;

            if(lproducto != ""){
                if(lmarca != ""){
                    if(lunidades != ""){
                        if(lpreciounit != ""){
                            if(lfechaingreso != ""){
                                contador = contador + 1;    
                                productos.push({producto:lproducto,marca:lmarca,unidades:lunidades,preciounitario:lpreciounit,fecha:lfechaingreso})
                            }
                            else{
                                mensajeRegistrarPro();
                            }     
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
            
            
            console.log(productos);
        }
        
        function mostrarTabla(){
            var tproductos = document.getElementById("tproductos");

            for(i in productos){
                tproductos.innerHTML += `<tr>
                                        <td>${parseInt(i)+ parseInt(1)}</td>
                                        <td>${productos[i].producto}</td>
                                        <td>${productos[i].marca}</td>
                                        <td>${productos[i].unidades}</td>
                                        <td>$ ${productos[i].preciounitario}</td>
                                        <td>${productos[i].fecha}</td>
                                        </tr>`;
            }
        }
    
        function eliminarprimer(){
            console.log(productos.shift());
            verpro();
            contador = contador - 1;
        }

        function eliminarultimo(){
            console.log(productos.pop());
            verpro();
            contador = contador - 1;
        }

        function borrar(){
            productos = [];
            verpro();
            contador = 0;
        }
        
        function buscarProducto(){
            princi.innerHTML = buscarproducto;
        }

        function verResultado(posicion){
            princi.innerHTML = tablaproductos;
            var tproductos = document.getElementById("tproductos");

            tproductos.innerHTML += `<tr>
                                    <td>${parseInt(posicion)+ parseInt(1)}</td>
                                    <td>${productos[posicion].producto}</td>
                                    <td>${productos[posicion].marca}</td>
                                    <td>${productos[posicion].unidades}</td>
                                    <td>$ ${productos[posicion].preciounitario}</td>
                                    <td>${productos[posicion].fecha}</td>
                                    </tr>`;
        }

        function mostrarBusqueda(){
            console.log("entre a la funcion");
            var parametro = document.getElementById("buscarPro").value;
            var encontrado = false;
            var posicion = 0;
            for (var i = 0; i < contador; i++) {
                    if((parametro == productos[i].producto) || (parametro == productos[i].marca) || (parametro == productos[i].unidades) || (parametro == productos[i].preciounitario) || (parametro == productos[i].fecha)){
                        encontrado = true;
                        posicion = i;
                        console.log("entre a la funcion de buscar");
                    }
                    
                }
            if(encontrado == true){
                verResultado(posicion);
                
            }
            else{
                mensajeBuscarPro();
            }
            
            
        }
        function mostrarContador(){
            console.log(contador);
            
        }
        function mensajeRegistrarPro(){
            princi.innerHTML = mensajeIngresarProducto;
        }
        function mensajeBuscarPro(){
            princi.innerHTML = mensajeBuscarProducto;
        }