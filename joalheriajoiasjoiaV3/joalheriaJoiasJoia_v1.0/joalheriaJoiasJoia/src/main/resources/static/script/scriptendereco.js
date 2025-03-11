document.getElementById("cep").addEventListener("input", async function(){
	const cep = this.value.replace(/\D/g, "");
	
	if(cep.length === 8){
		try{
			const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
			
			if(!response.ok) throw new Error ("Erro ao buscar CEP");
			
			const dados = await response.json();
			
			if (dados.erro){
				alert("CEP não encontrado")
				return;
			}
			document.getElementById("rua").value = dados.logradouro;
			document.getElementById("bairro").value = dados.bairro;
			document.getElementById("cid").value = dados.cid;
			document.getElementById("estado").value = dados.estado;
		} catch (error){
			alert("Erro ao buscar o endereço; " + erro.mensage);
		}
	}
})

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
}