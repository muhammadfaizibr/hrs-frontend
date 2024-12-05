// import React, { useEffect, useContext, useState } from "react";
// import SearchBar from "../components/SearchBar";
// import HotelsAndAttractions from "../components/HotelsAndAttractions";
// import "../assets/css/ListingStyles.css";
// import Sidebar from "../components/SideBar";
// import PropTypes from "prop-types";
// import { ProgressContext } from "../contexts/ProgressContext";
// import { CiFilter } from "react-icons/ci";
// import { useLocation } from "react-router-dom";
// import { fetchPlaces } from "../services/customFetchAPI";
// import Loader from '../components/Loader'
// import NoResults from '../components/NoResults';


// const Listings = ({ choice }) => {
//   const setProgress = useContext(ProgressContext);
//   const [isMobile, setIsMobile] = useState(false);
//   const location = useLocation();
  
//   const [page, setPage] = useState(1);
//   const [items, setItems] = useState({
//     count: 0,
//     next: null,
//     previous: null,
//     results: [],
//     isFetching: false,
//     isSuccess: false,
//   });

//   const [query, setQuery] = useState("");
//   const [filters, setFilters] = useState({
//     city: "",
//     rating: "",
//     place_type: "",
//     amenities: "",
//     subcategories: "",
//     sort_by: "",
//   });

  
//   const toggleMobileMenu = () => {
//     setIsMobile(!isMobile);
//   };

//   const callFetchPlaces = async ({fetchedOrUpdatedQuery, fetchedOrUpdatedFilters, isPageConcat}) => {
//     setItems({...items, isSuccess: false, isFetching: true})
    
//     const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//     await delay(1000)
//     const res = await fetchPlaces({query: fetchedOrUpdatedQuery, filters: fetchedOrUpdatedFilters, page: page})
//     setItems({...res , isSuccess: true, isFetching: false, results:  isPageConcat ? items.results.concat(res.results) : res.results })
//   }

//   useEffect(() => {
//     callFetchPlaces({query: query, filters: filters, isPageConcat: true})
//   }, [page])

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);

//     const fetchedFilters = {
//       city: searchParams.get("city") || "",
//       rating: searchParams.get("rating") || "",
//       place_type: searchParams.get("place_type") || "",
//       amenities: searchParams.get("amenities") || "",
//       subcategories: searchParams.get("subcategories") || "",
//       sort_by: searchParams.get("sort_by") || "recommendations",
//     }
//     const fetchedQuery = searchParams.get("query") || ""
//     setQuery(fetchedQuery);
//     setFilters(fetchedFilters);

//     callFetchPlaces({fetchedOrUpdatedFilters: fetchedFilters, fetchedOrUpdatedQuery: fetchedQuery })
// }, [location.search]);

  
// useEffect(() => {
//   const searchParams = new URLSearchParams();
//   Object.keys(filters).forEach((key) => {
//     if (filters[key]) {
//       searchParams.set(key, filters[key]);
//     }
//   });

//   const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
//   window.history.replaceState(null, "", newUrl);
//   callFetchPlaces({fetchedOrUpdatedFilters: filters, fetchedOrUpdatedQuery: query })

// }, [filters]);

  
//   const handleSearch = () => {
//     callFetchPlaces({fetchedOrUpdatedFilters: filters, fetchedOrUpdatedQuery: query})
//   };

//   useEffect(() => {
//     setProgress(100);
//   }, [setProgress]);

//   return (
//     <section className="listing-wrapper">
//       <div className="listing-header">
//         <h2>
//           Discover {filters.place_type ? filters.place_type + "s" : "Hotels & Attractions"}
//         </h2>
//         <SearchBar
//           query={query}
//           setQuery={setQuery}
//           items={items}
//           handleSearch={handleSearch}
//           filters={filters}
//         />
//       </div>
//       <button className="filters secondary-btn" onClick={toggleMobileMenu}>
//         <CiFilter /> All Filters
//       </button>
//       <div className="listing-content">
//         <div className={isMobile ? "toggle-sidebar mobile" : "toggle-sidebar"}>
//           <Sidebar setQuery={setQuery} items={items} filters={filters} setFilters={setFilters} />
//         </div>
//         <HotelsAndAttractions
//           type="listing"
//           heading="Top Hotels"
//           // query={query}
//           // filters={filters}
//           setPage={setPage}
//           page={page}
//           // setItems={setItems}
//           items={items}
//         />
//       </div>
//     </section>
//   );
// };

// Listings.propTypes = {
//   choice: PropTypes.string.isRequired,
// };

// export default Listings;

import React, { useEffect, useContext, useState } from "react";
import SearchBar from "../components/SearchBar";
import HotelsAndAttractions from "../components/HotelsAndAttractions";
import "../assets/css/ListingStyles.css";
import Sidebar from "../components/SideBar";
import PropTypes from "prop-types";
import { ProgressContext } from "../contexts/ProgressContext";
import { CiFilter } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import { fetchPlaces } from "../services/customFetchAPI";
import Loader from "../components/Loader";
import NoResults from "../components/NoResults";

const Listings = ({ choice }) => {
  const setProgress = useContext(ProgressContext);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const [page, setPage] = useState(1);
  const [items, setItems] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
    isFetching: false,
    isSuccess: false,
  });

  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    rating: "",
    place_type: "",
    amenities: "",
    subcategories: "",
    sort_by: "",
  });

  // Toggle mobile sidebar
  const toggleMobileMenu = () => {
    setIsMobile((prev) => !prev);
  };

  // Fetch places with updated query/filters
  const callFetchPlaces = async ({ fetchedOrUpdatedQuery, fetchedOrUpdatedFilters, isPageConcat = false }) => {
    try {
      setItems((prev) => ({ ...prev, isFetching: true, isSuccess: false }));
      const res = await fetchPlaces({
        query: fetchedOrUpdatedQuery,
        filters: fetchedOrUpdatedFilters,
        page,
      });
      setItems((prev) => ({
        ...res,
        isSuccess: true,
        isFetching: false,
        results: isPageConcat ? prev.results.concat(res.results) : res.results,
      }));
    } catch (error) {
      console.error("Error fetching places:", error);
      setItems((prev) => ({ ...prev, isFetching: false, isSuccess: false }));
    }
  };

  // Fetch data when the page number changes
  useEffect(() => {
    callFetchPlaces({ fetchedOrUpdatedQuery: query, fetchedOrUpdatedFilters: filters, isPageConcat: true });
  }, [page]); // Only re-run when `page` changes

  // Parse URL params and set filters on mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const fetchedFilters = {
      city: searchParams.get("city") || "",
      rating: searchParams.get("rating") || "",
      place_type: searchParams.get("place_type") || "",
      amenities: searchParams.get("amenities") || "",
      subcategories: searchParams.get("subcategories") || "",
      sort_by: searchParams.get("sort_by") || "recommendations",
    };
    const fetchedQuery = searchParams.get("query") || "";
    setQuery(fetchedQuery);
    setFilters(fetchedFilters);

    callFetchPlaces({ fetchedOrUpdatedFilters: fetchedFilters, fetchedOrUpdatedQuery: fetchedQuery });
  }, [location.search]);

  // Update URL and refetch when filters change
  useEffect(() => {
    const searchParams = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        searchParams.set(key, filters[key]);
      }
    });

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, "", newUrl);

    callFetchPlaces({ fetchedOrUpdatedFilters: filters, fetchedOrUpdatedQuery: query });
  }, [filters]);

  // Handle search bar action
  const handleSearch = () => {
    callFetchPlaces({ fetchedOrUpdatedFilters: filters, fetchedOrUpdatedQuery: query });
  };

  // Set progress bar completion on load
  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return (
    <section className="listing-wrapper">
      <div className="listing-header">
        <h2>
          Discover {filters.place_type ? filters.place_type + "s" : "Hotels & Attractions"}
        </h2>
        <SearchBar
          query={query}
          setQuery={setQuery}
          items={items}
          handleSearch={handleSearch}
          filters={filters}
        />
      </div>
      <button className="filters secondary-btn" onClick={toggleMobileMenu}>
        <CiFilter /> All Filters
      </button>
      <div className="listing-content">
        <div className={isMobile ? "toggle-sidebar mobile" : "toggle-sidebar"}>
          <Sidebar setQuery={setQuery} items={items} filters={filters} setFilters={setFilters} />
        </div>
        {/* {items.results.length > 0 ? ( */}
          <HotelsAndAttractions
            type="listing"
            heading="Top Hotels"
            setPage={setPage}
            page={page}
            items={items}
          />
        {/* ) : items.isFetching ? ( */}
          {/* <Loader /> */}
        {/* ) : ( */}
          {/* <NoResults message="No results found for your search criteria." /> */}
        {/* )} */}
      </div>
    </section>
  );
};

Listings.propTypes = {
  choice: PropTypes.string.isRequired,
};

export default Listings;
