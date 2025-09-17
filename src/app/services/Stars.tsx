import React from 'react';


type RenderStarsProps = {
  count: number;
};

 const RenderStars: React.FC<RenderStarsProps> = ({ count }) => {
      return (
        <div className='flex items-center'>
          { Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-sm  ${
                    i < count ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  >
                  ★
                </span>
            ))}
          </div>
          )
    };

export default RenderStars;