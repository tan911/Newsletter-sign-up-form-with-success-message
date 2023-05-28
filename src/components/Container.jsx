import { useState } from 'react';

import ResponsiveImage from './ResponsiveImage';
import validateEmail from './validateEmail';
import { ReactComponent as FillCheckCircle } from '../assets/images/icon-list.svg';

function Container() {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const inputHandler = (e) => {
    setEmail(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const isValidate = validateEmail(email);

    if (!isValidate) {
      setIsError(true);
    } else {
      setEmail('');
      setIsError(false);
    }
  };

  return (
    <div className="container">
      <div className="start">
        <h1 className="font-Roboto-Bold text-3xl text-semi-grey mobile:text-4xl laptop:text-5xl">Stay updated!</h1>
        <p className="py-5 text-sm text-bg-color mobile:text-base">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="pt-3 pb-8">
          <li className="list-icons">
            <FillCheckCircle aria-hidden="true" focusable="false" className="icons" />
            Product discovery and building what matters
          </li>
          <li className="list-icons">
            <FillCheckCircle aria-hidden="true" focusable="false" className="icons" />
            Measuring to ensure updates are a success
          </li>
          <li className="list-icons">
            <FillCheckCircle aria-hidden="true" focusable="false" className="icons" />
            And much more!
          </li>
        </ul>
        <div>
          <form onSubmit={formSubmitHandler}>
            <div className="mb-5 relative">
              <label htmlFor="email" className="text-xs font-Roboto-Bold text-semi-grey block mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={inputHandler}
                placeholder="email@company.com"
                className={`border px-6 py-3 w-full rounded-md outline-none ${
                  isError ? 'error' : 'focus:border-semi-grey'
                }`}
                aria-describedby="error-message"
                required
              />
              <span
                id="error-message"
                aria-live="polite"
                className={`text-xs absolute top-0 right-0 text-primary ${isError ? 'block' : 'hidden'}`}
              >
                Valid email required
              </span>
            </div>
            <button className="bg-semi-grey text-white px-2 py-4 w-full rounded-md transition-all ease-out duration-300 hover:bg-gradient-to-r from-rose-500 to-primary hover:shadow-lg hover:shadow-rose-500/50">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="end">
        <ResponsiveImage />
      </div>
    </div>
  );
}

export default Container;
