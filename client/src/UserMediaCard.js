import React, { useState } from "react";

const UserMediaCard = ({ media }) => {
  const [myMedia, setMyMedia] = useState({
    media_1: "",
    media_2: "",
    media_3: "",
    media_4: "",
  });

  const [toggleMedia, setToggleMedia] = useState(false);

  const [toggle, setToggle] = useState(false);

  const { media_1, media_2, media_3, media_4 } = media;

  const handleEditMediaClick = () => {
    setToggleMedia(!toggleMedia);
  };

  return (
    <div class="grid">
      <article>
        <section className="card-list">
          <article className="card-article">
            {media_1 ? (
              <img
                src={media_1}
                alt="media"
                onClick={handleEditMediaClick}
              ></img>
            ) : (
              <img
                src={require("../src/img/placeholder_plus4.png")}
                alt="Add your media."
                className="placeholder"
                onClick={handleEditMediaClick}
              />
            )}

            {toggleMedia ? (
              <input
                type="text"
                name="media_1"
                value={myMedia.media_1}
                onChange={(e) =>
                  setMyMedia({ ...myMedia, media_1: e.target.value })
                }
              />
            ) : null}
          </article>

          <article className="card-article">
            {media_2 ? (
              <img
                src={media_2}
                alt="media"
                onClick={handleEditMediaClick}
              ></img>
            ) : (
              <img
                src={require("../src/img/placeholder_plus4.png")}
                alt="Add your media."
                className="placeholder"
                onClick={handleEditMediaClick}
              />
            )}

            {toggleMedia ? (
              <input
                type="text"
                name="media_2"
                value={myMedia.media_2}
                onChange={(e) =>
                  setMyMedia({ ...myMedia, media_2: e.target.value })
                }
              />
            ) : null}
          </article>

          <article className="card-article">
            {media_3 ? (
              <img
                src={media_3}
                alt="media"
                onClick={handleEditMediaClick}
              ></img>
            ) : (
              <img
                src={require("../src/img/placeholder_plus4.png")}
                alt="Add your media."
                className="placeholder"
                onClick={handleEditMediaClick}
              />
            )}
            {toggleMedia ? (
              <input
                type="text"
                name="media_3"
                value={myMedia.media_3}
                onChange={(e) =>
                  setMyMedia({ ...myMedia, media_3: e.target.value })
                }
              />
            ) : null}
          </article>

          <article className="card-article">
            {media_4 ? (
              <img
                src={media_4}
                alt="media"
                onClick={handleEditMediaClick}
              ></img>
            ) : (
              <img
                src={require("../src/img/placeholder_plus4.png")}
                alt="Add your media."
                className="placeholder"
                onClick={handleEditMediaClick}
              />
            )}

            {toggleMedia ? (
              <input
                type="text"
                name="media_4"
                value={myMedia.media_4}
                onChange={(e) =>
                  setMyMedia({ ...myMedia, media_4: e.target.value })
                }
              />
            ) : null}

            {/* </header> */}
          </article>
        </section>
      </article>
    </div>
  );
};

export default UserMediaCard;
