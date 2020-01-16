let who = ['the dog','my granma','his turtle','my bird'];

let what = ['eat','pissed','crushed','broked'];

let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


function actualizar(){

var who1 = Math.floor(Math.random() * (who.length - 1))

console.log(who[who1])

var what1 = Math.floor(Math.random() * (what.length - 1))

console.log(what[what1])

var when1 = Math.floor(Math.random() * (when.length - 1))

console.log(when[when1])




return document.getElementById("excuse").innerHTML = `${who[who1]} ${what[what1]} ${when[when1]}`


}

window.onload = function(){

    actualizar();
}
