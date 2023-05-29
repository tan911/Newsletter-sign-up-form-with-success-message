import Button from './Button';
import { ReactComponent as FillCheckCircle } from '../assets/images/icon-list.svg';

function SuccessMessage({ email }) {
  return (
    <div className="max-w-lg w-full p-5 laptop:max-w-sm laptop:p-10">
      <FillCheckCircle width="50" height="50" className="mb-8" />
      <div>
        <h1 className="font-Roboto-Bold text-4xl text-semi-grey mb-4 mobile:text-4xl laptop:text-5xl laptop:mb-6">
          Thanks for subscribing!
        </h1>
        <p className="text-sm text-bg-color mb-32 laptop:mb-8">
          A confirmation email has been sent to <span className="font-Roboto-Bold">{email}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>
        <Button>Dismiss message</Button>
      </div>
    </div>
  );
}

export default SuccessMessage;
