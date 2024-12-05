import React, { useEffect, useState } from "react";
import "../assets/css/DetailsReviewsStyles.css";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import Review from "./Review";
import WriteReview from "./WriteReview";
import generateUniqueKey from "../features/uniqueKey";
import verifyToken from "../features/verifyToken";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetLoggedUserQuery, useGetReviewsQuery } from "../services/userAuthAPI";
import { getToken } from "../services/localStorageService";

const DetailsReviews = (props) => {
  const { access_token } = getToken()
  const [userID, setUserID] = useState("")
  const [userCanReview, setUserCanReview] = useState(false);
  const { data: loggedUserData, isSuccess: isLoggedUserSuccess } = useGetLoggedUserQuery(access_token);
  const [reviewSuccess, setReviewSuccess] = useState(false)
  const {
    data: dataReviews,
    isFetching: isFetchingReviews,
    isSuccess: isSuccessReviews,
  } = useGetReviewsQuery(
    { user: userID, place: props.data.id },
    {
      enabled: isLoggedUserSuccess && !!loggedUserData,
    }
  );

  useEffect(() => {
    if (isLoggedUserSuccess && !!loggedUserData){
      setUserID(loggedUserData.id)
    }

  }, [loggedUserData, isLoggedUserSuccess]);


  useEffect(() => {
    if (isSuccessReviews && !!dataReviews){
      console.log((dataReviews.results.length === 0))
      setUserCanReview((dataReviews.results.length === 0) ? true : false)
    }
  }, [dataReviews, isSuccessReviews]);

  const fetchNextPage = () => {
    if (!props.isFetchingReviews && props.reviews.next) {
      props.setReviewsPage((prevPage) => prevPage + 1);
    }
  };

  const rating_number = props?.data?.rating?.toFixed(1);
  return (
    <div className="details-reviews">
      <h3>Ratings & Reviews</h3>

      <div className="ratings-and-write-review-combined">
        <div className="overall-ratings">
          <h1>{rating_number}</h1>
          <div className="ratings">
            {rating_number && (
              <div className="rating-stars">
                {[...Array(Math.floor(rating_number))].map((_, i) => (
                  <FaStar key={generateUniqueKey(`filled_star_${i}`)} />
                ))}
                {rating_number % 1 !== 0 && (
                  <FaRegStarHalfStroke key={generateUniqueKey("half_star")} />
                )}
                {[...Array(5 - Math.ceil(rating_number))].map((_, i) => (
                  <FaRegStar key={generateUniqueKey(`empty_star_${i}`)} />
                ))}
              </div>
            )}
            <div className="rating-annotates">
              <p className="total-ratings">Total Reviews: {props.reviews.count}</p>
            </div>
          </div>
        </div>
        {userCanReview && !reviewSuccess ? <WriteReview user={userID} place={props.data.id} setReviewSuccess={setReviewSuccess}/> : ""}
      </div>

      <InfiniteScroll
        dataLength={props.reviews.results.length}
        next={fetchNextPage}
        hasMore={!!props.reviews.next}
        loader={<h4>Loading...</h4>}
      >
        {props.reviews.results.map((item, i) => (
          <Review
            key={generateUniqueKey(`review_${item.id}_${i}`)}
            data={item}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default DetailsReviews;
