import './objectives.css';
import Object_Image from "../../Assets/EventImage.jpg";

const Objectives = () => {
    return (  
        <div className="object-container">
            <div className="object-container-in">
                <div className="object-heading">
                    <h1>What we <span>do?</span></h1>
                </div>
                <div className="object-main">
                    <div className="object-boxes">
                        <div className="object-box">
                            <img src={Object_Image} className="BoxImage" alt="Modern farmer" />
                            <div className="box-matter">
                                <h4>Promoting Afforestation</h4>
                                <p> Encouraging students to initiate afforestation drives in urban and rural areas to combat deforestation and enhance green cover</p>
                            </div>
                            <div className="box-button">
                                <button>→</button>
                            </div>
                        </div>
                        <div className="object-box">
                            <img src={Object_Image} className="BoxImage" alt="Campaign" />
                            <div className="box-matter">
                                <h4>Water Conservation</h4>
                                <p>Establishing water bodies alongside forestries to improve groundwater levels, ensuring water security and mitigating the effects of drought.</p>
                            </div>
                            <div className="box-button">
                                <button>→</button>
                            </div>
                        </div>
                        <div className="object-box">
                            <img src={Object_Image} className="BoxImage" alt="Air pollution" />
                            <div className="box-matter">
                                <h4>Biodiversity Conservation</h4>
                                <p>Creating diverse forest ecosystems to preserve biodiversity and provide habitats for various plant and animal species.</p>
                            </div>
                            <div className="box-button">
                                <button>→</button>
                            </div>
                        </div>
                        <div className="object-box">
                            <img src={Object_Image} className="BoxImage" alt="Air pollution" />
                            <div className="box-matter">
                                <h4>Climate Resilience</h4>
                                <p>Increasing rainfall through forest cover expansion, aiding in climate regulation and mitigating the impact of climate change.</p>
                            </div>
                            <div className="box-button">
                                <button>→</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Objectives;
