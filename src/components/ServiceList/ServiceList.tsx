import * as SC from "./ServiceListStyled";

const ServiceList: React.FC = () => {
  return (
    <SC.ServiceListStyled>
      <SC.ServiceItem className="cherry">
        <h3>Graphic Design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </SC.ServiceItem>
      <SC.ServiceItem className="orange">
        <h3>Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </SC.ServiceItem>
    </SC.ServiceListStyled>
  );
};

export default ServiceList;
