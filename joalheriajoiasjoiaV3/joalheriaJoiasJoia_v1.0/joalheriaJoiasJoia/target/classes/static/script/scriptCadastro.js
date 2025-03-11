document.addEvenListener("DOMContentLoaded", () =>{

  const form = document.getElementById("cadastroClienteForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();


  const nomeCliente = document.getElementById("nomeCliente").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const dataNascimento = document.getElementById("dataNascimento").value;

  try {

      const response = await fetch ("http://localhost:8080/cadrastoCliente",{
 method: "POST",
 headers: {
     "Content-Type": "application/json"
   },

   body: JSON.stringify({
    nomeCliente, 
    cpf, 
    email, 
    telefone,
    dataNascimento
    }),
});

if (response.ok){
 alert("Cliente cadastrado!");
} else{
 alert("Erro ao cadastrar!");
 window.location.href = "cadastroendereco.html"
}

} catch (error) {
  console.error("Erro ao cadastrar o cliente", error);
}

  });
});