import "./Item.css";

const Item = (prop) => {
  const art = prop.data;

  return (
    <div className="item-container">
      {art.map((item, i) => {
        return (
          <div className="item" key={i}>
            <img
              className="item-image"
              src={`/art-gallery/${item.ArtId}.jpg`}
              alt=""
            />
            <div className="item-text">
              <h2>{item.ArtName}</h2>
              <p>{item.ArtDescription} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Item;
