import logo from "../../img/Logo.png"
import lupa from "../../img/Lupa.png"
import './Interno.css'

const Interno = () => {
    return (
        <div className='interno'>
            <div className='Topo'>
                <div className='Direita'>
                    <img src={logo} alt="Logo do alurageek"/>
                    <div className='Busca'>
                        <input type="text" id="txtBusca" placeholder="O que deseja encontrar?"/>
                    </div>
                    <input className='Lupa' type="image" src={lupa} alt="Submit" width="48" height="48"/>
                </div>
                <div className='Botao'>
                    <button type="button">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Interno