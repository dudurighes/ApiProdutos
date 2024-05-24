import { ProdutoRepository } from "../../data/repository/ProdutoRepository";

export class DeletarProdutoUseCase {

    constructor(private produtoRepository: ProdutoRepository) { }

    async execute(codigo: string) {

    }

}