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
    <div className=''>
      <div className=''>
        {ratings.map(({ icon, style }, index) => (
          <span
            key={index}
            className='material-symbols-rounded text-sky-400'
            style={style}
            aria-hidden='true'
          >
            {icon}
          </span>
        ))}
      </div>
      <p className='text-lg mb-6'>{content}</p>
      <div className=''>
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
            <p className="">
                {company}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
