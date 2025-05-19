export interface ItableInterface {
        id: string;
        nome: string;
        cargo: string;
        salarioBruto: number;
}

export interface IdadosServidores {
        idServidor: string,
        nome: string,
        cargo: string,
        lotacao: string,
        remuneracao: number,
        vantagemPessoal: number,
        subsidio: number,
        indenizacao: number,
        vantagemEventual: number,
        gratificacao: number,
        totalRendimento: number,
        previdencia: number,
        impostoRenda: number,
        descontoDiverso: number,
        retencaoTeto: number,
        totalDesconto: number,
        rendimentoLiquido: number,
        remuneracaoOrigem: number,
        diaria: number
}

export interface IretornoHttpRequest {
        resultado: number,
        mensagem: string | null,
        retorno: IdadosServidores[]
}

export interface Isearch {
        id: number, 
        text: string
}

