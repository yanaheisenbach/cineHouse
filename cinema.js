let cinema = "CineHouse"

let catalogo = require("./database/catalogo.json")

// Definindo função de adicionar filme 
function adicionarFilme (codigoFilme, tituloFilme, duracaoFilme, atoresFilme, anoDeLancamentoFilme, emCartazFilme){
  let novoFilme= {
    codigo: codigoFilme,
    titulo: tituloFilme,
    duracao: duracaoFilme,
    atores: atoresFilme,
    anaDeLançamento: anoDeLancamentoFilme,
    emCartaz: emCartazFilme

  }
   return catalogo.push(newFilme)
}

// Função deve buscar o filme pelo filme.código, vamos usar o método find()
function buscarFilme (codigoFilme){
  const filmeProcurado = catalogo.find( filme => filme.codigo === codigoFilme ) 
  return filmeProcurado
//console.log (`Encontramos o seu filme, ${codigoFilme}, ${filmeProcurado.titulo}`)//
}

/* A função deve receber como parâmetro o número identificador do filme
escolhido, buscar o filme com base no parâmetro recebido e alterar o status
existente da propriedade emCartaz (se estava como true, alterar para false, e
vice e versa).*/
/*function alterarStatusEmCartaz (codigoFilme){ 
  const filmeProcurado = catalogo.find( filme => filme.codigo === codigoFilme ) 
   filmeProcurado.emCartaz = !filmeProcurado.emCartaz
}*/
// Usando Callback para buscarFilme

function alterarStatusEmCartazCallback (codigoFilme, buscarFilme){ 
  //const filmeProcurado = catalogo.find( filme => filme.codigo === codigoFilme )//
       filmeProcurado = buscarFilme(codigoFilme)
       filmeProcurado.emCartaz = !filmeProcurado.emCartaz
       console.log(catalogo)
}
alterarStatusEmCartazCallback (1, buscarFilme)

// Function alterarStatusDoFilme com IF ternário 

function alterarStatusEmCartazIfTernario (codigoFilme){ 
  const filmeProcurado = catalogo.find( filme => filme.codigo === codigoFilme )
  let alterarStatus =   filmeProcurado.emCartaz == true?  filmeProcurado.emCartaz = !filmeProcurado.emCartaz :  filmeProcurado.emCartaz = !filmeProcurado.emCartaz
}
// A função deve percorrer toda a lista de filmes armazenada no catálogo utilizando o loop for e 
// retornar as informações de maneira amigável ao usuário.
function listarTodosOsFilmes(){ 
 /* for (let i=1; i< catalogo.length; i++){
    console.table(catalogo)
  }*/

  catalogo.forEach(filme => console.log(filme))
 
}

/* A função deve percorrer toda a lista de filmes armazenada no catálogo
utilizando o loop for e retornar os filmes disponíveis em cartaz - as informações
de maneira amigável ao usuário.*/

function listarFilmesEmCartaz (){
  var listaDeFilmesEmCartaz = catalogo.filter( filme => filme.emCartaz == true)

    /*for (let i=0; i<catalogo.length; i++){

      if (catalogo[i].emCartaz){ 
        listaDeFilmesEmCartaz.push(catalogo[i])

      }
         
  } */

     console.table(listaDeFilmesEmCartaz) 

}

function listarFilmesDeLongaDuracao(){
  var listaDeFilmesLongaDuracao = catalogo.filter(filme => filme.duracao >= 2)
   console.table(listaDeFilmesLongaDuracao)
}


//listarFilmesDeLongaDuracao();

//listarTodosOsFilmes();

//alterarStatusEmCartazCallback (1, buscarFilme)

