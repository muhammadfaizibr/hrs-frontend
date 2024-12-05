import React, { useEffect, useContext, useState } from "react";
import DetailsHeader from "../components/DetailsHeader";
import DetailsReviews from "../components/DetailsReviews";
import Related from "../components/Related";
import { ProgressContext } from "../contexts/ProgressContext";
import { useParams } from "react-router-dom";
import { useRetrievePlaceQuery, useGetReviewsQuery } from "../services/userAuthAPI";

const Details = () => {
  const setProgress = useContext(ProgressContext);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [reviewsPage, setReviewsPage] = useState(1);
  const [reviewSuccess, setReviewSuccess] = useState(false)

  const [reviews, setReviews] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
    loading: true,
  });


  const { data, isFetching, isSuccess } = useRetrievePlaceQuery({ id });
  const {
    data: dataReviews,
    isFetching: isFetchingReviews,
    isSuccess: isSuccessReviews,
  } = useGetReviewsQuery({ place: id, page: reviewsPage });

  // Update place details
  useEffect(() => {
    if (isSuccess && data) {
      setItem(data);
    }
  }, [data, isSuccess]);

  // Update reviews
  useEffect(() => {
    if (isSuccessReviews && dataReviews) {
      setReviews((prevReviews) => {
        const uniqueResults = [
          ...prevReviews.results,
          ...dataReviews.results.filter(
            (newItem) => !prevReviews.results.some((prevItem) => prevItem.id === newItem.id)
          ),
        ];
        return {
          ...dataReviews,
          results: reviewsPage === 1 ? dataReviews.results : uniqueResults,
        };
      });
    }
  }, [dataReviews, isSuccessReviews, reviewsPage]);
  

  // Progress indication
  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return isFetching ? (
    <h2>Fetching Data...</h2>
  ) : isSuccess && item ? (
    <section className="details">
      <DetailsHeader data={item} />
      {isSuccessReviews && (
        <DetailsReviews
          data={item}
          reviewsPage={reviewsPage}
          setReviewsPage={setReviewsPage}
          reviews={reviews}
          isFetchingReviews={isFetchingReviews}
        />
      )}
      {/* <Related data={item} /> */}
    </section>
  ) : (
    <h2>No Data</h2>
  );
};

export default Details;
