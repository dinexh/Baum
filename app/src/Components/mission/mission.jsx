import TreeMission from '../../Assets/missionImage.png';
import './mission.css';
const Mission = () => {
    return (
        <div className="mission-container">
            <div className="mission-container-in">
                <div className="mission-container-in-one">
                    <img src={TreeMission} className='missiontree' alt="" />
                </div>
                <div className="mission-container-in-two">
                    <h3>Panchatantra is an ambitious project aimed at fostering the development of urban and rural forestries to protect our planet. Our goal is to empower every student to establish and nurture forests in their respective areas. By actively participating in tree planting initiatives and creating water bodies, we aim to significantly improve groundwater levels, ensuring a sustainable and greener future.</h3>
                </div>
            </div>
        </div>
      );
}
 
export default Mission;