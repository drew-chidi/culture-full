import Link from 'next/link';

const ButtonOutline = ({ onClick, page, children, styles, buttonType }) => {
  // If page is provided, return a Link component
  if (page) {
    return (
      <div className='flex justify-center items-center'>
        <Link
          href={`/${page}`}
          className='py-4 px-8 rounded-lg text-white font-semibold z-10 relative overflow-hidden whitespace-nowrap w-full border border-primary'
        >
          {children}
        </Link>
      </div>
    );
  }

  // If onClick is provided, return a button element
  if (onClick) {
    return (
      <div className='flex justify-center items-center'>
        <button
          onClick={onClick}
          className={`py-4 px-8 rounded-lg text-white font-semibold z-10 relative overflow-hidden whitespace-nowrap w-full border border-primary ${styles}  `}
          type={buttonType}
        >
          {children}
        </button>
      </div>
    );
  }

  // If neither page nor onClick are provided, return null
  return null;
};

export default ButtonOutline;