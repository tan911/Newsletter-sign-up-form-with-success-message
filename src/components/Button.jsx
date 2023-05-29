function Button({ children }) {
  return (
    <button className="bg-semi-grey text-white px-2 py-4 w-full rounded-md transition-all ease-out duration-300 hover:bg-gradient-to-r from-rose-500 to-primary hover:shadow-lg hover:shadow-rose-500/50">
      {children}
    </button>
  );
}

export default Button;
