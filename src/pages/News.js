import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/thunk/newsThunk";
import { useEffect } from "react";
import loadingGif from "../assets/loading.gif";

const News = () => {
  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => state.news);
  const { loading } = useSelector((state) => state.appLoading);

  // const url =
  //   "https://newsapi.org/v2/everything?" +
  //   "q=Apple&" +
  //   "from=2022-08-24&" +
  //   "sortBy=popularity&" +
  //   "apiKey=3f5264fe804240f0841fc3db0a2f76d2";

  // const getNews = async () => {
  //   try {
  //     const { data } = await axios.get(url);
  //     console.log(data.articles);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      )}
      {!loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {newsList.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={
                  item?.urlToImage ||
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
                }
                alt="img"
                // "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title ?? "Tesla disables gaming while driving feature"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.content ??
                    "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" href={item?.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};
export default News;
