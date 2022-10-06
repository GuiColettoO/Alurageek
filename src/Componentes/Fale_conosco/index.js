import "./Fale_conosco.css"
import logo from "../../img/Logo.png"


const Fale = () =>{
    return(
        <section className="container">
            <img src={logo} />
            <ul className="categoria-container__produtos">
                <li><a href="#">Quem somos nós</a></li>
                <li><a href="#">Politica de privacidade</a></li>
                <li><a href="#">Programa fidelidade</a></li>
                <li><a href="#">Nossas lojas</a></li>
                <li><a href="#">Quero ser franquiado</a></li>
                <li><a href="#">Anuncie aqui</a></li>
            </ul>
            <form>
                <h1>Fale conosco</h1>
                <input className="form-1" type="text" id="txtBusca" placeholder="Nome"/>
                <input className="form-2" type="text" id="txtBusca" placeholder="Escreva a sua mensagem"/>
                <a href="#">Enviar mensagem</a>
            </form>
        </section>
    )
}
export default Fale