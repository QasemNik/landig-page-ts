interface ButtonProps{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
export default function Button({onClick, children, className =""}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`button ${className}` } >
      {children}
    </button>
  )
}
