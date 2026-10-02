type IconProps = {
  path: string;
  className?: string;
};

export function Icon({ path, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d={path} />
    </svg>
  );
}
