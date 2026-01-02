interface HamburgerProps {
  open: boolean;
}

export default function Hamburger({ open }: HamburgerProps) {
  return (
    <div className="flex flex-col justify-between w-6 h-5">
      <span
        className={`block h-[2px] bg-[var(--color-ink)] transition-transform ${
          open ? "translate-y-[6px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[2px] bg-[var(--color-ink)] transition-opacity ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-[2px] bg-[var(--color-ink)] transition-transform ${
          open ? "-translate-y-[6px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}
