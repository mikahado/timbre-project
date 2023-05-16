import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";

const UserMediaCard = ({ media }) => {

  const { media_1, media_2, media_3, media_4 } = media;

  const [myMedia, setMyMedia] = useState({
    media_1: media_1 || "",
    media_2: media_2 || "",
    media_3: media_3 || "",
    media_4: media_4 || "",
  });

  const [toggleMedia, setToggleMedia] = useState(false);

  const { updateMyProfile } = useContext(UserContext);

  const handleEditMediaClick = (mediaType) => {
    setToggleMedia(mediaType);
  };

  const handleMediaUpdateClick = (mediaType) => {
    updateMyProfile({ [mediaType]: myMedia[mediaType] });
    setToggleMedia(!toggleMedia);
  }

  const handleMediaInputChange = (mediaType, value) => {
    setMyMedia({ ...myMedia, [mediaType]: value });
  };

  return (
    <div className="grid">
      <article>
        <section className="card-list">

          {/* MEDIA 1 */}

          <article className="card-article">
            {media_1 ? (
              <img
                src={media_1}
                alt="media"
                onClick={() => handleEditMediaClick("media_1")}
              ></img>
            ) : (
              <img
                src={require("../src/img/placeholder_plus4.png")}
                alt="Add your media."
                className="placeholder"
                onClick={() => handleEditMediaClick("media_1")}
              />
            )}

            {toggleMedia === "media_1" ? (
              <>
                <input
                  type="text"
                  name="media_1"
                  placeholder="insert url"
                  value={myMedia.media_1}
                  onChange={(e) => handleMediaInputChange("media_1", e.target.value)}
                />
                <button type="button" onClick={() => handleMediaUpdateClick("media_1")}>
                  save
                </button>
              </>
            ) : null}

          </article>

          {/* MEDIA 2 */}

          <article className="card-article">
            {media_2 ? (
              <img
                src={media_2}
                alt="media"
                onClick={() => handleEditMediaClick("media_2")}
              ></img>
            ) : (
              <img
                src={require("../src/img/placeholder_plus4.png")}
                alt="Add your media."
                className="placeholder"
                onClick={() => handleEditMediaClick("media_2")}
              />
            )}

            {toggleMedia === "media_2" ? (
              <>
                <input
                  type="text"
                  name="media_2"
                  placeholder="insert url"
                  value={myMedia.media_2}
                  onChange={(e) => handleMediaInputChange("media_2", e.target.value)}
                />
                <button type="button" onClick={() => handleMediaUpdateClick("media_2")}>
                  save
                </button>
              </>
            ) : null}

          </article>

          {/* MEDIA 3 */}

          <article className="card-article">
            {media_3 ? (
              <img
                src={media_3}
                alt="media"
                onClick={() => handleEditMediaClick("media_3")}
              ></img>
            ) : (
              <img
                src={require("../src/img/placeholder_plus4.png")}
                alt="Add your media."
                className="placeholder"
                onClick={() => handleEditMediaClick("media_3")}
                />
            )}
                    {toggleMedia === "media_3" ? (
          <>
            <input
              type="text"
              name="media_3"
              placeholder="insert url"
              value={myMedia.media_3}
              onChange={(e) => handleMediaInputChange("media_3", e.target.value)}
            />
            <button type="button" onClick={() => handleMediaUpdateClick("media_3")}>
              save
            </button>
          </>
        ) : null}

      </article>

      {/* MEDIA 4 */}

      <article className="card-article">
        {media_4 ? (
          <img
            src={media_4}
            alt="media"
            onClick={() => handleEditMediaClick("media_4")}
          ></img>
        ) : (
          <img
            src={require("../src/img/placeholder_plus4.png")}
            alt="Add your media."
            className="placeholder"
            onClick={() => handleEditMediaClick("media_4")}
          />
        )}

        {toggleMedia === "media_4" ? (
          <>
            <input
              type="text"
              name="media_4"
              placeholder="insert url"
              value={myMedia.media_4}
              onChange={(e) => handleMediaInputChange("media_4", e.target.value)}
            />
            <button type="button" onClick={() => handleMediaUpdateClick("media_4")}>
              save
            </button>
          </>
        ) : null}

      </article>
    </section>
  </article>
</div>
);
};

export default UserMediaCard;
