const conteiner = document.createElement('div'); // Essa é a div main
conteiner.className = 'conteiner';

const paragrafo = document.createElement('p');
paragrafo.className = 'paragrafo';
paragrafo.innerHTML = 'Tropical Drinks';
conteiner.appendChild(paragrafo);

const contForm = document.createElement('div');
contForm.className = 'contForm';
conteiner.appendChild(contForm);

const form = document.createElement('form');
form.className = 'form';
contForm.appendChild(form);

const flabel = document.createElement('label');
flabel.innerHTML = 'First name';
contForm.appendChild(flabel);

const finput = document.createElement('input');
finput.className = 'finput';
finput.placeholder ='Type your First name'
finput.type = 'text';
finput.maxLength="5"; // Essa função é utlizada para limitar os caracteres
contForm.appendChild(finput);

const folabel = document.createElement('label'); /*Não entendi como conseguir pular uma linha*/
folabel.innerHTML = 'Last name';
contForm.appendChild(folabel);

const foinput = document.createElement('input');
foinput.className = 'foinput';
foinput.placeholder = 'Type your Last name'
foinput.type = 'text';
foinput.maxLength="5"; 
contForm.appendChild(foinput);


const fbutton = document.createElement('button');
fbutton.className = 'fbutton';
contForm.appendChild(fbutton);

const ancora = document.createElement('a');
ancora.innerHTML = 'Entrar';
ancora.href = "menu.html";
fbutton.appendChild(ancora);

// AINDA NÃO ESTOU CONSEGUINDO DA UM PULA LINHA NA LABEL 'LAST NAME'
// R: Pra pular linha, foi utlizado CSS.



document.body.appendChild(conteiner);



