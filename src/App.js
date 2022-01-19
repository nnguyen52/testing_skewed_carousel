import { LayoutGroup, motion, MotionConfig } from 'framer-motion';
import './App.css';
import GeneralModal from './GeneralModal';
import { useState } from 'react';
import FromSoftwareLogo from './FromSoftwareLogo';
import HeaderMobile from './components/HeaderMobile';
import { useEffect } from 'react/cjs/react.production.min';
import HeaderDesktop from './components/HeaderDesktop';
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [chosenGame, setChosenGame] = useState(null);
  
  const data = [
    {
      background:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.staticflickr.com%2F5%2F4627%2F25753561898_c5133687e2_o.jpg&f=1&nofb=1',
      title: 'Dark Souls remastered',
      content: 'An action RPG and spiritual sequel to Demon\'s Souls (2009) in which the player embodies the Chosen Undead, who is tasked with fulfilling an ancient prophecy by ringing the Bells of Awakening in the dark fantasy setting of Lordran, an open world with intricate areas full of beasts, former humans gone hollow, and magical abominations whom the player must overcome in challenging and unforgiving combat.'
    },
    {
      background: 'http://getwallpapers.com/wallpaper/full/0/3/1/538037.jpg',
      title: 'Dark Souls 3',
      content : 'As fires fade and the world falls into ruin, developer FROMSOFTWARE and director Hidetaka Miyazaki continue their critically-acclaimed and genre-defining series with Dark Souls III. Fans and newcomers alike will get lost in the games hallmark rewarding gameplay and immersive graphics. Now only embers remain…'
    },
    {
      background:
        'https://preview.redd.it/smrxt8ruho671.jpg?width=960&crop=smart&auto=webp&s=a95824d7c4fcb3fb1f75488cbf6ba676f02223a8',
      title: 'Elden Ring',
      content : 'Elden Ring is an action-RPG open world game with RPG elements such as stats, weapons and spells.'
    },
    {
      background: 'https://images5.alphacoders.com/100/1004016.jpg',
      poster:
        'https://cdn.shopify.com/s/files/1/0082/7192/1218/articles/sekiro_2000x.jpg?v=1559160906',
      title: 'Sekiro',
      content : 'Carve your own clever path to vengeance in an all-new adventure from developer FromSoftware. Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation. Take Revenge. Restore your honor. Kill Ingeniously'
    },
    {
      background:
        'https://images.pushsquare.com/0edd45176a68b/bloodborne-remaster-ps5-pc.original.jpg',
      title: 'Bloodborne',
      content : 'An action RPG in which the player embodies a Hunter who, after being transfused with the mysterious blood local to the city of Yharnam, sets off into a "night of the Hunt", an extended night in which Hunters may phase in and out of dream and reality in order to thin the outbreak of abominable beasts that plague the land and, for the more resilient and insightful Hunters, uncover the answers to the Hunt\'s many mysteries'
    },
    {
      content:"A full remake of Demon's Souls (2009) featuring improved graphics and animations, sound and lighting tweaks and a reimagining of many of the visual, musical and mechanical aspects of the original game.",
      background:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fdemons-souls-remake-2020_bGlqbm2UmZqaraWkpJRobWllrWdma2U.jpg&f=1&nofb=1',
      title: "Demon's Souls",
      titleImg:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.launchbox-app.com%2F9218f8d4-1d84-48e7-9d00-b6de30f89035.png&f=1&nofb=1',
    },
  ];

  const textMotion = {
    rest: {
      opacity: 0,
      ease: 'easeOut',
      y: '50px',
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
    <HeaderMobile />
    <HeaderDesktop/>
      {openModal && <GeneralModal chosenGame={chosenGame} setOpenModal={setOpenModal} />}
      <MotionConfig  transition={{ duration: 0.6, when: 'beforeChildren', staggerChildren: 0.5 }}>
        <div
          style={{
            display: 'flex',
            height: '100vh',
            maxHeight: '100vh',
            overflowX: 'hidden',
            background: 'black',
          }}
          className='desktop_carousel'
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
                    position: 'relative',
                    overflow: 'hidden',
                    transform: 'skewX(-10deg)',
                    minWidth: '100vw' / data.length,
                    width: '100%',
                    zIndex: index,
                  }}
                  layout
                  layoutId="carousel_item"
                  transition={{ when: 'beforeChildren' }}
                  whileHover={{
                    width: '220%',
                  }}
                  initial={{
                    opacity: 0,
                    transform: 'skewX(-10deg)',
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
                      position: 'absolute',
                      top: 0,
                      left: '-33%',
                      width: '165%',
                      height: '100%',
                      transform: 'skewX(10deg)',
                      backgroundImage:
                        each.title === 'Sekiro' ? `url(${each.poster})` : `url(${each.background})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.span
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        width: '100%',
                        height: 'auto',
                        transform: 'translate(0, 50%)',
                        zIndex: 1000,
                        textAlign: 'center',
                        fontSize: '2em',
                        color: 'white',
                        backgroundColor: 'black',
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
