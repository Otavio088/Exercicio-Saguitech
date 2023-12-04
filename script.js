function gerarNF() {

    //recebe dados
    let remetente = {
        nome: document.getElementById('nomeRemetente').value,
        cnpj: document.getElementById('cnpjRemetente').value,
        ie: document.getElementById('ieRemetente').value,
        endereco: document.getElementById('endRemetente').value
    };

    let destinatario = {
        nome: document.getElementById('nomeDestinatario').value,
        cnpj: document.getElementById('cnpjDestinatario').value,
        ie: document.getElementById('ieDestinatario').value,
        endereco: document.getElementById('endDestinatario').value
    };

    let produto = {
        descricao: document.getElementById('descProduto').value,
        quantidade: parseInt(document.getElementById('qtdProduto').value),
        valorUnitario: parseFloat(document.getElementById('precoProduto').value)
    };

    let camposValidos = validarCampos();

    if (camposValidos) {

    //calcula imposto (Ex.: 8% do valor total)
    let valorTotal = produto.quantidade * produto.valorUnitario;
    let impostosTotais = 0.08 * valorTotal;

    //vai exibir os dados
    document.getElementById('dados').innerHTML = `(Nome da prefeitura)<br>Secretaria da fazenda e gestão orçamentária<br>Nota Fiscal Eletrônica de Serviços NF-e`;
    document.getElementById('detalhes').innerHTML = `(Número da Nota)<br>(Data e Hora de Emissão)<br>(Código de Verificação)`;
    document.getElementById('remetente').innerHTML = `<strong>Remetente</strong><br>Nome: ${remetente.nome}<br>CNPJ: ${remetente.cnpj}<br>Inscrição Estadual: ${remetente.ie}<br>Endereço: ${remetente.endereco}`;
    document.getElementById('destinatario').innerHTML = `<strong>Destinatário</strong><br>Nome: ${destinatario.nome}<br>CNPJ: ${destinatario.cnpj}<br>Inscrição Estadual: ${destinatario.ie}<br>Endereço: ${destinatario.endereco}`;
    document.getElementById('produto').innerHTML = `<strong>Produto</strong><br>Descrição: ${produto.descricao}<br>Quantidade: ${produto.quantidade}<br>Valor Unitário: R$ ${produto.valorUnitario.toFixed(2)}`;
    document.getElementById('impostosTotais').innerHTML = `<strong>Impostos Totais (8%)</strong> R$ ${impostosTotais.toFixed(2)}`;
    document.getElementById('valorTotal').innerHTML = `<strong>Valor Total</strong> R$ ${(valorTotal + impostosTotais).toFixed(2)}`;
  
    //mostra graças ao display block
    document.getElementById('printNF').style.display = 'block';
    
    document.getElementById('printNF').classList.add('show');
    } else {
        alert("Por favor, preencha todos os campos para gerar a nota fiscal!");
    }
}

function validarCampos() {
    //verifica se foi preenchido
    var campos = document.getElementById("formNF").elements;
    for (var i = 0; i < campos.length; i++) {
        if (campos[i].hasAttribute("required") && campos[i].value === "") {
            return false;
        }
    }
    return true;
}