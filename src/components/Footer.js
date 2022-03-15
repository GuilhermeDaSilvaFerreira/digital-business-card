import '../styles/footer.css'
import twitterIcon from '../images/twitter-icon.png'
import facebookIcon from '../images/facebook-icon.png'
import instagramIcon from '../images/instagram-icon.png'
import githubIcon from '../images/github-icon.png'

export default function Footer(props){
    return(
        <footer className={props.lightMode ? "light-mode" : ""}>
            <img src={twitterIcon} alt="twitter icon" />
            <img src={facebookIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="twitter icon" />
            <img src={githubIcon} alt="twitter icon" />
        </footer>
    )
}