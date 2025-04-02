interface NavItemsProps {
    href: string;
    text: string;
    className?: string;
    onClick: () => void;
}
function NavItems({onClick, href, text}: NavItemsProps) {
  return (
      <li>
          <a href={href} className="duration-300 font-medium ease-linear hover:text-primary py-3">
              {text}
          </a>
</li>
)
}

export default NavItems