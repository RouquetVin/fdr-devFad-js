// ** requestAnimationFrame() - function - offSet / client Height width - left - top
// TODO 1: récupérer le titre h1 dans une variable elTitro
// TODO 2: récupérer la div dans une variable leCadre
// TODO 3: Stocker la propriété clientHeight de leCadre dans une variable hauteurCadre
// TODO 4: Stocker la propriété clientWidth de leCadre dans une variable largeurCadre
// TODO 5: modifier dans le style de elTitro la position en "relative"
// TODO 6: créer une variable positionTop et une variable positionLeft à 0
// TODO 7: créer une variable vitesseVerticale et une variable vitesseHorizontale à -2
// TODO 8: créer une fonction monAnim()
// TODO 8-2: Dans monAnim(), SI positionTop égal 0 alors on multiplie vitesseVerticale par elle même -1
// TODO 8-3: SINON SI positionTop égal hauteurCadre moins le offSetHeight de elTitro alors on multiplie vitesseVerticale par elle même -1
// TODO 8-4: SI positionLeft égal 0 alors on multiplie vitesseHorizontale par elle même -1
// TODO 8-5: SINON SI positionLeft égal largeurCadre moins le offSetWidth de elTitro alors on multiplie vitesseHorizontale par elle même -1
// TODO 9: Ensuite dans positionTop on cumule la vitesseVerticale
// TODO 10: Dans positionLeft on cumule la vitesseHorizontale
// TODO 11: Dans le style de elTitro on assigne à top, la positionTop en "px"
// TODO 12: Dans le style de elTitro on assigne à left, la positionLeft en "px"
// TODO 13: on appelle la fonction requestAnimationFrame() en lui passant en param monAnim
// TODO 14: en dehors de la fonction monAnim(), on appelle la fonction requestAnimationFrame() en lui passant en param monAnim pour créer une boucle infinie

const elTitro = document.querySelector('h1');
const leCadre = document.querySelector('div');
const hauteurCadre = leCadre.clientHeight;
const largeurCadre = leCadre.clientWidth;
elTitro.style.position = 'relative';
let positionTop = 0;
let positionLeft = 0;
let vitesseVerticale = -2;
let vitesseHorizontale = -2;

function monAnim() {
    if (positionTop <= 0) {
        vitesseVerticale = -vitesseVerticale;
    } else if (positionTop >= hauteurCadre - elTitro.offsetHeight) {
        vitesseVerticale = -vitesseVerticale;
    }
    if (positionLeft <= 0) {
        vitesseHorizontale = -vitesseHorizontale;
    } else if (positionLeft >= largeurCadre - elTitro.offsetWidth) {
        vitesseHorizontale = -vitesseHorizontale;
    }
    positionTop += vitesseVerticale;
    positionLeft += vitesseHorizontale;
    elTitro.style.top = positionTop + "px";
    elTitro.style.left = positionLeft + "px";
    requestAnimationFrame(monAnim);
}

requestAnimationFrame(monAnim);



