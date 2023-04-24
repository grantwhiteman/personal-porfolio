import type { ReactNode } from "react";

interface IconLinkButtonProps {
  href: string;
  icon: ReactNode;
  text?: string;
}

const IconLinkButton = ({ href, icon, text }: IconLinkButtonProps) => {
  return (
    <a
      href={href}
      className={`iconButton${text ? " w-[75%] flex justify-center" : ""}`}
    >
      {icon}
      {text && <span className="pl-4">{text}</span>}
    </a>
  );
};

export default IconLinkButton;
