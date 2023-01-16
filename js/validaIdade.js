function maiorDeIdade(campo){

    const dataNascimento = new Date(campo.value)
    validaIdade(dataNascimento)
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 =  new Date(data.getUTCFullYear() + data.getUTCMonth(), data.getUTCDate())
    console.log(dataMais18+"teste")
    return dataAtual >= dataMais18;
}

export default maiorDeIdade;