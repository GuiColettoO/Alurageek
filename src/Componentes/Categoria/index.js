import './Categoria.css'
import setaVerTudo from "../../img/setinha.png"
import categorias from "../../json/categorias.json";
import Produtos from '../Produtos';

const Categoria = () => {
    return(
        <section className="categoria-container">
            <div className="categoria-container__info">
                <h2 className="categoria-container__nome">StarWars</h2>

                <a href="#" className="categoria-container__ver-tudo">
                    Ver tudo
                    <img 
                        src={setaVerTudo} alt='seta'
                        className="categoria-container__seta-ver-tudo" />
                </a>
            </div>

            <ul className="categoria-container__produtos">
                {categorias[0].produtos.map((produto) => {
                    return(
                        <li>
                            <Produtos produto={produto}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
} 

export default Categoria