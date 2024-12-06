import React, { useEffect, useContext, useState } from 'react'
import Hero from '../components/Hero'
import FeaturedCities from '../components/FeaturedCities'
import HotelsAndAttractions from '../components/HotelsAndAttractions'
import { ProgressContext } from '../contexts/ProgressContext'
import '../assets/css/HomeStyles.css'
import { useGetLoggedUserQuery } from "../services/userAuthAPI";
import { getToken } from '../services/localStorageService'
import { setUserInfo, unSetUserToken } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPlaces } from '../services/customFetchAPI'

const products = [
  {name: 'Four Points by Sheraton Lahore', url: 'https://ak-d.tripcdn.com/images/0586z12000ev98nor2228_R_300_225_R5.jpg', link: '/details'},
  {name: 'Pearl Continental Hotel, Lahore', url: 'https://ak-d.tripcdn.com/images/220b13000000tsy6o384D_R_300_225_R5.jpg', link: '/details'},
  {name: 'Avari Xpress Gulberg', url: 'https://ak-d.tripcdn.com/images/0583612000chpr1t3EBD2_R_300_225_R5.jpg', link: '/details'},
  {name: 'Four Points by Sheraton Lahore', url: 'https://ak-d.tripcdn.com/images/0586z12000ev98nor2228_R_300_225_R5.jpg', link: '/details'},
  {name: 'Pearl Continental Hotel, Lahore', url: 'https://ak-d.tripcdn.com/images/220b13000000tsy6o384D_R_300_225_R5.jpg', link: '/details'},
  {name: 'Avari Xpress Gulberg', url: 'https://ak-d.tripcdn.com/images/0583612000chpr1t3EBD2_R_300_225_R5.jpg', link: '/details'},
  {name: 'Four Points by Sheraton Lahore', url: 'https://ak-d.tripcdn.com/images/0586z12000ev98nor2228_R_300_225_R5.jpg', link: '/details'},
  {name: 'Pearl Continental Hotel, Lahore', url: 'https://ak-d.tripcdn.com/images/220b13000000tsy6o384D_R_300_225_R5.jpg', link: '/details'},
  {name: 'Avari Xpress Gulberg', url: 'https://ak-d.tripcdn.com/images/0583612000chpr1t3EBD2_R_300_225_R5.jpg', link: '/details'},
]

const Home = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
    isFetching: false,
    isSuccess: false,
  });
  const { access_token } = getToken()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const setProgress = useContext(ProgressContext);
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);
  // items, setPage, type, heading, subHeading 
  useEffect(() => {
   setProgress(100); 
  }, [setProgress]);
  const query = "";
  const [filters, setFilters] = useState({
    user: data?.user,
    sort_by: "collabrative-filtering",
  });
  const callFetchPlaces = async ({
    fetchedOrUpdatedQuery,
    fetchedOrUpdatedFilters,
    isPageConcat,
  }) => {
    setItems({ ...items, isSuccess: false, isFetching: true });

    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const res = await fetchPlaces({
      query: fetchedOrUpdatedQuery,
      filters: fetchedOrUpdatedFilters,
    });
    setItems({
      ...res,
      isSuccess: true,
      isFetching: false,
      results: isPageConcat ? items.results.concat(res.results) : res.results,
    });
  };



  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setUserInfo({
          id: data.id,
          email: data.email,
          username: data.name,
        })
      );
      callFetchPlaces({ fetchedOrUpdatedQuery: query, fetchedOrUpdatedFilters: {...filters, user: data.id} });

    }
  }, [dispatch, navigate, data, isSuccess]);

  
  return (
    <React.Fragment>
      <Hero/>
      <section className='home-content-wrapper'>

        <FeaturedCities />
          
          {data?.id ? <HotelsAndAttractions type="featured" heading="Relevant For You" items={items}  page={page} setPage={setPage} /> : ''}
      </section>


    </React.Fragment>
  )
}

export default Home;