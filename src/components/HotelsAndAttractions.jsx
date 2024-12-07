import React from "react";
import "../assets/css/FeaturedCardsSectionStyles.css";
import HotelAndAttractionCard from "./HotelAndAttractionCard";
import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";
import InfiniteScroll from "react-infinite-scroll-component";
import generateUniqueKey from "../features/uniqueKey";
import AnimatedParagraph from "./AnimatedParagraph";
import Loader from "../components/Loader";
import TopLoadingBar from 'react-top-loading-bar';

const HotelsAndAttractions = React.memo((props) => {
  const { query, items, setPage, type, heading } = props;

  const fetchNextPage = () => {
    if (items?.next && !items?.isFetching) {
      setPage(props.page + 1);
    }
  };

  return (
    <section className="featured-cards">
      {true ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {items?.description && !items?.isFetching && !items?.isSuccess ? (
            <AnimatedParagraph text={items?.description} />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {type !== "listing" && (
        <div className="content">
          <h2>{heading}</h2>
        </div>
      )}

      {items?.description && !props.related ? (
        <AnimatedParagraph text={items?.description} />
      ) : (
        ""
      )}
      {/* {items?.isFetching ? <LineLoader loiprogress /> : ""} */}
      <TopLoadingBar height={4} color="#0c4d2a" progress={items?.isFetching ? 30 : 100} />

      <InfiniteScroll
        dataLength={items.results.length}
        next={fetchNextPage}
        hasMore={!!items.next}
        loader={<Loader />}
      >
        <div className="cards">
          {items?.results.map((e, i) => (
            <HotelAndAttractionCard
              key={generateUniqueKey(
                "hotel-and-attraction-card" + e.name + i + e.id
              )}
              imageSrc={e.is_image_file ? e.image_url : e.image_url}
              productTitle={e.name}
              number_of_reviews={e.number_of_reviews}
              rating={e.rating}
              subcategories={e.subcategories}
              place_type={e.place_type}
              ranking={e.ranking}
              linkTo={`/details/${e.id}`}
            />
          ))}
        </div>
      </InfiniteScroll>
      {!items?.isFetching && items.results.length === 0 ? (
        <p>No data available!</p>
      ) : (
        ""
      )}
    </section>
  );
});

HotelsAndAttractions.propTypes = {
  type: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  setPage: PropTypes.func,
};

HotelsAndAttractions.defaultProps = {
  type: "default",
  heading: "",
  subHeading: "",
  setPage: () => {},
};

export default HotelsAndAttractions;
