interface TitleProps{
    children: React.ReactNode;
}

function Title({children}:TitleProps) {
  return (
      <h1 className="tex-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
          {children}
    </h1>
  )
}

export default Title