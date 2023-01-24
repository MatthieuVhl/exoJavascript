// console.log("hello world")

// var maVariable = " ma premiere variable";
// var monNombreA = 50;
// var maVerificationA = true ;

// let maSecondeVariable = "ma seconde variable";
// let monNombreB = 60;
// let maVerificationB = true ;

// const maTroisiemeVariable = "Contenu de ma troisieme variable";
// const monNombreC = 70;
// const maVerificationC = true ;

//  maVariable = " ma premiere variable modifiée";
// maSecondeVariable = " ma seconde variable modifiée";
// maTroisiemeVariable = "Contenu de ma troisieme variable"; IMPOSSIBLE ERREUR
// console.log(maVariable);
// console.log(maSecondeVariable);
// console.log(maTroisiemeVariable);

// let nb = 42;

// let boll = true;

// let monTexte = "texte"

// let pasDefini;

// console.log(typeof(nb));

// console.log(" variable nb de type", typeof nb);
//  console.log(" variable bool de type", typeof bool);
//  console.log(" variable monTexte de type", typeof monTexte);
//  console.log(" variable pasDefini de type", typeof pasDefini);

//  alert(typeof nb);

//  let myValue =100;
//  console.log(myValue);
//   myValue++; 
//   console.log(myValue);
//   myValue--; 
//   console.log(myValue);

//   let nbA =10,
//       nbB =25;
//       console.log(nbA != nbB);
//       console.log(nbA == nbB);
//       console.log(nbA >= nbB);
//       console.log(nbA < nbB);


    //   let nbC =22,
    //   nbD ="22";
    //   console.log(typeof nbC );
    //   console.log(typeof nbD );
    //   console.log(nbC == nbD);
    //   console.log(nbC === nbD);

//   let nbE = 15;
//   let nbF = 15;
  
//   let addition = nbE + nbF;
//   let multiplication = nbE * nbF;
  
//  console.log("L'addition de "+nbE+" et"+nbF+"est égale à : "+addition);
//  console.log("la multiplication de "+nbE+" et"+nbF+"est égale à : "+multiplication);
//  alert(`la multiplication de ${nbE} et ${nbF} est égale à : ${multiplication}`);

// let maRecup = prompt( "saisir votre mot :");
// console.log(typeof maRecup);

// exo1
// let Nom = prompt("Saississez votre nom");
// let Prenom =prompt("Saississez votre prénom");
// console.log(`bonjour monsieur ${Nom}  ${Prenom}`);

//  exo2
// let nbA =19;
// let nbB =5;

// let addition = nbA + nbB ;
// console.log(`L'addition de ${nbA} et ${nbB} est égale à : ${addition}`);
// exo2 exemple2
// let nbA = prompt("saisi un premier nombre");
// let nbB = prompt("saisi un deuxieme nombre");

// let addition = parseFloat(nbA) + parseFloat(nbB) ;
// console.log(`L'addition de ${nbA} et ${nbB} est égale à : ${addition}`);
// exo3
// let radius = Number(prompt("saisissez un rayon"));
// let perimetre = radius*2 *Math.PId
// let aire = Math.PI* Math.pow((radius/2),2);
// console.log(`le perimetre de mon rayon ${radius} et de ${perimetre} et l'aire est de ${aire} `);

// EXO4
// let carrer = Number(prompt("saisissez un coté"));
//  let perimetre = carrer*4
//  let aire = carrer * carrer
//  console.log(`le perimetre du carrer et de ${carrer} et de ${perimetre} et l'aire est de ${aire} `);


//  EXO5
// let coteA =Number(prompt("saisissez le coté A"));
// let coteB =Number(prompt("saisissez le coté B"));
// let coteC = Math.sqrt(Math.pow(coteA,2) + Math.pow(coteB,2)).toFixed(2) ;
// console.log(`l'hypoténuse du triangle rectangle et de ${coteA} en A  ${coteB} en B on obtiens donc en C ${coteC} `);

// EXO6

// let produit = Number(prompt("saisir le prix du produit"));
// let tva = Number(prompt("saisir le montant de la tva"));
// let ttc = produit + (produit*tva/100);
// console.log(ttc)
// let prixTva = produit*tva/100;
// console.log(`mon produit a ${produit} euros avec ${tva}% DE TVA coute au final ${ttc} euros le montant de la tva et de ${prixTva} euro(s) `);

// LES STRUCTURES CONDITIONNNELLES

// console.log("Les structures conditionnelles");

// L'instruction if ( Si ... alors) else (Sinon...)

// let compte = 1500;

// if(compte > 0)
// console.log("Votre compte est créditeur") // si ma condition est True

// if(compte < 0)
// console.log("Votre compte est débiteur")


// if(compte > 0 ){
//     console.log("Votre compte est créditeur");
//     console.log(`Vous avez ${compte} euros`);
// }
// else{
//     console.log("Votre compte est débiteur");
// }

// //  Avec Booléan
// let estCrediteur = (compte > 0 )
// if(estCrediteur)
// console.log("Votre compte est créditeur (Aveec un bool)")
// else
// console.log("Votre compte est créditeur (Aveec un bool)")

// avec une récupération de saisie utilisateur

// let age=0;
// age = Number(prompt("Veuillez saisir votre age :"))
//  console.log(typeof (age)) // verifie le type de ma variable age

//  if(age < 13){
//     console.log("Vous etes un enfant")
//  }
//  else if(age >= 18){
//     console.log("Vous etes un adulte")
// }
// else{
//     console.log("Vous etes un ado") 
// } 
 

// LE SWITCH CASE

// const civilite = "Mme";
// switch(civilite){
//     case'Mr.':
//     console.log("Bonjour Monsieur");
//     break;
//     case'Mme.':
//     console.log("Bonjour Madame");
//     break;
//     default:
//     console.log("Bonjour Mademoiselle");
//     break;

// }

// const cond = "Orange";
// switch(cond){
//     case'Oranges':
//     console.log("Les orange sont a 2.99€/kg");
//     break;
//     case'Mangues':
//     case'Papayes':
//     console.log("Les Papayes et les Mangues sont a 9.99€/kg");
//     break;
//     default:
//     console.log(`Désoler, nous sommes à cour de ${cond}`);
//     break;
// }

// LE SWITCH AVEC RANGE DE VALEURS

// age = 3;
// let message="";
// switch(true){
//          case age <= 6:
//          message ='Votre enfant est dans la catégorie "BABY"';
//          break;
//          case age <= 8:
//          message ='Votre enfant est dans la catégorie "Poussin"';
//          break;
//          case age <= 10:
//          message ='Votre enfant est dans la catégorie "Pupille"';
//          break;
//          case age <= 12:
//          message ='Votre enfant est dans la catégorie "Minime"';
//          break;
//          default:
//          message ='Votre enfant est dans la catégorie "Cadet"';
//          break;
    
//      }
//      console.log(message);

//  Les boucles iteratives

// let i;
// for(let i = 0;i <= 10; i++){
//     console.log(`La boucle for s'est executée ${i} fois `);
// }

// let j =11;
// while(j <= 10){
//     console.log(`La boucle while s'est executée ${j} fois `);
//     j++;
// }

// let k = 1

// do{
//     console.log(`La boucle while s'est executée ${k} fois `);
//     k++;
// } while (k <=10)


// let email="consanstact@teamjhess.fr"
// let motDePasse="LunditHautSolAie"

// let mail = prompt("saisie ton email");
// let mDp = prompt("saisie ton mot de passe");
// if (email === mail && motDePasse === mDp)
// {
//     console.log(" Bienvenue")
// } else  {
//     console.log("oups email ou mot de passe incorrect")
// } 


// exo8
// let mot = prompt("saisie un mot");
// let stock = 0;
// let motRevers = mot.split("").reverse().join("")
// if (mot == motRevers){
//     console.log ("palindrome")
// }else{
//     console.log ("ce mot n'est pas un palindrome")  
// }
// while(mot[stock] === mot [mot.length -stock -1 ] ) 




// exo 9

// let indemnite =0;
// let salaire=0;
// let anciennete=0;
// let age=0;

// salaire = Number(prompt("Veuillez saisir le dernier salaire :"));
// anciennete = Number(prompt("Veuillez saisir l'ancienneté :"));
// age = Number(prompt("Veuillez saisir l'age du salarié :"));

// if( anciennete >= 1 && anciennete <= 10){
//     indemnite = (salaire/2)* anciennete;
// }

// if(anciennete > 10){
//     indemnite = salaire * anciennete;
// }

// if (age >= 46 && age <=49){
//     // indemnite = indemnite + salaire*2;
//     indemnite += salaire*2;
// }else if (age >= 50){
//     indemnite += 5*salaire;

// }

// console.log(`Votre indeminité est de ${indemnite}`)


// exo10


// const boisson = prompt("Choississez votre boisson : 1. Eau , 2. Jus d'oranges , 3. Limonade, 4. Café 5. Thé") ;
// switch(true){
//     case boisson =='1':
//         console.log("Voici votre Eau");
//         break;
//     case boisson =='2.':
//         console.log("Voici votre Jus d'oranges");
//         break;
//     case boisson =='3':
//         console.log("Voici votre Limonade");
//         break;
//     case boisson =='4':
//         console.log("Voici votre Café");
//         break;
//     case boisson =='5':
//         console.log("Voici votre Thé");
//         break;
// }

//  exo 11
// declaration variables
// let revenus =0;
// let nbEnfants =0;
// let nbAdultes =0;
// let nbParts = 0;
// let revenuImposable=0;
// let montantImpot =0;

// // recuperation des informations
// revenus = Number(prompt("Veuillez saisir le montant total des revenus du foyer :"));
// nbAdultes = Number(prompt("Veuillez saisir le nombre d'adulte(s) :"));
// nbEnfants = Number(prompt("Veuillez saisir le nombre d'enfant(s) :"));

// // calcul du nombre de parts
// if(nbEnfants<=2){
//  nbParts = nbAdultes + (nbEnfants*0.5);

// }else {
//     nbParts = nbAdultes + nbEnfants -1;
// }

// ternaire
// nbParts = nbEnfants <=2 ? nbAdultes + nbEnfants*0.5  :  nbAdultes + nbEnfants -1;
// condition ? true : false
// revenuImposable = revenus / nbParts;



// switch(true){
//     case revenuImposable > 10777 && revenuImposable < 27479 :
//         montantImpot = Math.round((revenuImposable - 10777)*0.11);
//         break;
//     case montantNet  >=  27479 && montantNet <= 78570 :
//         montantImpot = Math.round((revenuImposable - 27479)*0.30 +(27478-10777)*0.11);
//         break;
//     case montantNet >= 78571 && montantNet<= 168994 :
//         montantImpot = Math.round((revenuImposable - 78571)*0.41 + (78570-27479)*0.30 +(27478-10777)*0.11);
//         break;
//     case montantNet > 168995 :
//         montantImpot = Math.round((revenuImposable - 27477)*0.45 +(168994-78571)*0.41 + (78570-27479)*0.30 +(27478-10777)*0.11) );
//         break;
//     case défaut :
//         console.log("Vous devez rien ");
//         break;
// }

// montantImpot = montantImpot * nbParts;

// // montantImpot *= nbParts
// console.log("Le montant de vos imposts est de"+montantImpot);



// exo12

// let nbHabitants = 96809;
// let Croissance = 0.89;
// let nbHabitants2015 = 120000;
// let annee =0;

// while(nbHabitants < nbHabitants2015){
//     nbHabitants =  nbHabitants + (nbHabitants * (Croissance /100 ))
//     annee ++ 
// }
// console.log(  annee )


// exo13

// déclaration des variables

// let nombre =0;
// let affichage ="Liste s'entiers cahînés";


// // recueration du nombre saisi par l'utilisateur
// nombre = Number(prompt("saisir un nombre entier :"));


// for(let i = 1; i<= nombre/2 +1; i++){
//         let somme = i;
//         let chaine = " "+nombre+" = "+i+" ";
//         for(let j = i+1; j<= nombre/2 +1; j++ ){
//             somme += j;
//             chaine += " + "+j;
//             if(somme == nombre){
//                 affichage += `${chaine}`;
//                 break;
//             } else if (somme > nombre){
//                 break;
//             }
//         }



// }


// console.log(affichage)

// exo14

// let nMax= 0;
// let nMin = 20;
// let moyenne = 0;
// let notes =0;

// notes = Number(prompt("Combiens de notes allez vous saisir ? :"));

// for(let i = 1; i <= notes; i++ ){
//  //recuperation de la saisie pour chaque note
//  let noteTmp = Number(prompt(`merci de saisir la note n° ${i} (sur 20) :`)) ;
 
// //  ajoute la note à la moyenne

// moyenne += noteTmp;

// // verification si noteTmp > a nMax
// if(noteTmp > nMax)
// nMax = noteTmp;

// // verification si noteTmp < a nMin
// if(noteTmp < nMin)
// nMin = noteTmp;

// // calcul de ma moyenne 
// moyenne = Math.round(moyenne/notes);

// console.log("ma note max est :" +nMax);
// console.log("ma note min est :" +nMin);
// console.log("ma moyenne est :" +moyenne);
// }

// Les Tableaux

// declaration d'un tableau 
// let monTableau = [];

// // let monTableau = new Array(); // Esquivalent

// // Affectation de valeur à un tableau
//  monTableau [0]="Pomme"; // Affectation d'une valeur à l'index 0 du tableau
//  monTableau [1] = "Poire";// Affectation d'une valeur à l'index 0 du tableau

// //  affichage dans la console
// console.log(monTableau);
// console.ltable(monTableau);


// //  afficher la valeur à un index donné
// console.log(monTableau[1]);

// // declaration et affectation de valeur en meme temps
// let legumes=["carotte","choux","haricots"];

// // let legumes= new Array("carotte","choux","haricots"); // Equivalent


// // reaffectation de valeur

// console.log(legumes[2]);
// legumes[2] = "epinards";
// console.log(legumes[2]);

// // affichage du nombres d'elements de mon tableau
// let nblegumes = legumes.length;
// console.log("mon tableau contient"+nblegumes+"legumes.");

// // insertion avec recuperation automatique du dernier index
// legumes[legumes.length]="Cerises";
// legumes[legumes.length]="Cerises";
// legumes[legumes.length]="Cerises";
// legumes[legumes.length]="Cerises";
// console.table(legumes);

// // retirer le dernier élement d'un tableau
// legumes.pop();
// legumes.pop();
// legumes.pop();
// console.table(legumes);

// // retirer le premier élement d'un tableau
// legumes.shift();
// console.table(legumes);

// //insertion avec recuperation automatique du dernier index
// legumes[legumes.length]="test";
// legumes[legumes.length]="test";
// legumes[legumes.length]="test";
// legumes[legumes.length]="test";
// console.table(legumes);


// retirer un ou plusieurs elements à un index donné => splice(départ)



//  les tableaux Associztifs (On accède aux éléments par sa clé -> key)



// declaration d'un tableau associatif (Objet literals)

// let personne = {
//     nom :"Dupont",
//     prenom: "Jean",
//     Age:25
// };

// // affichage d'un objet
// console.table(personne);
// console.log(personne);
// console.log(typeof personne);

// // affichage de la valeur à une clé
// console.log(personne.prenom);//afficher le prenom
// console.log(personne["nom"]);// affixher le nom



// let jourSem =["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];

// // Itération du tableau par la boucle for

// for(let i = 0; i< jourSem.length; i++){
//     // console.log(jourSem[i])
//     if( i <= 3){
//         console.log("début de semaine");
//     }else {
//         console.log(jourSem[i]);
//     }
// }



//exercice 
// a partir du tableau suivant :
// let names =["Adam","Etienne","Sebastien","Clement","Virginie"] 

// 1/ Grâce à une boucle for, afficher la liste des prenoms du tableau
// 2/ Grâce à une boucle while, afficher la liste des prenoms du tableau


// let names =["Adam","Etienne","Sebastien","Clement","Virginie"];

// // for(let i =0; i< names.length; i++){
// //     console.log(names[i])
// // }
// let i= 0;
// while(i < names.length  ){
// console.log(names[i])
//     i++
// }

// parfait pour les tableaux associatif
// let contact ={
//     nom :"Richard",
//     prenom: "Pierre",
//     specialiste : "Boucle infinie"

// };

// exemple de boucle for ... in ..
// for(let key in contact){
//     console.log(key); // affiche la clé du tableau
//     console.log(contact[key])//affiche la valeurs
//     console.log(key+ ":"+contact[key])//affiche les pairs de clé + valeurs

// }

// exemple de boucle for ... of ..

//exemple clement
//  for(let j of jourSem){
//     console.log(j)
// }

// for(const value of names){
//          console.log(`La boucle for..of, names contient ${value}`);
// }

// Boucles Imbriquées

// for(let i = 1 ; i < 10; i+=2){
//     console.log("i ="+i);
//     // for(let j = 1; j < 5; j++){
//     //     console.log("Deuxieme boucle j ="+j) 
//     // }
//     // i++;
// }






//  let personne = {
//      nom :"Dupont",
//      prenom: "Jean",
//      Age:25
//  };


//  // affichage d'un objet
//  console.table(personne);
//  console.log(personne);
//  console.log(typeof personne)


//  // affichage de la valeur à une clé
//  console.log(personne.prenom);//afficher le prenom
//  console.log(personne["nom"]);// affixher le nom

//  Operateur rest et spread

// destructuring

// const tabNum = [1,2,3];
// console.log(tabNum);

// // en ES5

// const a = tabNum[0];
// const b = tabNum[1];

// en ES6 avec le destructuring nous pouvons l'ecrire :

// const [c,e, ...d] = tabNum;
// console.log(c); //1
// console.log(e); //2
// console.log(d); //array [2,3]






// let legumes=["carottes","choux","haricots"];
// let fruits=["raisins","bananes","abricots"];


// let aliments = [...legumes,"patates",...fruits,"cerises"];

// console.table(aliments);

//  Meme principe avec les objets

// const personne ={
//     nom : "Richard",
//     prenom: "Pierre",
//     specialite: "Boucle infinie"
// }

// const{specialite, ...person}= personne;
// //  person va assigner le "rest" des key non utilisé
// console.log(specialite);
// console.log(person);


// const{nom, prenom}= personne;

// console.log(nom);
// console.log(prenom);

// const personneAvecage = {...personne, age : 25}

// console.table(personneAvecage);

// exo15

// let etudiants = [ 
//     { 
//         prenom: "José", 
//         nom: "Garcia", 
//         matieres: { 
//             francais: 16, 
//             anglais: 7, 
//             humour: 14 
//         }  
//     }, 
//     { 
//         prenom: "Antoine", 
//         nom: "De Caunes", 
//         matieres: { 
//             francais: 15, 
//             anglais: 6, 
//             humour: 16, 
//             informatique: 4, 
//             sport: 10 
//         } 
//     }
   
// ];  

// let somme= 0;
// let  nbrNote= 0;
// let moyenne= 0;
// // parcourir mon tableau etudiants
// for(let etudiant of etudiants){
// console.log("||||||début||||||||")
// // console.log(etudiant.nom);
// // console.log(etudiant.prenom);
// console.log(`Etudiant : ${etudiant.nom} ${etudiant.prenom}`);
// console.log("||||||fin||||||||");
// //    console.log(etudiant.matieres);

// for(let key in etudiant.matieres){
//     console.log("||||||etudiant début||||||||");
//     // console.log(key);
//     // console.log(etudiant.matieres[key]) ;
//     console.log(`${key} : ${etudiant.matieres[key]} /20 `);
//     // console.log(typeof etudiant.matieres[key]);
//     somme += etudiant.matieres[key];
//     console.log(somme);
//     nbrNote++;
//     console.log(nbrNote);
   
    
// }
// moyenne= somme/nbrNote;
// console.log("la moyen est de "+moyenne);
// console.log(moyenne.toFixed(2))
//  console.log("||||||etudiant fin||||||||");
//  somme = 0;
//  nbrNote = 0;
// };
  





//    mon travail (autre possibilité)
// for(let i =0; i< etudiants.length; i++){
    
//      console.table(etudiants[i].nom)
  
//     }

//  fonctions natives

/* alert("coucou");

 let prenom = prompt("quel est votre prénom?");
 
 */


//  fonctions non-natives(user)

//  fonctions sans parametres et sans retour
// function hello(){
// console.log("hello world")
// }

// // appel de la fonction
// hello();


// //  fonctions avec parametres est sans retour

// function helloParams(firstname = "théo"){
//     console.log(`hello ${firstname}`);
// }

// //Appel de la fonction
// helloParams("matthieu");
// helloParams();

// fonction parametres et avec retour
// function helloReturn(firstname = "jean"){
//     let chaine = `Hello ${firstname}`;
//     // retourne la variable
//     return chaine;
// }


// appel de la fonction
// let message = helloReturn();
// console.log(message);
// console.log(helloReturn());



// autre facon de declarer une fonction

// const testmajority = function(birthYear){
//     let age = (2023 - birthYear);
//     if(age >= 18){
//         console.log("La persionne est majeur !")
//     }else{
//         console.log("La persionne n'est pas majeur !")
//     }
//     return age;
// }
// const firstPersoAge = testmajority(1987)
// console.log(firstPersoAge) //36
// const secondPersoAge = testmajority(2009)
// console.log(secondPersoAge) //14


// arrow function

// sans paprametres

// let test = function(){
//     return "Toto";
// }
// test = () =>{
//     return "Toto";
// }

// test = () =>"Toto";

// console.log(test());

// avec un objet
// let legume ={
//     code:3,
//     name:"poivrons rouge",
//     price: 4.99
// }


// Crée une fonction a qui on passe en parametres un objet et qui nous renvoie sont name :

// exemple1
// let test2 = function(vegetable){
//     return vegetable.name;
// }

// exemple 2
// const fonction = (leg) => leg.name;

// console.log(fonction(legume));

// exemple3
// let legumess = (leg) =>{
//     return leg.name;

// }

// function hello(firstname  , lastname ){
//     let chaine = `Bonjour ${firstname} ${lastname}`;
    
//     return chaine;
    
// }
// console.log(hello("matthieu","verhulst"));

// let tabPerson =["Pierre","Hasard"]

// console.log(hello(tabPerson[0],tabPerson[1]));
// // console.log(hello(...tabPerson));


// let personne ={
//     nom:"Théo",
//     prenom:"Dupont2"
// }
// console.log(hello(personne.nom,personne.prenom));

