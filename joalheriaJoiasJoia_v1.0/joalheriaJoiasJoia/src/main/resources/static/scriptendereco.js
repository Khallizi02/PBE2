document.addEvenListener("DOMContentLoaded", () =>{

  const form = document.getElementById("cadastroenderecoForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();


  const cep = document.getElementById("cep").value;
  const rua = document.getElementById("rua").value;
  const numCasa = document.getElementById("numCasa").value;
  const cid = document.getElementById("cid").value;
  const estado = document.getElementById("estado").value;
  const comp = document.getElementById("comp").value;
  const bairro = document.getElementById("bairro").value;

  try {

      const response = await fetch ("http://localhost:8080/cadastroEndereco",{
 method: "POST",
 headers: {
     "Content-Type": "application/json"
   },

   body: JSON.stringify({
    cep, 
    rua, 
    numCasa, 
    cid,
    estado,
	comp,
	bairro
    }),
});