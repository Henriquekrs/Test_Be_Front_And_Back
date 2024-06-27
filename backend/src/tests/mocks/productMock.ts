export const getAllProductMock = [
  {
    nome: 'Capa da invisibilidade',
    descricao: 'Descrição do Produto G',
    preco: '150.00',
  },
  {
    nome: 'Capa do Batman',
    descricao: 'Descrição do Produto F',
    preco: '250.00',
  },
  {
    nome: 'Escudo Capitão América',
    descricao: 'Descrição do Produto C',
    preco: '150.00',
  },
  {
    nome: 'Manopla do Infinito',
    descricao: 'Descrição do Produto E',
    preco: '300.00',
  },
];

export const createProductMock = {
  id: 1,
  nome: 'Varinha das varinhas',
  descricao: 'Descrição do Produto C',
  preco: '2000.00',
  get: function () {
    return this;
  },
};

export const deleteProductMock = {
  message: 'Product successful deleted',
};
