import ArtGallery from "./ArtGallery";
import { useParams, useNavigate } from "react-router-dom";
import "./CSS/Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Profile = (prop) => {
  const { id } = useParams();
  const data = prop.data.data;
  const artists = data.Tbl_Artist;
  const gallery = data.Tbl_Gallery;
  const navigate = useNavigate();

  // Filter the artId
  const filteredArtId = gallery
    .filter((item) => item.ArtId === parseInt(id))
    .map((artist) => artist.ArtistId);

  const ArtistId = filteredArtId[0];

  // Filter for profile
  const filteredArtist = artists
    .filter((item) => item.ArtistId === ArtistId)
    .map((artist) => artist);

  const backClick = () => {
    // Use the navigate function to programmatically navigate to the profile page
    navigate("/");
  };

  return (
    <div className="profile-container">
      {filteredArtist.map((artist) => (
        <div key={artist.ArtistId}>
          <img
            className="profile-logo"
            src={`/art-gallery/profile/${artist.ArtistId}.jpg`}
            alt=""
          />
          <h2>{artist.ArtistName}</h2>
          {artist.Social.map((social, i) => (
            <div className="profile-social" key={i}>
              {social.Link && (
                <>
                  <button className="profile-button">
                    <a
                      href={social.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.Name === "facebook" ? (
                        <FontAwesomeIcon icon={faFacebookF} />
                      ) : (
                        <FontAwesomeIcon icon={faInstagram} />
                      )}
                    </a>
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
      <br />
      <button className="back-button" onClick={() => backClick()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <ArtGallery data={{ data, ArtistId }} />
    </div>
  );
};
export default Profile;
