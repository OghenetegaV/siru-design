import Link from "next/link";
import {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

type ButtonVariant = "primary" | "secondary";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

/* Button props (for <button>) */
type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

/* Link props (for <a>) */
type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | LinkButtonProps;

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center
    h-[43px] px-6
    rounded-[8px]
    text-[16px] font-medium
    transition-all duration-200 ease-out
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--color-brand-brown)]
    focus-visible:ring-offset-2
    active:scale-[0.97]
  `;

  const variants = {
    primary: `
      bg-[var(--color-brand-brown)]
      text-white
      hover:bg-[color-mix(in_srgb,var(--color-brand-brown),black_10%)]
      hover:-translate-y-[1px]
      active:translate-y-0
    `,
    secondary: `
      border border-[var(--color-brand-brown)]
      text-[var(--color-brand-brown)]
      bg-transparent
      hover:bg-[var(--color-brand-brown)]/10
      hover:-translate-y-[1px]
      active:translate-y-0
    `,
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  /* LINK */
  if (href) {
    return (
      <Link href={href} className={styles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  /* BUTTON */
  return (
    <button
      className={styles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
