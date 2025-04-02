interface BtnLinkProps{
  href: string;
  text: string;
  className?: string;
  onClick: ()=>void 
}
export default function BtnLink({ href, text, className =""}: BtnLinkProps) {
  return (
    <a href={href} className={`px-4 py-2 rounded-full outline-none  relative overflow-hidden border bg-gradient-to-tl from-violet-500 via-indigo-600 dark:bg-violet-600 cursor-pointer transform transition duration-300 ${className}`}>
      <span className="relative z-10 text-white">
        {text}
      </span>
    </a>
  )
}
