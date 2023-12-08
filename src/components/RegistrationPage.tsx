//lazy loading this component to increase the speed
import RegistrationForm from "./RegistrationForm";
import AfterRegistration from "./AfterRegistration";

// declaring the registration page component
const RegistrationPage = ({ isRegistrationClosed = 0 }: any) => {
  return (
    // rendering the registration page
    isRegistrationClosed === 0 ? (
      <RegistrationForm isRegistrationClosed={isRegistrationClosed} />
    ) : (
      // rendering getting registration number page
      <AfterRegistration />
    )
  );
};

export default RegistrationPage;
