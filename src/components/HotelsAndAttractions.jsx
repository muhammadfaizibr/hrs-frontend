import React, { useState, useEffect } from "react";
import "../assets/css/FeaturedCardsSectionStyles.css";
import HotelAndAttractionCard from "./HotelAndAttractionCard";
import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";
import { useGetPlacesQuery } from "../services/userAuthAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import generateUniqueKey from "../features/uniqueKey";

const HotelsAndAttractions = ({
  type,
  heading,
  subHeading,
  query,
  filters,
}) => {
  const [page, setPage] = useState(1);

  const [items, setItems] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

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
        results:
          page === 1 ? data.results : [...prevItems.results, ...data.results],
      }));
    }
  }, [data, isSuccess, page]);

  useEffect(() => {
    if (query?.trim() !== "") {
      setPage(1);
      setItems({
        count: 0,
        next: null,
        previous: null,
        results: [],
      });
    }
  }, [query, filters]);

  const fetchNextPage = () => {
    if (!isFetching && items.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section className="featured-cards">
      {type !== "listing" && (
        <div className="content">
          <h2>{heading}</h2>
          <p>{subHeading}</p>
        </div>
      )}
      {isSuccess ? (
        <InfiniteScroll
          dataLength={items.results.length}
          next={fetchNextPage}
          hasMore={!!items.next}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more items!</p>}
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
                  linkTo="/details"
                />
              );
            })}
          </div>
        </InfiniteScroll>
      ) : (
        <p>{isFetching ? "Loading..." : "No data available!"}</p>
      )}
      {type !== "listing" && (
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
