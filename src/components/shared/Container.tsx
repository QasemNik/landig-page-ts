interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}
export const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        <div className={`base-container ${className}`}>
            {children}
        </div>
    )
}