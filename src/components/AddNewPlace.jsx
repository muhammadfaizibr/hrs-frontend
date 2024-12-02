import React, { useState, useEffect } from "react";
import "../assets/css/FormStyles.css";
import { getToken, removeToken } from "../services/localStorageService";
import { useGetLoggedUserQuery } from "../services/userAuthAPI";
import { setUserInfo, unSetUserToken } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import verifyToken from "../features/verifyToken";
import { useDispatch } from "react-redux";

const place_type = [
  { name: "Hotels", type: "hotels" },
  { name: "Attractions", type: "attractions" },
];

const AddNewPlace = () => {
  const [placeType, setPlaceType] = useState(place_type[0].name);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { access_token } = getToken();
  const { data: userProData, isSuccess: userProDataIsSuccess } = useGetLoggedUserQuery(access_token);

  const [server_error, setServerError] = useState({});
  const [server_msg, setServerMsg] = useState(false);
  const [generalError, setGeneralError] = useState();

  useEffect(() => {
    if (userProData && userProDataIsSuccess) {
      dispatch(
        setUserInfo({
          id: userProData.id,
          email: userProData.email,
          username: userProData.name,
        })
      );
    }
    const callVerifyToken = async () => {
    if (!(await verifyToken())){
      navigate("/login");
      dispatch(unSetUserToken({ access_token: null }));
      dispatch(unSetUserToken({ access_token: null }));
      dispatch(setUserInfo({ username: "", email: "" }));
    }}
    callVerifyToken()
  }, [dispatch, navigate, userProData, userProDataIsSuccess]);

  const [isLoading, setIsLoading] = useState(false);
  const [hotelImage, setHotelImage] = useState("");

  const handleImage = (e) => {
    setHotelImage(e.target.files[0]);
  }

  const handleAddNewPlace = async (e) => {
    setIsLoading(true);
    try {
      setGeneralError("");
      e.preventDefault();
      const { access_token } = getToken();

      const data = new FormData(e.currentTarget);
      data.append("place_name", data.get("place-name"));
      data.append("place_location", data.get("place-location"));

      if (hotelImage?.uri) {
        const fileName = hotelImage.uri.split("/").pop();

        const fileType = fileName.split(".").pop();

        data.append("place-image", {
          uri: hotelImage.uri,
          username: `${fileName}.${fileType}`,
          type: "image/jpeg",
        });
      }

      data.append("user", userProData.id);
      const re = await fetch("http://127.0.0.1:8000/api/companies/", {
        body: data,
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + access_token,
        },
      });
      if (re.status === 401) {
        removeToken();
        dispatch(unSetUserToken({ access_token: null }));
        dispatch(setUserInfo({ username: "", email: "" }));

        navigate("/login");
        setIsLoading(false);
      } else {
        const res = await re.json();

        if (res.errors) {
          setServerMsg(false);
          setServerError(res.errors);
          setIsLoading(false);
        } else if (!res.errors) {
          setServerError({});
          setServerMsg(true);
          setIsLoading(false);

          setTimeout(() => {
            navigate( 
              "/companies/company-details/" +
                res.company_id +
                "/" +
                res.company_name.replace(/ /g, "-")
            );
          }, 700);
        }
      }
    } catch (error) {
      setGeneralError("An error occured, try again later!");
      setServerError({});
      setServerMsg(false);
      setIsLoading(false);
    }
  };

  const handlePlaceTypeChange = (event) => {
    setPlaceType(event.target.value);
  };
  
  return (
    <div className="form-container">
      <div className="form-box">
        <h3>Add New Place</h3>
        <form onSubmit={handleAddNewPlace}>
          <div className="form-group">
            <label htmlFor="place-name">Place Name</label>
            <input
              type="text"
              id="place-name"
              name="place-name"
              placeholder="What's the place name?"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="place-location">Location</label>
            <input
              type="text"
              id="place-location"
              name="place-location"
              placeholder="Where it is?"
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="place-location">Type</label>
            <select value={placeType} onChange={handlePlaceTypeChange}>
              {place_type.map((e, i) => {
                return <option key={e.name + i}>{e.name}</option>;
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="place-location">Contact</label>
            <input
              type="text"
              id="place-contact"
              name="place-contact"
              placeholder="Email or Phone"
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="place-location">Picutres</label>
            <input type="file" accept='image/*' name="place-image" onChange={handleImage} />
          </div>
          <button type="submit" className="form-button">
            Add Place
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPlace;
