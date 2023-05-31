// Módulo de Produtos
const produtosModule = (function () {
    const produtos = [];

    function criaProduto(nome, valor, estoque) {
        // Validação de entrada
        if (!nome || typeof nome !== 'string') {
            console.log('O nome do produto é inválido.');
            return;
        }

        if (typeof valor !== 'number' || valor <= 0) {
            console.log('O valor do produto é inválido.');
            return;
        }

        if (typeof estoque !== 'number' || estoque < 0) {
            console.log('O estoque do produto é inválido.');
            return;
        }

        const objProduto = { nome: nome, valor: valor, estoque: estoque };
        produtos.push(objProduto);
    }

    function verProdutos() {
        console.log(produtos);
        return produtos;
    }

    function atualizaProduto(nome, novoValor, novoEstoque) {
        const index = produtos.findIndex(item => item.nome == nome);

        if (index === -1) {
            console.log(`Produto ${nome} não encontrado.`);
            return;
        }

        if (novoValor) {
            produtos[index].valor = novoValor;
        }

        if (novoEstoque) {
            produtos[index].estoque = novoEstoque;
        }
    }

    function excluiProduto(nome) {
        const indexProduto = produtos.findIndex(item => item.nome == nome);
        produtos.splice(indexProduto, 1);
    }

    function buscarProdutoPorNome(nomeProduto) {
        const produtoEncontrado = produtos.find(produto => produto.nome == nomeProduto);

        if (produtoEncontrado) {
            console.log('Produto encontrado')
            console.log(produtoEncontrado);
        } else {
            console.log('Produto não encontrado');
        }
    }

    return {
        criaProduto,
        verProdutos,
        atualizaProduto,
        excluiProduto,
        buscarProdutoPorNome
    };
})();

// Módulo de Clientes
const clientesModule = (function () {
    const clientes = [];

    function criaCliente(nome, saldo, produtos) {
        // Validação de entrada
        if (!nome || typeof nome !== 'string') {
            console.log('O nome do cliente é inválido.');
            return;
        }

        if (typeof saldo !== 'number' || saldo < 0) {
            console.log('O saldo do cliente é inválido.');
            return;
        }

        if (!Array.isArray(produtos)) {
            console.log('A lista de produtos do cliente é inválida.');
            return;
        }

        const objCliente = { nome: nome, saldo: saldo, produtos: produtos };
        clientes.push(objCliente);
    }

    function verClientes() {
        console.log(clientes);
        return clientes;
    }

    function atualizaCliente(nomeCliente, novoSaldo) {
        const cliente = clientes.find(cliente => cliente.nome == nomeCliente);

        if (cliente) {
            cliente.saldo = novoSaldo;
            console.log(`Saldo atualizado com sucesso. Novo saldo do cliente ${nomeCliente}: ${cliente.saldo}`);
        } else {
            console.log(`Cliente ${nomeCliente} não encontrado.`);
        }
    }

    function adicionarSaldoAoCliente(nomeCliente, valor) {
        const cliente = clientes.find(cliente => cliente.nome == nomeCliente);

        if (cliente) {
            cliente.saldo += valor;
            console.log(`Saldo adicionado com sucesso. Novo saldo do cliente ${nomeCliente}: ${cliente.saldo}`);
        } else {
            console.log(`Cliente ${nomeCliente} não encontrado.`);
        }
    }

    function excluiCliente(nome) {
        const indexCliente = clientes.findIndex(item => item.nome == nome);
        clientes.splice(indexCliente, 1);
    }

    function buscarClientePorNome(nomeCliente) {
        const clienteEncontrado = clientes.find(cliente => cliente.nome == nomeCliente);

        if (clienteEncontrado) {
            console.log('Cliente encontrado')
            console.log(clienteEncontrado);
        } else {
            console.log('Cliente não encontrado');
        }
    }

    return {
        criaCliente,
        verClientes,
        atualizaCliente,
        adicionarSaldoAoCliente,
        excluiCliente,
        buscarClientePorNome
    };
})();

// Exemplo de uso:
produtosModule.criaProduto('Monitor', 800, 5);
produtosModule.verProdutos();
clientesModule.criaCliente('João', 1000, []);
clientesModule.verClientes();
