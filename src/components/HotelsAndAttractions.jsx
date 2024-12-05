// import React, { useState, useEffect } from "react";
// import "../assets/css/FeaturedCardsSectionStyles.css";
// import HotelAndAttractionCard from "./HotelAndAttractionCard";
// import PropTypes from "prop-types";
// import { FiArrowRight } from "react-icons/fi";
// import { useGetPlacesQuery } from "../services/userAuthAPI";
// import InfiniteScroll from "react-infinite-scroll-component";
// import generateUniqueKey from "../features/uniqueKey";
// import AnimatedParagraph from "./AnimatedParagraph";

// const HotelsAndAttractions = (props) => {

//   const query = props?.query
//   // const filters = props?.filters
//   // const page = props?.page
//   const items = props?.items
//   // const setItems = props?.setItems ? props?.setItems : () => {}
//   // const setPage = props?.setPage ? props?.setPage : () => {}

//   // useEffect(() => {

//   //   if (isSuccess && data) {
//   //     setItems((prevItems) => ({
//   //       description: data?.description ? data?.description : '',
//   //       count: data?.count ? data.count : 0,
//   //       next: data?.next ? data.next : null,
//   //       previous: data?.previous ? data.previous : null,
//   //       loading: false,
//   //       results:
//   //         page === 1 ? data.results : [...prevItems.results, ...data.results],
//   //     }));

//   //   }
//   // }, [data, isSuccess, page]);

//   // useEffect(() => {
//   //     setPage(1);
//   //     setItems({
//   //       count: 0,
//   //       next: null,
//   //       previous: null,
//   //       results: [],
//   //       loading: false
//   //     });
//   // }, [filters]);

//   const fetchNextPage = () => {
//     if (!items.isFetching && items.next) {
//       props.setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (

//     <section className="featured-cards">
//       {true ?<div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <AnimatedParagraph text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ea consectetur adipisci culpa cupiditate ipsam beatae labore officia. Rem nihil, sint quasi facere iste deleniti fugiat ab velit vitae a nobis fugit molestias adipisci odit tenetur eveniet dicta, officiis nam omnis. Quos sunt impedit perferendis iste vero voluptatum molestiae architecto!"} />
//     </div> : ''}

//       {props?.type !== "listing" && (
//         <div className="content">
//           <h2>{props?.heading}</h2>
//           <p>{props?.subHeading}</p>
//         </div>
//       )}
//       {items?.isSuccess ? (
//         <InfiniteScroll
//           dataLength={items.results.length}
//           next={fetchNextPage}
//           hasMore={!!items.next}
//           loader={<h4>Loading...</h4>}
//         >
//           <div className="cards">
//             {items.results.map((e, i) => {
//               return (
//                 <HotelAndAttractionCard
//                   key={generateUniqueKey(
//                     "hotel-and-attraction-card" + e.name + i + e.id
//                   )}
//                   imageSrc={e.is_image_file ? e.image_url : e.image_url}
//                   productTitle={e.name}
//                   noOfReviews={e.number_of_reviews}
//                   rating={e.rating}
//                   linkTo={`/details/${e.id}`}
//                 />
//               );
//             })}
//           </div>
//         </InfiniteScroll>
//       ) : (
//         <p>{items.isFetching ? "Loading..." : "No data available!"}</p>
//       )}
//       {props?.type !== "listing" && (
//         <button className="tertiary-btn">
//           View More <FiArrowRight />
//         </button>
//       )}
//     </section>
//   );
// };

// HotelsAndAttractions.propTypes = {
//   type: PropTypes.string.isRequired,
//   heading: PropTypes.string.isRequired,
//   subHeading: PropTypes.string.isRequired,
//   items: PropTypes.object.isRequired,
// };

// HotelsAndAttractions.defaultProps = {
//   type: "default",
//   heading: "",
//   subHeading: "",
// };

// export default HotelsAndAttractions;

import React, { useCallback } from "react";
import "../assets/css/FeaturedCardsSectionStyles.css";
import HotelAndAttractionCard from "./HotelAndAttractionCard";
import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";
import InfiniteScroll from "react-infinite-scroll-component";
import generateUniqueKey from "../features/uniqueKey";
import AnimatedParagraph from "./AnimatedParagraph";
import Loader from "../components/Loader";

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
      {items?.isSuccess ? (
        <>
          {items?.description && !props.related ? (
            <AnimatedParagraph text={items?.description} />
          ) : (
            ""
          )}
          <InfiniteScroll
            dataLength={items.results.length}
            next={fetchNextPage}
            hasMore={!!items.next}
            loader={<h4>Loading...</h4>}
          >
            <div className="cards">
              {items.results.map((e, i) => (
                <HotelAndAttractionCard
                  key={generateUniqueKey(
                    "hotel-and-attraction-card" + e.name + i + e.id
                  )}
                  imageSrc={e.is_image_file ? e.image_url : e.image_url}
                  productTitle={e.name}
                  number_of_reviews={e.number_of_reviews}
                  rating={e.rating}
                  subcategories={e.subcategories}
                  placeType={e.placeType}
                  ranking={e.ranking}
                  linkTo={`/details/${e.id}`}
                />
              ))}
            </div>
          </InfiniteScroll>
        </>
      ) : (
        <p>{items?.isFetching ? <Loader /> : "No data available!"}</p>
      )}
      {type !== "listing" && (
        <button className="tertiary-btn">
          {/* View More <FiArrowRight /> */}
        </button>
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
