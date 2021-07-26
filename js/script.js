const form = document.getElementById('formulario')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('CPF').value;
    let telefone = document.getElementById('telefone').value;
    let endereco = document.getElementById('endereco').value;
    let pessoa = {
        nome,
        email,
        cpf,
        telefone,
        endereco,
    }
    let convertPessoa = JSON.stringify(pessoa);

    localStorage.setItem('lead', convertPessoa)

    let content = document.getElementById('content')

    let carregando = `<p>CARREGANDO...</p>`

    let pronto = `<p class="cadastrado">CADASTRADO</p>`

    content.innerHTML = carregando


    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

})

const formi = document.getElementById('formulario-dois')


formi.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nomef').value;
    let codigo = document.getElementById('COD').value;
    let descricao = document.getElementById('desc').value;
    let fornecedor = document.getElementById('fornecedor').value;
    let preco = document.getElementById('preco').value;
    let produto = {
        nome,
        codigo,
        descricao,
        fornecedor,
        preco,
    }
    let convertProduto = JSON.stringify(produto);

    localStorage.setItem('lead', convertProduto)

    let content = document.getElementById('content-dois')

    let carregando = `<p>CARREGANDO...</p>`

    let pronto = `<p class="cadastrado">CADASTRADO</p>`

    content.innerHTML = carregando


    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

})