import Mail from "../../Assets/Mail.svg"
import Mail2 from "../../Assets/Mail2.svg"
import useWindowSize from 'react-use/lib/useWindowSize'
import React from "react"
import './contact.css'
import ReactConfetti from "react-confetti"
// import Confetti from "react-confetti/dist/types/Confetti"
const Contact = () => {

    const[showConfetti, setShowConfetti] = React.useState(false)
    const { width, height } = useWindowSize()
    const handleSubscribe = () => {
        setShowConfetti(true)
        setTimeout(() => {
            setShowConfetti(false)
        }, 2000)
    }
    return ( 
        <div className="contact">
            <div className="contact-in">
                <div className="contact-in-one">
                    <img src={Mail2} className="NewletterMail" />
                </div>
                <div className="contact-in-two">
                <div className="contact-in-two-in">
                    <h1>Subscribe to our newsletter</h1>
                    <p>Get the latest updates on new products and upcoming sales</p>
                    <div className="contact-in-two-in-in">
                        <input type="text" placeholder="Enter your email address" />
                        <button onClick={handleSubscribe} >Subscribe</button>
                    </div>
                </div>
                </div>
            </div>
            {showConfetti && <ReactConfetti width={width} height={height} numberOfPieces={300} />}
        </div>
     );
}
 
export default Contact;
