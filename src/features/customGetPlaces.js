// const customGetPlaces = async (data) => {
//     console.log(data, 'data exe')
//     let url = 'http://127.0.0.1:8000/api/';
//     if (data.filters?.sort_by === "recommendations"){
//         url = url+`recommendations?query=${data.query ?encodeURIComponent(data.query) : ''}&city=${data.filters?.city ? data.filters?.city.toLocaleLowerCase() : ''}&place_type=${data.filters?.place_type ? data.filters?.place_type : ''}&subcategories=${data.filters?.subcategories ? data.filters?.subcategories : ''}&amenities=${data.filters?.amenities ? data.filters?.amenities : ''}`
//     }

//     else{
//         url = url+`place-list-create?query=${data.query ?encodeURIComponent(data.query) : ''}&page=${data.page ? data.page : ''}&min_rating=${data.filters?.sort_by === "rating" ? '4' : ''}&city=${data.filters?.city ? data.filters?.city.toLocaleLowerCase() : ''}&place_type=${data.filters?.place_type ? data.filters?.place_type : ''}&subcategories=${data.filters?.subcategories ? data.filters?.subcategories : ''}&number_of_reviews=${data.filters?.noOfReviews ? data.filters?.noOfReviews : ''}&combined_amenities=${data.filters?.amenities ? data.filters?.amenities : ''}`
//     }

//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.statusText}`);
//         }

//         const result = await response.json();
//         return result;
//     } catch (error) {
//         console.error("Fetch error:", error.message);
//         return { error: error.message };
//     }
// };

// export default customGetPlaces;