import "./Footer.css"
const Footer = ()=> {


    return <footer className="footer">
        <div className="redes">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none">
        <path d="M2.81174 25.642L92.319 1.65864L68.3356 91.1659L2.81174 25.642Z" stroke="#95FFD4" stroke-width="2"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
        <circle cx="44.5" cy="44.5" r="43.5" stroke="white" stroke-width="2"/>
        </svg>

            <a href="">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="">
                <img src="/img/twitter.png" alt="Twiter" />
            </a>
            <a href="">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/logillo.png" alt="org" />
        <strong>Desarrollado por Gerardo Chevarria</strong>
    </footer>
}

export default Footer