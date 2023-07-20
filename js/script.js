//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

//Validação de Login

function login() {
    var logado = 0;
    var usuario = document.getElementById('usuario').value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();

    if (usuario == 'chris' && senha == '123456') {
        window.location = 'index.html';
        logado = 1;
    }

    if (logado == 0) {
        alert('Acesso Negado! Dados Incorretos');
    }
}

//Ativar alert no botão cadastrar

function cadastro() {
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'index.html';
}

//Efeito Mostrar Mais
const VerMais = document.querySelector('.ver-mais');
const Produtos = document.querySelector('.produtos');

VerMais.addEventListener('click', (e)=>{
    Produtos.classList.toggle('ver');
    if (VerMais.innerText === 'MOSTRAR MAIS') {
        VerMais.innerText = 'MOSTRAR MENOS';
    } else {
        VerMais.innerText = 'MOSTRAR MAIS';
    }
})