# Sistema de Gerenciamento de Produtos e Clientes

Este é um sistema de gerenciamento de produtos e clientes desenvolvido em JavaScript. Ele permite criar, visualizar, atualizar e excluir produtos e clientes, além de realizar ações como adicionar saldo ao cliente e realizar compras.

## Funcionalidades

O sistema possui as seguintes funcionalidades:

### Produtos

- Criar um novo produto, fornecendo o nome, valor e estoque.
- Visualizar todos os produtos cadastrados.
- Atualizar as informações de um produto existente, como valor e estoque.
- Excluir um produto existente.
- Verificar a disponibilidade de um produto no estoque.

### Clientes

- Criar um novo cliente, fornecendo o nome, saldo e lista de produtos.
- Visualizar todos os clientes cadastrados.
- Atualizar o saldo de um cliente existente.
- Adicionar saldo ao saldo atual de um cliente.
- Excluir um cliente existente.
- Comprar um produto, atualizando o saldo do cliente e o estoque do produto.

## Uso

O código fornece duas principais funcionalidades, que estão divididas em módulos separados: `produtosModule` e `clientesModule`. Cada módulo contém funções específicas relacionadas a produtos e clientes, respectivamente.

### Produtos

Para utilizar as funcionalidades relacionadas a produtos, utilize o objeto `produtosModule`. Exemplo de uso:

```javascript
// Criar um novo produto
produtosModule.criaProduto('Teclado', 250, 10);

// Visualizar todos os produtos cadastrados
produtosModule.verProdutos();

// Atualizar as informações de um produto existente
produtosModule.atualizaProduto('Teclado', 300, 5);

// Excluir um produto existente
produtosModule.excluiProduto('Teclado');
```

### Clientes

Para utilizar as funcionalidades relacionadas a clientes, utilize o objeto `clientesModule`. Exemplo de uso:

```javascript
// Criar um novo cliente
clientesModule.criaCliente('Kelwin', 1500, []);

// Visualizar todos os clientes cadastrados
clientesModule.verClientes();

// Atualizar o saldo de um cliente existente
clientesModule.atualizaCliente('Kelwin', 2000);

// Adicionar saldo ao saldo atual de um cliente
clientesModule.adicionarSaldoAoCliente('Kelwin', 500);

// Excluir um cliente existente
clientesModule.excluiCliente('Kelwin');
```

Lembre-se de ajustar os parâmetros de acordo com as informações desejadas para criar ou atualizar produtos e clientes.