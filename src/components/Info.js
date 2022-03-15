import profileImage from '../images/profile-image.png'
import emailIcon from '../images/email-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'
import '../styles/info.css'

export default function Info(props){
    function getEmailClasses(isEmailOnly) {
        let classes = "email button";
    
        if(isEmailOnly) {
            classes += " big-button";
        }
    
        return classes;
    }

    return(
        <div className="info-container">
            <img src={profileImage} alt="profile" className="profile-image" />
            <h1 className={props.lightMode ? "light-mode" : ""} >Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h3 className={props.lightMode ? "light-mode" : ""} >laurasmith.website</h3>
            <div className="buttons-container">
                <div className={getEmailClasses(props.emailOnly)}>
                    <img src={emailIcon} alt="email icon"/>
                    <p>Email</p>
                </div>
                {props.emailOnly ? "" : 
                    <div className="linkedin button">
                        <img src={linkedinIcon} alt="linkedin icon"/>
                        <p>LinkedIn</p>
                    </div>
                }
            </div>
        </div>
    )
}