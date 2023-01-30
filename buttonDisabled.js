// ** addEventListener - "keyup" - disabled - true - false - value - length
// TODO 1: récupérer le textarea dans une variable txt
// TODO 2: récupérer le button dans une variable btn
// TODO 3-1: Sur txt placer un addEventListener qui écoute les touches clavier et éxecute une fonction
// TODO 3-2: Dans cette fonction, si ce qu'on tape dans l'input dépasse 5 caractères alors on désactive le button

const txt = document.getElementById('area');

console.log(txt);

const btn = document.querySelector('button');

console.log(btn);

txt.addEventListener("keyup", function(event) {
    if (txt.value.length > 5) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
});
















