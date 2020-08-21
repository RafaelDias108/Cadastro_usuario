const msgErro = $('#msgErro')
const alerta = $('#alerta')
const inputNome = $('#inputNome')
const inputEmail = $('#inputEmail')
const cpf = $('#cpf')
const telefone = $('#telefone')
const cep = $('#cep')
const rua = $('#rua')
const inputNumber = $('#inputNumber')
const complemento = $('#inputAddress2')
const bairro = $('#bairro')
const cidade = $('#cidade')
const uf = $('#uf')
const btn_salvar = $('#btn_salvar')



$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#telefone').mask('(00) 00000-0000', { placeholder: "(__) _____-____" });
})

// alerta amarelo
alerta.hide();

// validação do nome se estiver em branco
inputNome.blur(function() {
    if ($(this).val() === '') {
        inputNome.addClass('is-invalid')
    } else {
        inputNome.removeClass('is-invalid')
    }
})
inputEmail.blur(function() {
    if ($(this).val() === '') {
        inputEmail.addClass('is-invalid')
    } else {
        inputEmail.removeClass('is-invalid')
    }
})
cpf.blur(function() {
    if ($(this).val() === '') {
        cpf.addClass('is-invalid')
    } else {
        cpf.removeClass('is-invalid')
    }
})
telefone.blur(function() {
    if ($(this).val() === '') {
        telefone.addClass('is-invalid')
    } else {
        telefone.removeClass('is-invalid')
    }
})
cep.blur(function() {
    if ($(this).val() === '') {
        cep.addClass('is-invalid')
    } else {
        cep.removeClass('is-invalid')
    }
})
rua.blur(function() {
    if ($(this).val() === '') {
        rua.addClass('is-invalid')
    } else {
        rua.removeClass('is-invalid')
    }
})
inputNumber.blur(function() {
    if ($(this).val() === '') {
        inputNumber.addClass('is-invalid')
    } else {
        inputNumber.removeClass('is-invalid')
    }
})
bairro.blur(function() {
    if ($(this).val() === '') {
        bairro.addClass('is-invalid')
    } else {
        bairro.removeClass('is-invalid')
    }
})
cidade.blur(function() {
    if ($(this).val() === '') {
        cidade.addClass('is-invalid')
    } else {
        cidade.removeClass('is-invalid')
    }
})

$('#btn_salvar').click(function(e) {

    e.preventDefault();

    const inputNome = $('#inputNome')
    const inputEmail = $('#inputEmail')
    const cpf = $('#cpf')
    const telefone = $('#telefone')
    const cep = $('#cep')
    const rua = $('#rua')
    const inputNumber = $('#inputNumber')
    const complemento = $('#inputAddress2')
    const bairro = $('#bairro')
    const cidade = $('#cidade')
    const uf = $('#uf')


    const validarNome = $('#inputNome').val();
    if (validarNome === "" || validarNome === null || validarNome.length < 3) {

        inputNome.addClass('is-invalid');
        alerta.show();
        inputNome.focus();
        return false
    }

    const validarEmail = $('#inputEmail').val()
    const er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-])[a-zA-Z0-9]{2}/;

    if (validarEmail === "" || !er.exec(validarEmail)) {

        inputEmail.addClass('is-invalid');
        alerta.show();
        inputEmail.focus();
        return true

    }

    const validarCpf = $('#cpf').val();
    if (validarCpf === "" || validarCpf === null || validarCpf.length < 14) {

        cpf.addClass('is-invalid');
        alerta.show();
        cpf.focus();
        return true
    }
    const validarTel = $('#telefone').val();
    if (validarTel === "" || validarTel === null || validarTel.length < 11) {

        telefone.addClass('is-invalid');
        alerta.show();
        telefone.focus();
        return true
    }
    const validarCep = $('#cep').val();
    if (validarCep === "" || validarCep === null || validarCep.length < 8) {

        cep.addClass('is-invalid');
        alerta.show();
        cep.focus();
        return true
    }
    const validarRua = $('#rua').val();
    if (validarRua === "" || validarRua === null) {

        rua.addClass('is-invalid');
        alerta.show();
        rua.focus();
        return true
    }
    const validarNum = $('#inputNumber').val();
    if (validarNum === "" || validarNum === null || validarNum < 0) {

        inputNumber.addClass('is-invalid');
        alerta.show();
        inputNumber.focus();
        return true
    }
    const validarBairro = $('#bairro').val();
    if (validarBairro === "" || validarBairro === null) {

        bairro.addClass('is-invalid');
        alerta.show();
        bairro.focus();
        return true
    }
    const validarCidade = $('#cidade').val();
    if (validarCidade === "" || validarCidade === null) {

        cidade.addClass('is-invalid');
        alerta.show();
        cidade.focus();
        return true
    }


    $('#form_contato').hide()
    $('#exibirCadastro').show()


    $('#exibirCadastro').ready(function() {

        swal({
            title: "Cadastro Realizado !",
            text: "Cliente cadastrado com sucesso.",
            icon: "success",
            button: false,
        });
        $('.dadosPessoais').append(`
        <label>Dados Pessoais</label>
        <p>${inputNome.val()}, CPF: ${cpf.val()}</p>
        <p>${inputEmail.val()}, ${telefone.val()}</p>
        `)
        $('.endereco').append(`
        <label>Endereço</label>
        <p>${rua.val()}, ${inputNumber.val()}, ${complemento.val()}</p>
        <p>${bairro.val()} - ${cep.val()}</p>
        <p>${cidade.val()} - ${uf.val()}</p>
        `)
    })

})

$('#btn_voltar').click(function() {
    location.reload();
})