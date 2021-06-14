var dados=[]
function PopulaTabela() {
    if(Array.isArray(dados)) {

      localStorage.setItem("__dados__"), JSON.stringify(dados))
      $("tblDados tbody").html("") //texto vazio para tbody
      dados.forEach(function (item) {
        //TEMPLATE STRING
          $("#tblDados tbody").append(`<tr>
          <td>${item.ID} </td>
          <td>${item.nome} </td>
          <td>${item.telefone}</td>
          <td>${item.garagem} </td>
          </tr>`) //add um trecho html a cada ex
      })
    }


}
$(function () {
//EXECUTA AO CARREGAR DA TELA (cookie)
  dados = JSON.parse(localStorage.getItem("__dados__"))
  if (dados) {
    PopulaTabela() //cria tabela pra cada objeto do array
  }

  $("#btnSalvar").click(function() {
    //EVENTO CLICK DO BOTAO SALVAR
    var Nome = $("#txtNome").val()
    var Telefone = $("#txtTelefone").val()
    var Garagem = $("#txtGaragem").val()

    var registro = {}

    registro.Nome =   Nome
    registro.Telefone = Telefone
    registro.Garagem= Garagem

    registro.ID = dados.length + 1

    dados.push(registro)

    alert("Registro Concluído")
    $("#modalRegisto").modal("hide")

    $("#txtNome").val("")
    $("#txtTelefone").val("")
    $("#txtGaragem").val("")


    PopulaTabela()


  })
})
