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

const Listings = () => {
  const setProgress = useContext(ProgressContext);
  const [isMobile, setIsMobile] = useState(false);
  const [firstMounted, setFirstMounted] = useState(true);
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

  const toggleMobileMenu = () => {
    setIsMobile((prev) => !prev);
  };

  const callFetchPlaces = async ({
    fetchedOrUpdatedQuery,
    fetchedOrUpdatedFilters,
    isPageConcat = false,
  }) => {
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
    setFirstMounted(false);
  };

  useEffect(() => {
    callFetchPlaces({
      fetchedOrUpdatedQuery: query,
      fetchedOrUpdatedFilters: filters,
      isPageConcat: true,
    });
  }, [page]);

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
    callFetchPlaces({
      fetchedOrUpdatedFilters: fetchedFilters,
      fetchedOrUpdatedQuery: fetchedQuery,
    });
  }, []);

  useEffect(() => {
    if (firstMounted) {
      return;
    } else {
      const searchParams = new URLSearchParams();
      searchParams.set("query", query);
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          searchParams.set(key, filters[key]);

        }
      });


      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.replaceState(null, "", newUrl);

      callFetchPlaces({
        fetchedOrUpdatedFilters: filters,
        fetchedOrUpdatedQuery: query,
      });
    }
  }, [filters]);

  const handleSearch = () => {
    callFetchPlaces({
      fetchedOrUpdatedFilters: filters,
      fetchedOrUpdatedQuery: query,
    });
  };

  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return (
    <section className="listing-wrapper">
      <div className="listing-header">
        <h2>Favourites</h2>
      </div>
      <div className="listing-content">
        
        {items?.results?.length > 0 ? (
          <HotelsAndAttractions
            type="listing"
            heading=""
            setPage={setPage}
            page={page}
            items={items}

          />
        ) : items?.isFetching ? (
          <Loader />
        ) : (
          <NoResults message="You have no Favourites." />
        )}
      </div>
    </section>
  );
};

Listings.propTypes = {
  choice: PropTypes.string.isRequired,
};

export default Listings;
