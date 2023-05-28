import illustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from '../assets/images/illustration-sign-up-mobile.svg';

function ResponsiveImage() {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={illustrationDesktop} />
      <img src={illustrationMobile} alt="Illustration" />
    </picture>
  );
}
export default ResponsiveImage;
