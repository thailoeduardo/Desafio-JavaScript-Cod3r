const carrinho = [
  { nome: "caneta", qtde: 3, preco: 3.5 },
  { nome: "Impessora", qtde: 0, preco: 100 },
  { nome: "Caderno", qtde: 5, preco: 10.0 },
  { nome: "Borracha", qtde: 3, preco: 1.5 },
];

// Filter
Array.prototype.filter = function (fn) {
  const valores_filtrados = [];

  for (let elemento of this) {
    if (fn(elemento)) {
      valores_filtrados.push(elemento);
    }
  }

  return valores_filtrados;
};

// Map
Array.prototype.map = function (fn) {
  const valores_mapeados = [];

  for (let elemento of this) {
    valores_mapeados.push(fn(elemento));
  }

  return valores_mapeados;
};

// Reduce
Array.prototype.reduce = function (fn, valor_inicial) {
  let ultimo_valor = valor_inicial;

  for (let elemento of this) {
    if (ultimo_valor === undefined) {
      ultimo_valor = elemento;
      continue;
    }
    console.log(ultimo_valor, elemento);
    ultimo_valor = fn(ultimo_valor, elemento);
  }
  return ultimo_valor;
};

const quantidade_maior_que_zero = (item) => item.qtde > 0;
const quantidade_total_de_itens = (item) => item.qtde * item.preco;
const somar = (a, b) => a + b;

const resultado = carrinho
  .filter(quantidade_maior_que_zero)
  .map(quantidade_total_de_itens)
  .reduce(somar);

console.log(resultado);
