import '../styles/about.css'

export default function About(props){
    function getTitleClasses(isLightMode) {
        let classes = "title";

        if (isLightMode) {
            classes += " light-mode";
        }

        return classes;
    }

    return(
        <div className="about-container">
            <div className="topic">
                <h2 className={getTitleClasses(props.lightMode)}>About</h2>
                <p className={props.lightMode ? "light-mode" : ""}>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </div>
            <div className="topic">
                <h2 className={getTitleClasses(props.lightMode)}>Interests</h2>
                <p className={props.lightMode ? "light-mode" : ""}>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>
    )
}