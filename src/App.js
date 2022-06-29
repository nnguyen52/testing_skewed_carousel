import { LayoutGroup, motion, MotionConfig } from "framer-motion";
import "./App.css";
import GeneralModal from "./GeneralModal";
import { useState } from "react";
import FromSoftwareLogo from "./FromSoftwareLogo";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [chosenGame, setChosenGame] = useState(null);
  const data = [
    {
      background:
        "https://res.cloudinary.com/cloudinarystore/image/upload/v1656528536/My_Resume/skw1_rovlco.jpg",
      title: "Dark Souls remastered",
    },
    {
      background:
        "https://res.cloudinary.com/cloudinarystore/image/upload/v1656528536/My_Resume/skw2_kby80k.jpg",
      title: "Dark Souls 3",
    },
    {
      background:
        "https://res.cloudinary.com/cloudinarystore/image/upload/v1656528615/My_Resume/skw7_rk3u5j.png",
      title: "Elden Ring",
    },
    {
      background:
        "https://res.cloudinary.com/cloudinarystore/image/upload/v1656528535/My_Resume/skw3_rzibem.jpg",
      poster:
        "https://res.cloudinary.com/cloudinarystore/image/upload/v1656528535/My_Resume/skw3_rzibem.jpg",
      title: "Sekiro",
    },
    {
      background:
        "https://res.cloudinary.com/cloudinarystore/image/upload/v1656528535/My_Resume/sk4_obq4fx.jpg",
      title: "Bloodborne",
    },
    {
      background:
        "https://res.cloudinary.com/cloudinarystore/image/upload/v1656528539/My_Resume/skw55_j5iwca.jpg",
      title: "Demon's Souls",
      titleImg:
        "https://res.cloudinary.com/cloudinarystore/image/upload/v1656528536/My_Resume/skw66_yqnkxb.png",
    },
  ];

  const textMotion = {
    rest: {
      opacity: 0,
      ease: "easeOut",
      y: "50px",
      duration: 0.5,
    },
    hover: {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
  };
  return (
    <>
      <FromSoftwareLogo />
      {openModal && (
        <GeneralModal chosenGame={chosenGame} setOpenModal={setOpenModal} />
      )}
      <MotionConfig
        transition={{
          duration: 0.6,
          when: "beforeChildren",
          staggerChildren: 0.5,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100vh",
            maxHeight: "100vh",
            overflowX: "hidden",
            background: "black",
          }}
        >
          <LayoutGroup>
            {data.map((each, index) => {
              return (
                <motion.div
                  onClick={() => {
                    setOpenModal((prev) => !prev);
                    setChosenGame(data[index]);
                  }}
                  key={each.title}
                  className="image_wrapper"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    transform: "skewX(-10deg)",
                    minWidth: "100vw" / data.length,
                    width: "100%",
                    zIndex: index,
                  }}
                  layout
                  layoutId="carousel_item"
                  transition={{ when: "beforeChildren" }}
                  whileHover={{
                    width: "220%",
                  }}
                  initial={{
                    opacity: 0,
                    transform: "skewX(-10deg)",
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <motion.div
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    overflow="hidden"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "-33%",
                      width: "165%",
                      height: "100%",
                      transform: "skewX(10deg)",
                      backgroundImage:
                        each.title === "Sekiro"
                          ? `url(${each.poster})`
                          : `url(${each.background})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      overflow: "hidden",
                    }}
                  >
                    <motion.span
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        width: "100%",
                        height: "auto",
                        transform: "translate(0, 50%)",
                        zIndex: 1000,
                        textAlign: "center",
                        fontSize: "2em",
                        color: "white",
                        backgroundColor: "black",
                      }}
                      variants={textMotion}
                    >
                      {each.title}
                      {/* {each.titleImg ? (
                        <motion.img
                          src={each.titleImg}
                          alt=""
                          style={{
                            width: '100%',
                            maxWidth: `${'100vw' / data.length}%`,
                            objectFit: 'cover',
                            position: 'center',
                            alignItems: 'center',
                            transform: 'skewX(10deg)',
                          }}
                        />
                      ) : null} */}
                    </motion.span>
                  </motion.div>
                </motion.div>
              );
            })}
          </LayoutGroup>
        </div>
      </MotionConfig>
    </>
  );
}

export default App;
