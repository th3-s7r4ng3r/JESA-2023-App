import "../css/RegistrationDetails.css";
import AppliedAwardCard from "./AppliedAwardCard";

// declaring the registration details component
const RegistrationDetails = () => {
  return (
    <div className="reg-details" id="#reg-details">
      {/* Registration details section */}
      <div className="reg-details-container">
        <h1>Registration Details</h1>
        <h3>
          Name : <div>John Doe</div>
        </h3>
        <h3>
          Mobile No : <div>0766885466</div>
        </h3>
        <h3>
          Email : <div>JohnDoe@gmail.com</div>
        </h3>
        <h3>
          Faculty : <div>Faculty of Technology</div>
        </h3>
        <div className="reg-details-row-tags">
          <h3>Tags :</h3>
          <div className="candidate-tag">Candidate</div>
          <div className="oc-tag">Organizing Committee</div>
        </div>
      </div>

      {/* Applied award section */}
      <AppliedAwardCard />
    </div>
  );
};

export default RegistrationDetails;
