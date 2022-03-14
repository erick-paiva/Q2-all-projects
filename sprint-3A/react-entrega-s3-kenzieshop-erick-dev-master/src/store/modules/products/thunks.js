import {addCarrinhoProdutos} from "./actions";

export const addProdutoCarrinho = (produtoNovo) => {

    return (dispatch, getState) => {
        const {produto} = getState();
        const produtoAdcionado = [...produto, produtoNovo]
        dispatch(addCarrinhoProdutos(produtoAdcionado))
    }
}