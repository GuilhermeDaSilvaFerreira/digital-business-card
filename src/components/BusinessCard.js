import Info from './Info'
import About from './About'
import Footer from './Footer'
import '../styles/businessCard.css'

export default function BusinessCard(props){
    function getCardClasses(isLightMode) {
        let classes = "card";

        if (isLightMode) {
            classes += " light-mode";
        }

        return classes;
    }

    return(
        <div className="container" >
            <div className={getCardClasses(props.lightMode)} >
                <Info emailOnly={props.emailOnly} lightMode={props.lightMode} />
                <About lightMode={props.lightMode} />
                <Footer lightMode={props.lightMode} />
            </div>
        </div>
    )
}