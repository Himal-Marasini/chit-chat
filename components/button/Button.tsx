type ButtonProps = {
  disabled?: boolean;
  type: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  onClickHandler?: React.MouseEventHandler<HTMLElement>;
};

const Button = ({
  disabled = false,
  type,
  children,
  className,
  onClickHandler
}: ButtonProps) => {
  const buttonClasses = `w-[140px] h-[40px] rounded-md mt-[20px] ${
    className || ""
  }`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
