/*  let totalCarrito= 0
let iteracion = true

while(iteracion == true){
    let opcion=parseInt(prompt("Ingrese la opcion de bebida que quiera llevar: \n1-fernet $10.000 \n2-pack de cerveza $5.000 \n3- agua mineral $500"))
    switch (opcion){
        case 1:
            totalCarrito = totalCarrito + 10000
            break;
        case 2:
            totalCarrito = totalCarrito + 5000
            break;
        case 3:
            totalCarrito = totalCarrito + 500
            break;
        default:
            alert("No ingreso ninguna opcion correcta");
            break;
    }
    iteracion = confirm("¿Quieres agregar mas productos al carrito?")
    
    if(iteracion == false && totalCarrito !=0){
        alert(`El total a pagar es de: ${totalCarrito}`)
    }
       
} 
 */


let totalEntrada = 0
let iteracion = true

 alert("Bienvenido al Club Atletico River Plate") 

let repeat = true;

while(repeat){
    let bienvenida = prompt("Ingrese su nombre y apellido: ");
    
    if(bienvenida !== null && bienvenida !== "" &&isNaN(bienvenida)){
        alert("Bienvenido " + bienvenida +"!");
        repeat = false;
    }else{
        alert("Ingresaste mal los datos,Vuelve a intentarlo")
    }

}
    

while( iteracion == true){
    let opcion =parseInt(prompt("Ingrese la opcion de la tribuna para sacar su entrada: \n1-Tribuna Sivori $18.000 \n2-Tribuna Centenario $15.000 \n3-Tribuna San Martin $35.000 \n4-Tribuna Belgrano $25.000"))
    switch(opcion){
        case 1:
            totalEntrada = totalEntrada + 18000
            break;
        case 2:
            totalEntrada = totalEntrada + 15000
            break;
        case 3:
            totalEntrada = totalEntrada + 35000
            break;
        case 4:
            totalEntrada = totalEntrada +25000
            break;
        default:
            alert("No ingreso ninguna opcion correcta");
            break;
    }
    iteracion = confirm("¿Quieres seguir comprando entradas?")
    if(iteracion == false && totalEntrada != 0){
        alert(`El total a pagar es de: $${totalEntrada}`)
    }
    
    
}

function despedida(bienvenida){
    alert("Muchas gracias por su compra!")
}

despedida()

 