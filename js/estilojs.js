clientes = [];
var contador = 0;
var resul = document.getElementById("resultado");

var formulario = `<form method="GET">
    <fieldset>
        <legend>Datos del cliente</legend>
        <div class="input-field col s12">
            <label for="nombres">Nombres</label>
            <input type="text" id="nombres" required>
        </div>
        <div class="input-field col s12">
            <label for="apellidos">Apellidos</label>
            <input type="text" id="apellidos" required>
        </div>
        <div class="input-field col s12">
            <label for="direccion">Direccion</label>
            <input type="text" id="direccion" required>
        </div>
        <div class="input-field col s6">
            <label for="correo">Correo electronico</label>
            <input type="email" id="correo" required>
        </div>
        <div class="input-field col s6">
            <label for="telefono">Telefono</label>
            <input type="text" id="telefono" required>
        </div>
        <button class="btn waves-effect waves-light" type="reset" onclick="nuevocliente()">Enviar</button>
    </fieldset>

    </form>`

var tablaclientes = `<table class="highlight" id="tclientes">
                    <tr>
                        <th>N°</th><th>Nombres</th><th>Apellidos</th><th>Direccion</th><th>Correo Electronico</th><th>Telefono</th>
                    </tr>

                    </table>`

var mensajeCliente = `
                    <div class="row">
                        <div class="col s12">Campos incompletos, favor llenar todos los campos para hacer su registro</div>
                    </div>` 

 var buscarcli = `
                 <div class="input-field col s12">
                        
                    <label for="buscarCli">Ingrese parametro a buscar:</label>
                    <input type="text" id="buscarCli" required>
                    <button class="btn waves-effect waves-light" type="reset" onclick="mostrarBusqueda()">Buscar</button>
        
                </div>`
var mensajeBuscarCliente = `
                <div class="row">
                    <div class="col s12">¡Cliente no encontrado!</div>
                </div>`

function nuevocli(){
    resul.innerHTML = formulario;
}

function mostrarcli(){
    resul.innerHTML = tablaclientes;
    mostrartabla();
}

function verclientes(){
    resul.innerHTML = tablaclientes;
    mostrartabla();
    mostrarContador();
}

function nuevocliente(){
    console.log("entre a la funcion");

    var cnombres = document.getElementById("nombres").value;
    var capellidos = document.getElementById("apellidos").value;
    var cdireccion = document.getElementById("direccion").value;
    var ccorreo = document.getElementById("correo").value;
    var ctelefono = document.getElementById("telefono").value;

    if (cnombres != ""){
        if (capellidos != ""){
            if (cdireccion != ""){
                if (ccorreo != ""){
                    if (ctelefono != ""){
                        contador = contador + 1
                        clientes.push({nombres:cnombres,apellidos:capellidos,direccion:cdireccion,correo:ccorreo,telefono:ctelefono});
                    }
                    else{
                        mensajeIngresarCli();
                    }
                }
                else{
                    mensajeIngresarCli();
                }
            }
            else {
                mensajeIngresarCli();
            }
        }else {
            mensajeIngresarCli();
        }
    }else{
        mensajeIngresarCli();
    }

    
    console.log(clientes);
}

function mostrartabla(){
    var tclientes = document.getElementById("tclientes");
    for(i in clientes){
        tclientes.innerHTML += `<tr>
                                <td>${parseInt(i)+ parseInt(1)}</td>
                                <td>${clientes[i].nombres}</td>
                                <td>${clientes[i].apellidos}</td>
                                <td>${clientes[i].direccion}</td>
                                <td>${clientes[i].correo}</td>
                                <td>${clientes[i].telefono}</td>
                                </tr>`;
    }

}

function buscarcliente(){
    resul.innerHTML = buscarcli;
}

function mostrarBusqueda(){
    console.log("entre a la funcion");
    var parametro = document.getElementById("buscarCli").value;
    var encontrado = false;
    var posicion = 0;
    for (var i = 0; i < contador; i++) {
            if((parametro == clientes[i].nombres) || (parametro == clientes[i].apellidos) || 
            (parametro == clientes[i].direccion) || (parametro == clientes[i].correo) || (parametro[i].telefono)){
                encontrado = true;
                posicion = i;
            }
            
        }
    if(encontrado == true){
        verResultado(posicion);
        
    }
    else{
        mensajeBuscarCli();
    }
    
    
}

function verResultado(posicion){
    resul.innerHTML = tablaclientes;
    var tclientes = document.getElementById("tclientes");

    tclientes.innerHTML += `<tr>
                            <td>${parseInt(posicion)+ parseInt(1)}</td>
                            <td>${clientes[posicion].nombres}</td>
                            <td>${clientes[posicion].apellidos}</td>
                            <td>${clientes[posicion].direccion}</td>
                            <td>${clientes[posicion].correo}</td>
                            <td>${clientes[posicion].telefono}</td>
                            </tr>`;
}

function mensajeIngresarCli(){
    resul.innerHTML = mensajeCliente;
}

function mensajeBuscarCli(){
    resul.innerHTML = mensajeBuscarCliente;
}
function eliminarprimer(){
    console.log("entre a la funcion");
    console.log(clientes.shift());
    verclientes();
    contador = contador - 1;
}
function mostrarContador(){
    console.log(contador);
    
} 
function eliminarultimo(){
    console.log(clientes.pop());
    verclientes();
    contador = contador - 1;
}
function borrar(){
    clientes = [];
    verclientes();
    contador = 0;
}           