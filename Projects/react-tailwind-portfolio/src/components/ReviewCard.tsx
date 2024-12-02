import React from 'react';

interface ReviewCardProps {
  content: string;
  name: string;
  imgSrc: string;
  company: string;
}

const ratings = new Array(5).fill({
  icon: 'star',
  style: { fontVariationSettings: "'FILL' 1" },
});

const ReviewCard = ({ content, name, imgSrc, company }: ReviewCardProps) => {
  return (
    <div className='bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]'>
      <div className='flex items-center gap-1 mb-3'>
        {ratings.map(({ icon, style }, index) => (
          <span
            key={index}
            className='material-symbols-rounded text-yellow-300 text-[18px]'
            style={style}
            aria-hidden='true'
          >
            {icon}
          </span>
        ))}
      </div>
      <p className='text-zinc-400 mb-8'>{content}</p>
      <div className='flex items-center gap-2 mt-auto'>
        <figure className='img-box aspect-square rounded-lg'>
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
             className='img-cover'
          />
        </figure>
        <div>
            <p>{name}</p>
            <p className="text-xs text-zinc-400 tracking-wider">
                {company}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
