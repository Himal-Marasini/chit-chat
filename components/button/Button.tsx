type ButtonProps = {
  type: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  onClickHandler: React.MouseEventHandler<HTMLElement>;
};

const Button = ({ type, children, className, onClickHandler }: ButtonProps) => {
  const buttonClasses = `w-[140px] h-[40px] rounded-md mt-[20px] ${
    className || ""
  }`;

  return (
    <button type={type} className={buttonClasses} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
