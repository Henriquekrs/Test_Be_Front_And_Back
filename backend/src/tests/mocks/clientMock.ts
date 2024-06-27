export const getAllClientMock = [
  {
    id: 1,
    name: 'Cliente 1',
    cpf: '12345678901',
  },
  {
    id: 2,
    name: 'Cliente 2',
    cpf: '98765432109',
  },
];

export const getByIdClientMock = {
  id: 1,
  name: 'Cliente 1',
  cpf: '12345678901',
  vendas: [
    {
      id: 1,
      clientId: 1,
      productId: 1,
      quantidade: 2,
      precoUnitario: 100,
      precoTotal: 200,
      dataTime: '2024-06-27T02:58:16.000Z',
    },
  ],
};

export const createClientMock = {
  id: 2,
  name: 'testeTeste',
  cpf: 'testeTeste',
  enderecos: [
    {
      rua: 'testeTeste',
      cidade: 'testeTeste',
      estado: 'testeTeste',
      cep: 'testeTeste',
      pais: 'testeTeste',
    },
  ],
  telefones: [
    {
      numero: 'testeTeste',
    },
    {
      numero: 'testeTeste',
    },
  ],
};

export const deleteClientMock = {
  message: 'Client deleted with success',
};
