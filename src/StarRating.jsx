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
        )
      })}
    </div>
  );

  /*
    Here's the markup for a single star:

    <img
      alt=""
      className="gold-star"
      // src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
      src="/star.svg"
    />

    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

   
}


export default StarRating;
