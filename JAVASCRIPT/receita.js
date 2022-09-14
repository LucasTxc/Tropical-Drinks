const hconteiner = document.createElement('div');
hconteiner.className = 'hconteiner';



// const pixel1 = document.createElement('img');
// pixel1.classNome ="pixel1";
// imgen1.appendChild(pixel1);





/*-----------------------------------------------------------*/
const divOne = document.createElement('div'); // divOne
divOne.className = 'divOne';
hconteiner.appendChild(divOne);

const r1 = document.createElement('h4');
r1.className = 'r1';
r1.innerHTML='Maracuja';
divOne.appendChild(r1);

const imgen1 = document.createElement('div');
imgen1.className = 'imgen1';
divOne.appendChild(imgen1);

const drOne = document.createElement('ul');
drOne.className ='drOne';
divOne.appendChild(drOne);

const maracuja1 = document.createElement('li'); 
maracuja1.innerHTML ='2 oz Cachaça';
drOne.appendChild(maracuja1);

const maracuja2 = document.createElement('li');
maracuja2.innerHTML ='1/2 Maracuja';
drOne.appendChild(maracuja2);

const maracuja3 = document.createElement('li');
maracuja3.innerHTML ='2 colheres de bar de Açúcar';
drOne.appendChild(maracuja3);

// const hr1 = document.createElement('hr');
// divOne.appendChild(hr1);
/*-----------------------------------------------------------*/
const divTwo = document.createElement('div'); // divTwo
divTwo.className = 'divTwo';
hconteiner.appendChild(divTwo);

const r2 = document.createElement('h4');
r2.className = 'r2';
r2.innerHTML='Laranja';
divTwo.appendChild(r2);

const imgen2 = document.createElement('div');
imgen2.className = 'imgen2';
divTwo.appendChild(imgen2);

const drTwo = document.createElement('ul');
drTwo.className ='drTwo';
divTwo.appendChild(drTwo);

const orange1 = document.createElement('li');
orange1.innerHTML = 'Limão';
divTwo.appendChild(orange1);

const orange2 = document.createElement('li');
orange2.innerHTML = 'Uva';
divTwo.appendChild(orange2);

const orange3 = document.createElement('li');
orange3.innerHTML = 'Pera';
divTwo.appendChild(orange3);

// const hr2 = document.createElement('hr');
// divTwo.appendChild(hr2);
/*-----------------------------------------------------------*/
const divThree = document.createElement('div'); // divThree
divThree.className = 'divThree';
hconteiner.appendChild(divThree);

const r3 = document.createElement('h4');
r3.className = 'r3';
r3.innerHTML='Morango';
divThree.appendChild(r3);

const imgen3 = document.createElement('div');
imgen3.className = 'imgen3';
divThree.appendChild(imgen3);

const drThree = document.createElement('ul');
drThree.className ='drThree';
divThree.appendChild(drThree);

const morango1 = document.createElement('li');
morango1.innerHTML = 'Banana';
divThree.appendChild(morango1); 

const morango2 = document.createElement('li');
morango2.innerHTML = 'Abacate';
divThree.appendChild(morango2); 

const morango3 = document.createElement('li');
morango3.innerHTML = 'Abacaxi';
divThree.appendChild(morango3); 

// const hr3 = document.createElement('hr');
// divThree.appendChild(hr3);





document.body.appendChild(hconteiner);