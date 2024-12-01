import React, { useState } from "react";
import "../assets/css/FormStyles.css";
import { Link } from "react-router-dom";


const place_type = [
  {name: 'Hotels', 'type': 'hotels'},
  {name: 'Attractions', 'type': 'attractions'},
]

const AddNewPlace = () => {
  const [placeType, setPlaceType] = useState(place_type[0].name)
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };
  const handlePlaceTypeChange = (event) => {
    setPlaceType(event.target.value);
  };
  return (
    <div className="form-container">
      <div className="form-box">
        <h3>Add New Place</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="place-name">Place Name</label>
            <input
              type="text"
              id="place-name"
              name="place-name"
              placeholder="What's the place name?"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="place-location">Location</label>
            <input
              type="text"
              id="place-location"
              name="place-location"
              placeholder="Where it is?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="place-location">Type</label>
            <select value={placeType}  onChange={handlePlaceTypeChange}>
              {place_type.map((e, i) => {
                return <option  key={e.name+i}>{e.name}</option>})}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="place-location">Contact</label>
            <input
              type="text"
              id="place-contact"
              name="place-contact"
              placeholder="Email or Phone"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="place-location">Picutres</label>
            <input
              type="file"
              id="place-pictures"
              name="place-pictures"
              required
            />
          </div>
          <button type="submit" className="form-button" >
            Add Place
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPlace;
