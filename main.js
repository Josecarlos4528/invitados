pedidoarray=[];
function enviar(){
    var pedido1=document.getElementById("pedido1").value;
    var pedido2=document.getElementById("pedido2").value;
    var pedido3=document.getElementById("pedido3").value;
    var pedido4=document.getElementById("pedido4").value;
    pedidoarray.push(pedido1);
    pedidoarray.push(pedido2);
    pedidoarray.push(pedido3);
    pedidoarray.push(pedido4);
    console.log(pedidoarray);
    document.getElementById("verpedido").innerHTML=pedidoarray;
    document.getElementById("enviarbtn").style.display="none";
    document.getElementById("ordenarbtn").style.display="inline-block";
}
function ordenar(){
    pedidoarray.sort();
    console.log(pedidoarray);
    document.getElementById("verpedido").innerHTML=pedidoarray;
}