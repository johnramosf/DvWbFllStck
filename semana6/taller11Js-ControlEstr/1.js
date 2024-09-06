/* 1 Escribe un programa que tome dos números como entrada y muestre el mayor de los dos.  */
document.write('Ejercicio 1-- <br/>');
let p = 5, q = 9, r = 7;
if (p > q) { document.write(` p:${p} es mayor que q: ${q}`) }
else { document.write(` q:${q} es mayor que p: ${p}`) };
document.write('<br/>');
document.write('<br/>');
document.write('Ejercicio 2-- <br/>');
p = 21, q = 9, r = 13;
if (p > q) {
    if (q > r) {
        document.write("El número r es el menor con un valor de:" + r);
    } else if (q == r) {
        document.write("Los numeros q y r son iguales y menores que p,   q y r: " + r);
    } else
        document.write("El numero q es el menor con un valor de : " + q);
} else if (p == q) {
    if (p > r) {
        document.write("El numero r es el menor con un valor de : " + r);
    } else if (q == r) {
        document.write("El numero p es igual a q e igual a r con un valor de : " + r);
    }
} else if (q <= r) {
    document.write("El número menor es p:" + p);
} else
    document.write("El número menor es r:" + p);

document.write('<br/>');
document.write('<br/>');
document.write('Ejercicio 3-- <br/>');
p = 30, q = 21, r = 13;
if(p>18){
    document.write("P es una persona mayor de edad <br/>");
}else{
    document.write("P es una persona menor de edad <br/>");
}
if(q>18){
    document.write("Q es una persona mayor de edad <br/>");
}else{
    document.write("Q es una persona menor de edad <br/>");
}
if(r>18){
    document.write("R es una persona mayor de edad <br/>");
}else{
    document.write("R es una persona menor de edad <br/>");
}
document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 4-- <br/>");
let u ='c', v = 'a', w = 'n', x = 'o'; 
const vocal = ['a','e','i','o','u'];

if(vocal.includes(u)){
 document.write(`La variable u: ${u} es una vocal <br/>`);
} else document.write(`La variable u: ${u} es una consonante <br/>`);

if(vocal.includes(v)){
document.write(`La variable v: ${v} es una vocal <br/>`);
} else document.write(`La variable u: ${v} es una consonante <br/>`);

if(vocal.includes(w)){
    document.write(`La variable w: ${w} es una vocal <br/>`);
} else document.write(`La variable u: ${w} es una consonante <br/>`);

if(vocal.includes(x)){
 document.write(`La variable x: ${x} es una vocal <br/>`);
} else document.write(`La variable x: ${x} es una consonante <br/>`);

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 5-- <br/>");
p = 30, q = 21, r = 13;
if((p%2)==0){
    document.write("p: " +p);
    document.write(" El primer numero es par <br/>");
} else document.write(" El primer numero es impar <br/>");
if((q%2)==0){
    document.write("q: " +q);
    document.write(" El segundo numero es par");
} else document.write(" El segundo numero es impar");
if((r%2)==0){
    document.write("r: " +r);
    document.write(" El tercer numero es par");
} else document.write(" El tercer numero es impar");
document.write("<br/>");

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 6-- <br/>");
p = 17, q = -9, r = 0; 
let s = -2;
document.write(" p: "+p);
if (p>0){
    document.write(" El primer numero es positivo <br/>");
}else if(p<0){
    document.write(" El primer numero es negativo <br/>");
} else {
    document.write(" El primer numero es 0 <br/>");
}

document.write(" q: "+q);
if (q>0){
    document.write(" El segundo numero es positivo <br/>");
}else if(q<0){
    document.write(" El segundo numero es negativo <br/>");
} else {
    document.write(" El segundo numero es 0 <br/>");
}

document.write(" r: "+r);
if (r>0){
    document.write(" El tercer numero es positivo <br/>");
}else if(p<0){
    document.write(" El tercer numero es negativo <br/>");
} else {
    document.write(" El tercer numero es 0 <br/>");
}

document.write(" s: "+s);
if (s>0){
    document.write(" El tercer numero es positivo <br/>");
}else if(s<0){
    document.write(" El tercer numero es negativo <br/>");
} else {
    document.write(" El tercer numero es 0 <br/>");

}
document.write('<br/>');
document.write("Ejercicio 7-- <br/>");
p = 1, q = -1, r = 1; s = -1;
if(p==q){
    document.write(`Los numeros entrada p: ${p} y q: ${q} son iguales <br/>`);
}else document.write(`Los numeros entrada p: ${p} y q: ${q} son diferentes <br/>`);
if(r==s){
    document.write(`Los numeros entrada r: ${r} y s: ${s} son iguales <br/>`);
}else document.write(`Los numeros entrada r: ${r} y s: ${s} son diferentes <br/>`);
if(p==r){
    document.write(`Los numeros entrada p: ${p} y r: ${r} son iguales <br/>`);
}else document.write(`Los numeros entrada p: ${p} y r: ${r} son diferentes <br/>`);
if(q==s){
    document.write(`Los numeros entrada q: ${q} y s: ${s} son iguales <br/>`);
}else document.write(`Los numeros entrada q: ${q} y s: ${s} son diferentes <br/>`);

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 8-- <br/>");
p = Math.random()*10, q =Math.random()*10, r = Math.random()*10;
document.write(`p: ${p} q: ${q} r: ${r} <br/>`);
if(p<q && q<r){document.write(`el numero del medio es q: ${q} <br/>`)};
if(q<p && p<r){document.write(`el numero del medio es p: ${p} <br/>`)};
if(p<r && r<q){document.write(`el numero del medio es r: ${r} <br/>`)};

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 9-- <br/>");
p = parseInt(Math.random()*5, 10);
document.write(`Nota numerica: ${p} <br/>`); 
switch(p){
case(1): document.write("Calificacion F <br/>"); break;
case(2): document.write("Calificacion D <br/>"); break;
case(3): document.write("Calificacion C <br/>"); break;
case(4): document.write("Calificacion B <br/>"); break;
case(5): document.write("Calificacion A <br/>"); break;    
}

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 10-- <br/>");
p = parseInt(Math.random()*8);
document.write(`p: ${p} <br/>`);
switch(p){
    case(1): document.write("Es lunes <br/>"); break;
    case(2): document.write("Es martes <br/>"); break;
    case(3): document.write("Es miercoles <br/>"); break;
    case(4): document.write("Es jueves <br/>"); break;
    case(5): document.write("Es viernes <br/>"); break;
    case(6): document.write("Es sabado <br/>"); break;
    case(7): document.write("Es domingo <br/>"); break;            
}

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 11-- <br/>");
for(let i=1;i<=10;i++){
    document.write(`${i}, &nbsp; `);
}

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 12-- <br/>");
for(let i=10;i>0;i--){
    document.write(`${i}, &nbsp; `);
}

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 13-- <br/>");
for(let i=1;i<=20;i++){
    if(i%2==0) document.write(`${i}, &nbsp; `);
}

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 14-- <br/>");
for(let i=1;i<=20;i++){
    if(!(i%2==0)) document.write(`${i}, &nbsp; `);
}

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 15-- <br/>");
p = parseInt(Math.random()*10);
document.write(`Tabla de p: ${p} <br/> `);
for(let i=1;i<=10;i++){
    document.write(` ${p} x ${i} = ${p*i} <br/>`);
}

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 16-- <br/>");
p = 0;
for(let i=1;i<=10;i++){
   p+=i; 
   document.write(` ${p} ,`)
}
document.write(` La suma de los numeros del 1 al 10 es: ${p} <br/>`);

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 17-- <br/>");
p = parseInt(Math.random()*10);
q=1;
document.write(`Factorial de  p: ${p}! <br/>`);
for(let i=1;i<10;i++){
    q*=i;
    if(i==p)break;
}
document.write(`factorial de p: ${p} es: ${q} <br/>`)

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 18-- <br/>");
p=0,q=1,r=0;
document.write("--Serie de Fibonacci--  <br/>");
for(let i = 0; i<10; i++){
   r=p+q;
   p=q;
   q=r;
   document.write(`Termino # ${i}, valor: ${r} <br/>`);
}

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 19-- <br/>");
document.write("Divisores enteros de numeros enteros <br/>");
const primos = [1,3,5,7,9,11,13,17,19,23,29,31,37,41,43,47];
var numero = 654608329472963;
let nDivisores=0;
document.write(`Divisores de un numero: ${numero} <br/>`);

primos.forEach((n)=>{if((numero%n)==0){document.write(n+", ");nDivisores++}});
document.write("Numero de divisores: "+nDivisores);
document.write('<br/>');

document.write('<br/>');
document.write('<br/>');
document.write("Ejercicio 20-- <br/>");
const vocales = ['a','e', 'i','o','u','á', 'é','í','ó','ú'];
const consonantes = ['b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z'];
const str="Escribe un programa que muestra el número de vocales y consonantes en una cadena de texto dada";
let voc=0,cons=0;
let longitud=str.length;
document.write(`La Cadena: ${str} <br/> tiene una longitud de ${longitud} caracteres <br/>`);
for(let i=0; i<longitud; i++){
  if(vocales.includes(str.charAt(i))){voc++}
  else if(consonantes.includes(str.charAt(i))){cons++}
}
document.write(`La cadena dada tiene ${voc} vocales, y ${cons} consonantes <br/>`);
document.write('<br/>');
document.write('<br/>');
document.write('------------------------------Fin---------------------------------------');