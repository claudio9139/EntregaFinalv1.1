

document.addEventListener('DOMContentLoaded', () => {
console.log(baseDeDatos);

    
    /*
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Automatismos Diseño ',
            precio: 10000,
            imagen: 'images/automatismos(233).jpg'
        },
        {
            id: 2,
            nombre: 'Prog. PLC Configuración',
            precio: 12000,
            imagen: 'images/PLC(234).jpg'
        
        },
        {
            id: 3,
            nombre: ' Tableros Eléctricos',
            precio: 21000,
            imagen: 'images/TABLEROCAJAMOLDEADA(233).jpg'
        },
        {
            id: 4,
            nombre: 'Transferencia Red Generador',
            precio: 30000,
            imagen: 'images/TTA(234).jpg'
        },


        {
            id: 5,
            nombre: ' Generadores de emergencia',
            precio: 30000,
            imagen: 'images/generador(233).jpg'
        },
         
        {
            id: 6,
            nombre: 'Tableros Baja Tensión',
            precio: 30000,
            imagen: 'images/TTA(233).jpg'
        }


    ];
*/
    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            let i=0
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${divisa} ${info.precio}`;
            // Boton
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            
           //Boton Secundario
           const miNodoBoton1 = document.createElement('button');
           miNodoBoton1.classList.add('btn', 'btn-primary');
           miNodoBoton1.textContent = "info";
           miNodoBoton1.setAttribute('marcador', info.id);
           miNodoBoton1.addEventListener('click', anyadirParrafoAlCard); 
           //miNodoCardBody.appendChild(miNodoBoton1);
           
           /*const miNodoBoton2 = document.createElement('button');
           miNodoBoton2.classList.add('btn', 'btn-primary');
           miNodoBoton2.textContent = "info2";
           miNodoBoton2.setAttribute('marcador', info.id);
           miNodoBoton2.addEventListener('click', anyadirParrafoAlCard); 
           //miNodoCardBody.appendChild(miNodoBoton2); 
           
           const miNodoBoton3 = document.createElement('button');
           miNodoBoton1.classList.add('btn', 'btn-primary');
           miNodoBoton1.textContent = "info";
           miNodoBoton1.setAttribute('marcador', info.id);
           miNodoBoton1.addEventListener('click', anyadirParrafoAlCard); 
           //miNodoCardBody.appendChild(miNodoBoton1); 

           const miNodoBoton4 = document.createElement('button');
           miNodoBoton1.classList.add('btn', 'btn-primary');
           miNodoBoton1.textContent = "info";
           miNodoBoton1.setAttribute('marcador', info.id);
           miNodoBoton1.addEventListener('click', anyadirParrafoAlCard); 
           //miNodoCardBody.appendChild(miNodoBoton1); 

           const miNodoBoton5 = document.createElement('button');
           miNodoBoton1.classList.add('btn', 'btn-primary');
           miNodoBoton1.textContent = "info";
           miNodoBoton1.setAttribute('marcador', info.id);
           miNodoBoton1.addEventListener('click', anyadirParrafoAlCard); 
           //miNodoCardBody.appendChild(miNodoBoton1); 

           const miNodoBoton6 = document.createElement('button');
           miNodoBoton1.classList.add('btn', 'btn-primary');
           miNodoBoton1.textContent = "info";
           miNodoBoton1.setAttribute('marcador', info.id);
           miNodoBoton1.addEventListener('click', anyadirParrafoAlCard); 
           //miNodoCardBody.appendChild(miNodoBoton1); 
        */



            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodoCardBody.appendChild(miNodoBoton1);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });

        



    }

    
    
    function anyadirParrafoAlCard (miNodoBoton1) {

    //console.log(evento.item) ;
    console.log(typeof(miNodoBoton1));
    console.log(miNodoBoton1);
    X=miNodoBoton1.clientX;
    Y=miNodoBoton1.clientY;
    console.log(X,Y);
    if((X>200 && X<240) && (Y>400 && Y<450)) {

        console.log("PRESIONO EL BOTON AUTOMATISMOS DISEÑOS");
        
        
        
        // Uso:
        // agregarlo por 5 segundos en el documento
        
        const para = document.createElement("p");
        para.innerText = "AUTOMATISMOS DISEÑOS";
        document.body.appendChild(para);
        setTimeout(() => para.innerText ="", 5000);









    }
    if (((X>360 && X<450) && (Y>400 && Y<450))) {

        console.log("PRESIONO EL BOTON PROGRAMACION DE PLC");

        const para = document.createElement("p");
        para.innerText = "PROGRAMACION DE PLC";
        document.body.appendChild(para);
        setTimeout(() => para.innerText ="", 5000);


     }
     if  (((X>640 && X<670) && (Y>400 && Y<460))) {

        console.log("PRESIONO EL BOTON TABLEROS ELECTRICOS");

        const para = document.createElement("p");
        para.innerText = "TABLEROS ELECTRICOS";
        document.body.appendChild(para);
        setTimeout(() => para.innerText ="", 5000);

     }
     if  (((X>200 && X<240) && (Y>720 && Y<750))) {    

        console.log("PRESIONO EL BOTON TRANSFERENCIA RED GENERADOR");

        const para = document.createElement("p");
        para.innerText = "TRANSFERENCIA RED GENERADOR";
        document.body.appendChild(para);
        setTimeout(() => para.innerText ="", 5000);

     }
     if  (((X>402 && X<450) && (Y>700 && Y<750))) {  

        console.log("PRESIONO EL BOTON DE  GENERADORES DE EMERGENCIA");

        const para = document.createElement("p");
        para.innerText = "GENERADOR STAND-BY";
        document.body.appendChild(para);
        setTimeout(() => para.innerText ="", 5000);

    }
    if  (((X>640 && X<670) && (Y>720 && Y<750))) {   
        
        console.log("PRESIONO EL BOTON DE  TABLEROS DE BAJA TENSION");

        const para = document.createElement("p");
        para.innerText = "TABLEROS DE BAJA TENSION";
        document.body.appendChild(para);
        setTimeout(() => para.innerText ="", 5000);

    }


    
    //console.log(X);
    
    /*let W=baseDeDatos[0];
    console.log(W);
    console.log(baseDeDatos[0]["id"]);
    console.log(baseDeDatos[5]["nombre"]);
    console.log(baseDeDatos[5]["descripcion"]);
    //const para = document.createElement("p");

    //para.innerText = "This is a paragraph";
    //document.getElementById("").innerHTML=miNodoBoton.textContent;

*/

    }  
    
    
    
    
    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} = ${divisa }${miItem[0].precio}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});