interface FormattedClient {
  name: string;
  cpf: string;
  enderecos: Array<{
    rua: string;
    cidade: string;
    estado: string;
    cep: string;
    pais: string;
  }>;
  telefones: Array<{
    numero: string;
  }>;
}

function formatClientResponse(client: FormattedClient): FormattedClient {
  return {
    name: client.name,
    cpf: client.cpf,
    enderecos: client.enderecos
      ? client.enderecos.map((address) => ({
          rua: address.rua,
          cidade: address.cidade,
          estado: address.estado,
          cep: address.cep,
          pais: address.pais,
        }))
      : [],
    telefones: client.telefones
      ? client.telefones.map((phone) => ({
          numero: phone.numero,
        }))
      : [],
  };
}

export default formatClientResponse;
