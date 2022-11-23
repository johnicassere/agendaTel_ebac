const form = document.getElementById("form-geral");
const nome = document.getElementById("input-nome");
const fone = document.getElementById("input-tel");
const nomesContato = [];
const fonesContato = [];
let novalinha = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  add();
  atualiza();
});

function add() {
  if (nomesContato.includes(nome.value)) {
    return alert(`O >> ${nome.value} << nome já existe`);
  }
  nomesContato.push(nome.valeu);
  fonesContato.push(fone.valeu);

  let linha = "<tr>";
  linha += `<td>${nome.value}</td>`;
  linha += `<td>${fone.value}</td>`;
  linha += `</tr>`;

  novalinha += linha;
}

function atualiza() {
  const corpo = document.querySelector("tbody");
  corpo.innerHTML = novalinha;

  nome.value = "";
  fone.value = "";
}

function addClick() {
  form.style.display = "grid";
}
