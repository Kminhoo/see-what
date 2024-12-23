interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ className, label, onClick, children }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
      {children}
    </button>
  );
};

export default Button;
