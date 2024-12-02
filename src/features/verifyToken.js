import { getToken, removeToken } from "../services/localStorageService";

const verifyToken = async () => {
//   try {
    const url_is_valid_token = "http://127.0.0.1:8000/api/token/verify/";
    const { access_token } = getToken();
    const verify_is_valid_token = await fetch(url_is_valid_token, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: access_token }),
    });
    console.log(verify_is_valid_token.status);
    if (verify_is_valid_token.status === 200) {
        console.log('abc')
        return true;
    } else {
        console.log('efg')

        removeToken();
        return false;
    }
//   } catch (error) {
    // console.log(error);
    // return false;
//   }
};

export default verifyToken;
