import "./Produtos.css"


export default function Produtos (props){
    return (
        <div className="produto-container">
            <img className="produto-container__img" src={`/img/${props.produto.imagem}`}/>
            <h3 className="produto-container__nome">{props.produto.nome}</h3>
            <span className="produto-container__preco">R${props.produto.preco},00</span>
            <a href="#" className="produto-container__ver-produto">
                Ver produto
            </a>
        </div>
    )
}