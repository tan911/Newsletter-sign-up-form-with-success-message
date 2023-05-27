import { ReactComponent as FillCheckCircle } from '../assets/images/icon-list.svg';
import image1 from '../assets/images/illustration-sign-up-desktop.svg';

function Container() {
  return (
    <div className="container">
      <div className="start">
        <h1 className="font-Roboto-Bold text-5xl text-semi-grey">Stay updated!</h1>
        <p className="py-5 text-bg-color">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="pt-3 pb-8">
          <li className="list-icons">
            <FillCheckCircle />
            Product discovery and building what matters
          </li>
          <li className="list-icons">
            <FillCheckCircle />
            Measuring to ensure updates are a success
          </li>
          <li className="list-icons">
            <FillCheckCircle />
            And much more!
          </li>
        </ul>
        <div>
          <form>
            <div className="mb-5">
              <label htmlFor="email" className="text-xs font-Roboto-Bold text-semi-grey block mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@company.com"
                className="border px-6 py-3 w-full rounded-md outline-none focus:border-semi-grey"
              />
            </div>
            <button className="bg-semi-grey text-white px-2 py-4 w-full rounded-md transition-all ease-out duration-300 hover:bg-gradient-to-r from-rose-500 to-primary hover:shadow-lg hover:shadow-rose-500/50">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
      <div>
        <img src={image1} alt="Illustration" />
      </div>
    </div>
  );
}

export default Container;
