import * as SC from "./FeedBackStyled"

import avaFirst from "../../assets/images/image-emily.jpg"
import avaSecond from "../../assets/images/image-thomas.jpg"
import avaThird from "../../assets/images/image-jennie.jpg"

const Feedback:React.FC = () => {
    return ( 
        <SC.FeedbackCon>
            <h3>client testimonial</h3>
        <ul>
            <SC.FeedbackItem>
                <SC.AvaThumb>
                    <img src={avaFirst} alt="emily" />
                </SC.AvaThumb>
                <div>
                    <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <h4>Emily R.</h4>
                    <p>Marketing Director</p>
                </div>
            </SC.FeedbackItem>
            <SC.FeedbackItem>
                <SC.AvaThumb>
                    <img src={avaSecond} alt="Thomas" />
                </SC.AvaThumb>
                <div>
                    <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                    <h4>Thomas S.</h4>
                    <p>Chief Operating Officer</p>
                </div>
            </SC.FeedbackItem>
            <SC.FeedbackItem>
                 <SC.AvaThumb>
                    <img src={avaThird} alt="Jennie" />
                </SC.AvaThumb>
                <div>
                    <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! </p>
                    <h4>Jennie F.</h4>
                    <p>Business Owner</p>
                </div>
            </SC.FeedbackItem>
        </ul>
        </SC.FeedbackCon>
     );
}
 
export default Feedback;