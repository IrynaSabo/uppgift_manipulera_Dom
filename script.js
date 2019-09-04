let div=document.createElement("div"); //skapar element div
div.setAttribute("id","div1")// ger den nya elementen div en id="div"

let p=document.createElement("p"); //skappar element p
let textNode=document.createTextNode("My name is Iryna");//skapar själva texten
p.appendChild(textNode);

let element=div.appendChild(p);//sätter ihopp div med p
document.body.appendChild(element);// skriver ut på sidan
