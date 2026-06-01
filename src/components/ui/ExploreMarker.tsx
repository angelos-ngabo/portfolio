const ExploreMarker = ({ light = false }: { light?: boolean }) => {
  const stroke = light ? '#FFFFFF' : '#000000';

  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className={`text-[15px] font-semibold uppercase tracking-[0.3em] ${light ? 'text-white' : 'text-black'}`}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        | Explore |
      </span>
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none" aria-hidden>
        <path d="M0 12L6 6L14 18L22 6L30 18L38 6L46 18L54 6L60 12" stroke={stroke} strokeWidth="2" />
      </svg>
    </div>
  );
};

export default ExploreMarker;
