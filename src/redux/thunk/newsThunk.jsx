import { setNewsList } from "../actions/newsActions";
// import { setLoading, clearLoading } from "../actions/appActions";
import axios from "axios";

const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-08-24&" +
  "sortBy=popularity&" +
  "apiKey=3f5264fe804240f0841fc3db0a2f76d2";

//! getNews fonksiyonu başka bir fonksiyonu döndürüyor. Bu durumda çağırırken dispatch(getNews()) şeklinde kullanmak gerekir.
export const getNews = () => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading());
      const { data } = await axios.get(url);
      dispatch(setNewsList(data.articles));
      console.log(data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch(clearLoading());
    }
  };
};

// export const getNews = async (dispatch, getState) => {
//   try {
//     // dispatch(setLoading());
//     const { data } = await axios.get(url);
//     const newsState = getState();
//     console.log(newsState);
//     dispatch(setNewsList(data.articles));
//   } catch (error) {
//     console.log(error);
//   }
//   // finally {
//   // dispatch(clearLoading());
//   // }
// };
