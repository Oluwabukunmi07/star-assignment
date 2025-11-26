import { range }  from './util';

function StarRating({ rating }) {

  const starIndices = range(rating);

  return (
    <div className="star-wrapper">
      {starIndices.map((index) => {
        return (
          <img
            key={index}
            alt=""
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        );
      })}
    </div>
  );

}


export default StarRating;
