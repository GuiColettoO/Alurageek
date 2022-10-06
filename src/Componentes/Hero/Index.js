import './Hero.css'
import banner from "../../img/banner-image.png"

const Hero = () => {
    return (
        <div className='hero'>
            <img src={banner} alt="O banner principal da página do AluraGeek"/>
            <div className='Texto'>
                <h1>Dezembro Promocional</h1>
                <h2>Produtos selecionados com 33% de desconto</h2>
            </div>
            <div className='Botao'>
                <a href="#">
                    Ver consoles
                </a>
            </div>
            
        </div>
    )
}

export default Hero