import { Produto } from "@prisma/client";
import { ProdutoCriacaoDto, ProdutoUpdateDto } from "../entity/Produto";
import prisma from "../../../../config/database";



export interface ProdutoRepositoryInterface {
    //nome(parametro:tipoParametro):retorno
    salvarProduto(produto: ProdutoCriacaoDto): Promise<Produto>
}
export class ProdutoRepository implements ProdutoRepositoryInterface {

    async salvarProduto(produto: ProdutoCriacaoDto): Promise<Produto> {
        //Ao salvar um novo produto adicione um valor de 5 reais


    }

    async buscarProdutoPorCodigo(codigo: number): Promise<Produto | null> {

    }

    async buscarProdutoPorMarca(marca: string): Promise<Produto | null> {

    }

    async alterarProduto(codigo: number, produto: ProdutoUpdateDto): Promise<Produto> {

    }

    async deletarProduto(codigo: number): Promise<void> {

    }






}