import React, { useState, useEffect } from "react";
import "../assets/css/FeaturedCardsSectionStyles.css";
import HotelAndAttractionCard from "./HotelAndAttractionCard";
import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";
import { useGetPlacesQuery } from "../services/userAuthAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import generateUniqueKey from "../features/uniqueKey";

const HotelsAndAttractions = (props) => {

  const query = props?.query
  const filters = props?.filters
  const page = props?.page
  const items = props?.items
  const setItems = props?.setItems ? props?.setItems : () => {}
  const setPage = props?.setPage ? props?.setPage : () => {}

  const { data, isFetching, isSuccess } = useGetPlacesQuery(
    { query, page, filters },
    { skip: !query }
  );

  useEffect(() => {

    if (isSuccess && data) {
      setItems((prevItems) => ({
        count: data.count,
        next: data.next,
        previous: data.previous,
        loading: false,
        results:
          page === 1 ? data.results : [...prevItems.results, ...data.results],
      }));
    }
  }, [data, isSuccess, page]);

  useEffect(() => {
      setPage(1);
      setItems({
        count: 0,
        next: null,
        previous: null,
        results: [],
        loading: false
      });
  }, [filters]);

  const fetchNextPage = () => {
    if (!isFetching && items.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section className="featured-cards">
      {props?.type !== "listing" && (
        <div className="content">
          <h2>{props?.heading}</h2>
          <p>{props?.subHeading}</p>
        </div>
      )}
      {isSuccess ? (
        <InfiniteScroll
          dataLength={items.results.length}
          next={fetchNextPage}
          hasMore={!!items.next}
          loader={<h4>Loading...</h4>}
        >
          <div className="cards">
            {items.results.map((e, i) => {
              return (
                <HotelAndAttractionCard
                  key={generateUniqueKey(
                    "hotel-and-attraction-card" + e.name + i + e.id
                  )}
                  imageSrc={e.is_image_file ? e.image_url : e.image_url}
                  productTitle={e.name}
                  noOfReviews={e.number_of_reviews}
                  rating={e.rating}
                  linkTo={`/details/${e.id}`}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      ) : (
        <p>{isFetching ? "Loading..." : "No data available!"}</p>
      )}
      {props?.type !== "listing" && (
        <button className="tertiary-btn">
          View More <FiArrowRight />
        </button>
      )}
    </section>
  );
};

HotelsAndAttractions.propTypes = {
  type: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

HotelsAndAttractions.defaultProps = {
  type: "default",
  heading: "",
  subHeading: "",
};

export default HotelsAndAttractions;
