type OutlineButtonProps = {
  label: string;
  light?: boolean;
  className?: string;
  onClick?: () => void;
};

const OutlineButton = ({ label, light = false, className = '', onClick }: OutlineButtonProps) => {
  const line = light ? 'border-white' : 'border-black';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-block pl-1 pt-1 ${light ? 'text-white' : 'text-black'} ${className}`}
    >
      <span className={`absolute left-0 top-0 w-8 h-8 border-t-2 border-l-2 ${line}`} aria-hidden />
      <span className={`absolute right-0 bottom-0 w-8 h-8 border-b-2 border-r-2 ${line}`} aria-hidden />
      <span
        className="relative block px-5 py-2 text-[15px] font-semibold uppercase tracking-wide"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {label}
      </span>
    </button>
  );
};

export default OutlineButton;
