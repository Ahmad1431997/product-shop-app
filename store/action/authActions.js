import { SET_USER } from "./types";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CART_LIST } from "../../components/Navigation/types";

// export const signup = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signup", userData);
//       dispatch({
//         type: SET_USER,
//         payload: decode(res.data.token),
//       });
//       history.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const signup = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      dispatch(setUser(res.data.token));
      navigation.navigate(CART_LIST);
    } catch (error) {
      console.log(error.message);
    }
  };
};

// export const signin = (userData, history) => {
//   return async (dispatch) => {
//     try {
//       const res = await instance.post("/signin", userData);
//       dispatch({
//         type: SET_USER,
//         payload: decode(res.data.token),
//       });
//       history.push("/");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
      navigation.goBack();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const signOut = (history) => {
    history.push("/");
  return setUser();
};



const setUser = (token) =>async (dispatch)=> {
  if (token) {
    await AsyncStorage.setItem("myToken", token);
    console.log(token)
    instance.defaults.headers.common.Authorization=`Bearer ${token}`;
    return dispatch( {
      type: SET_USER,
      payload: decode(token),
    });
  } else {
   await AsyncStorage.removeItem("myToken");
   delete instance.defaults.headers.common.Authorization;
    return dispatch({
      type: SET_USER,
      payload: null,
    });
  }
};

export const checkForToken = () =>async (dispatch)=> {
   const token = await AsyncStorage.getItem("myToken");
  
    if (token) {
      //check if token expiered or not when the user refresh the page
      const currentTime = Date.now();
      const user = decode(token);
  
      if (user.exp > currentTime) {
        return dispatch(setUser(token));
      } 
        
      
    }
    dispatch(setUser());
  };