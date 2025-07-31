import * as SC from "./FeedBackStyled";

import avaFirst from "../../assets/images/image-emily.jpg";
import avaSecond from "../../assets/images/image-thomas.jpg";
import avaThird from "../../assets/images/image-jennie.jpg";

const Feedback: React.FC = () => {
  return (
    <SC.FeedbackCon>
      <h3>client testimonial</h3>
      <ul>
        <SC.FeedbackItem>
          <SC.AvaThumb>
            <img src={avaFirst} alt="emily" />
          </SC.AvaThumb>
          <div>
            <SC.Content>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </SC.Content>
            <SC.Name>Emily R.</SC.Name>
            <SC.Position>Marketing Director</SC.Position>
          </div>
        </SC.FeedbackItem>
        <SC.FeedbackItem>
          <SC.AvaThumb>
            <img src={avaSecond} alt="Thomas" />
          </SC.AvaThumb>
          <div>
            <SC.Content>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </SC.Content>
            <SC.Name>Thomas S.</SC.Name>
            <SC.Position>Chief Operating Officer</SC.Position>
          </div>
        </SC.FeedbackItem>
        <SC.FeedbackItem>
          <SC.AvaThumb>
            <img src={avaThird} alt="Jennie" />
          </SC.AvaThumb>
          <div>
            <SC.Content>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!{" "}
            </SC.Content>
            <SC.Name>Jennie F.</SC.Name>
            <SC.Position>Business Owner</SC.Position>
          </div>
        </SC.FeedbackItem>
      </ul>
    </SC.FeedbackCon>
  );
};

export default Feedback;
