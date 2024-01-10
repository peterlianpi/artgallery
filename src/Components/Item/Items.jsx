import "./Item.css";
import { useNavigate } from "react-router-dom";

const Items = (prop) => {
  const navigate = useNavigate();
  const art = prop.data;
  const onClickHandler = (ArtId) => {
    navigate(`/profile/${ArtId}`);
  };

  return (
    <div className="items-container">
      {art.map((item) => {
        return (
          <div
            onClick={() => {
              onClickHandler(item.ArtId);
            }}
            className="items"
            key={item.ArtId}
          >
            <h2>{item.ArtName}</h2>
            <img
              onClick={() => {
                onClickHandler(item.ArtId);
              }}
              src={`/art-gallery/${item.ArtId}.jpg`}
              alt=""
            />
            <p>{item.ArtDescription} </p>
          </div>
        );
      })}
    </div>
  );
};
export default Items;
