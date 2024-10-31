import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./loader";
import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage]  = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const fetchNews = async (pageNumber) => {
    try {
      props.setLoaderBarState(10);
      const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${pageNumber}`;
      let response = await fetch(url);
      props.setLoaderBarState(30);

      let data = await response.json();
      props.setLoaderBarState(70);
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setPage(pageNumber);
      setLoading(false);
      props.setLoaderBarState(100);
    } catch {
      setArticles([]);
      setTotalResults(0);
      setPage(pageNumber);
      setLoading(false);
    }
  }
  useEffect(() => {
    setLoading(true);
    fetchNews(props.page); 
    document.title = `News Monkey - ${capitalizeCategory(props.category)}`;
  },[]);

  const capitalizeCategory = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const fetchMoreData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?category=${
        props.category
      }&country=${
        props.country
      }&apiKey=${props.apiKey}&pageSize=${
        props.pageSize
      }&page=${page + 1}`;
      let response = await fetch(url);
      let data = await response.json();
      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);
      setPage(page + 1);
      
    } catch {
      setArticles([]);
      setTotalResults(0);
    }
  };
    return (
      <>
        <h2
          className="text-center"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          News Monkey - Top{" "}
          <strong>{capitalizeCategory(props.category)}</strong> News
        </h2>
        {loading && (
          <div className="text-center">
            <Loader />
          </div>
        )}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={
            <div className="text-center">
              <Loader />
            </div>
          }
          scrollableTarget="scrollableDiv"
        >
          {articles.length > 0 && (
            <div className="container">
              <div className="row">
                {articles.map((element, index) => {
                  return (
                    <div className="col-md-3 my-3" key={index}>
                      <NewsItem
                        mode={props.mode}
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={element.urlToImage}
                        url={element.url}
                        author={element.author ? element.author : "Unknown"}
                        modifiedDate={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </InfiniteScroll>
        
      </>
    );
  }
