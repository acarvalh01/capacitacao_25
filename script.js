const modeloItem{
    nome: '',
    comprado: false
}

let ListaCompras [];
const input = document.getElemetById('itemInput');
const btn = document.getElemetById('addBtn');
const ul = document.getElemetById('lista');
const container = document.querySelector('.container');
function adicionarItem( ) {
    const nome = input.value.trim();
    if (nome){
        listaCompras.push({nome, comprado: false});
        input.value = '';
        console.log(listaCompras);
        renderizarLista();
    }
    else{
        alert('Por favor, insira um item válido');
    }
} btn.addEventListener('click', adicionarItem);
function renderizarLista( ){
    ul.innerHTML = '';
    for (let i = 0; index < listaCompras.legth; i++) {
        const item = listaCompras[i];
        const li = documente.createElement('li');
        li.className = 'item' + (item.comprado? 'comprado': '');

        const span = document.createElement('span');
        span.textContent = item.nome;
        const btnOk = document.createElement('button');
        btnOk.addEventListener=('click'. ()=> marcarComoComprado(i));

        li.appendChild(span);
        li.appendChild(btnOk);
        ul.appendChild(li); 
        
        
    }
}

