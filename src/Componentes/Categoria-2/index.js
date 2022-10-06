import './Categoria-2.css'
import setaVerTudo from "../../img/setinha.png"
import categorias from "../../json/categorias.json";
import Produtos from '../Produtos';

const Console = () => {
    return(
        <section className="categoria-container-1">
            <div className="categoria-container__info">
                <h2 className="categoria-container__nome">Consoles</h2>

                <a href="#" className="categoria-container__ver-tudo">
                    Ver tudo
                    <img 
                        src={setaVerTudo} alt='seta'
                        className="categoria-container__seta-ver-tudo" />
                </a>
            </div>

            <ul className="categoria-container__produtos">
                {categorias[1].produtos.map((produto) => {
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

export default Console