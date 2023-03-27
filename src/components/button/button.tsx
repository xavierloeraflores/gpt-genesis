interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative mx-0.5 w-16 overflow-hidden rounded-sm bg-white"
    >
      <div className="absolute inset-0 w-2 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="relative text-black group-hover:text-white">{text}</span>
    </button>
  );
};
export default Button;
