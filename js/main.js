const pizzas = [
    {tipo: "muzzarella", precio: 1200},
    {tipo: "fugazzetta", precio: 1500},
    {tipo: "napolitana", precio: 1550},
    {tipo: "calabresa", precio: 1800},
    {tipo: "especial", precio: 2000},  
];


let carrito = []

let seleccion = prompt("Bienvenidos a Pizzeria El Gaucho, Querias realizar un pedido? Ingrese si o no")

while(seleccion !== "si" && seleccion !== "no") {
    seleccion = prompt("Por favor Ingresa si o no")
}
if(seleccion === "si" ){
    alert("Excelente! Acá tenés todas nuestras Pizzas!!")
    let menu = pizzas.map((pizza) => pizza.tipo + " $" + pizza.precio )
    alert(menu.join("  -   "))
}else if (seleccion ==="no"){
    alert("Gracias por visitarnos!")
}

while(seleccion !="no"){
    let producto = prompt("Ingresá el nombre de la pizza que quieras (muzzarella, fugazzetta, napolitana, calabresa o especial)")
    let precio = 0

    if(producto == "muzzarella" || producto =="fugazzetta" || producto =="napolitana" || producto =="calabresa" || producto =="especial"){
        switch(producto){
            case "muzzarella":
                 precio = 1200;
                 break;
            case "fugazzetta":
                precio = 1500;
                break;
            case "napolitana":
                precio=1550;
                break;
            case "calabresa":
                precio=1800;
                break;
            case "especial":
                precio=2000;
                break
            default:
                break;
        }
    
        let cantidad = parseInt(prompt("Cuantas unidades se quiere llevar? Ingrese numero"))
        carrito.push({producto,cantidad,precio})
        console.log(carrito)
    } else {
    alert ("no tenemos ese producto!")
    }
    seleccion = (prompt("Querés agregar otro producto a tu pedido? Ingresa si o no"))
    
    while(seleccion === "no"){
        let entrega = prompt("Perfecto, ahora ingresá si querés delivery o retiro")
        if(entrega !== "delivery" && entrega !== "retiro"){
        entrega=prompt("Por favor, escribí : delivery o retiro")        
        }
        alert("Gracias por elegirnos! En consola tu pedido xD")
        carrito.forEach((carritoTotal) => { 
        console.log(`producto: ${carritoTotal.producto}, cantidad: ${carritoTotal.cantidad}, total: ${carritoTotal.precio*carritoTotal.cantidad}`)
        
    })
    break;
    
    }
const total = carrito.reduce((sum, el) => sum + el.precio*el.cantidad, 0)
console.log(`El monto total de tu pedido sería =  $${total}`)
}
