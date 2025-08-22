import SocialLogin from "../components/SocialLogin";
import SignInForm from "./SignInForm";

const SignInPage = () => {
  return (
    <div className="w-full">
      <SignInForm />
      <SocialLogin />
    </div>
  );
};

export default SignInPage;
