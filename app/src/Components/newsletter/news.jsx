import Mail from "../../Assets/Mail.avif"
import './news.css'
const News = () => {
    return (  
        <div className="news-container">
            <div className="news-container-in">
                <div className="news-container-in-one">
                    <img src={Mail} className="mailImage" alt="Newsletter Icon"/>
                </div>
                <div className="news-container-in-two">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>
                        Stay informed about our latest updates, tree-planting events, and more. Enter your email below to join our 
                        newsletter and support the Save Trees campaign.
                    </p>
                    <form className="newsletter-form">
                        <input 
                            type="email" 
                            className="newsletter-input" 
                            placeholder="Enter your email" 
                            required 
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div> 
        </div>
    );
}
 
export default News;
