export default function NewsItem(props){
  
    let { title, description, imageUrl, url, author, modifiedDate, source } =
      props;
    return (
      <div
        className="card"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "black",
          borderColor: props.mode === "light" ? "black" : "white",
        }}
      >
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://scitechdaily.com/images/Asian-Tiger-Mosquito-Aedes-albopictus.jpg"
          }
          style={{ height: "200px" }}
          className="card-img-top"
          alt="..."
        />
        <span className="position-absolute top-0 start-100 badge rounded-pill bg-danger" style = {{transform: "translate(-100%, -50%)"}}>
          {source}
        </span>
        <div className="card-body">
          <h5
            className="card-title"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            {title.length > 24 ? title.slice(0, 24) + "..." : title.length}
          </h5>
          <p
            className="card-text"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            {description.length > 64
              ? description.slice(0, 64) + "..."
              : description}
          </p>
          <p className="card-text">
            <small
              style={{ color: props.mode === "light" ? "grey" : "grey" }}
            >
              Last updated by {author} at {new Date(modifiedDate).toUTCString()}
            </small>
          </p>
          <a
            href={url}
            target="_blank" rel="noreferrer"
            className={`btn btn-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
