import { LayoutGroup, motion, MotionConfig } from 'framer-motion';
import './App.css';

function App() {
  const data = [
    {
      src: 'https://dontfeedthegamers.com/wp-content/uploads/2018/04/dark-souls-remastered-.jpg',
      title: 'dark souls remastered',
    },
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-R4Dru_FNRaE%2FUSvVMyvuyjI%2FAAAAAAAAAFs%2Fg8ySgjPSeFU%2Fs640%2FArmored-Core-Verdict-Day-Splash-Image.jpg&f=1&nofb=1',
      title: 'verdict day',
    },
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.blog4ever.com%2F2019%2F06%2F852595%2F20210610223329_9028582.jpg&f=1&nofb=1',
      title: 'elden ring',
    },
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*_8Zs4hYmrT-_-gk3r1mlAw.jpeg&f=1&nofb=1',
      title: 'sekiro',
    },
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.playstation.com%2Fis%2Fimage%2FSCEA%2Fbloodborne-listing-thumb-01-ps4-us-05jun14%3F%24Icon%24&f=1&nofb=1',
      title: 'bloodborne',
    },
    {
      src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gameaxis.com%2Fwp-content%2Fuploads%2F2018%2F11%2FDeracine_Review_05-1024x576.jpg&f=1&nofb=1',
      title: 'deracine',
    },
  ];
  return (
    <>
      <MotionConfig transition={{ duration: 0.6 }}>
        <div
          style={{
            display: 'flex',
            height: '100vh',
            maxHeight: '100vh',
            overflowX: 'hidden',
            background: 'black',
          }}
        >
          <LayoutGroup>
            {data.map((each, index) => {
              return (
                <motion.div
                  onClick={() => alert(`you chose ${each.title}`)}
                  className="image_wrapper"
                  key={each.src}
                  style={{
                    minWidth: '100vw' / data.length,
                    width: '100%',
                    zIndex: index,
                    transform: 'skewX(-10deg)',
                    overflowX: 'hidden',
                    position: 'relative',
                  }}
                  layout
                  layoutId="carousel_item"
                  whileHover={{
                    width: '220%',
                  }}
                >
                  <motion.div
                    style={{
                      backgroundImage: `url(${each.src})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      width: '165%',
                      height: '100%',
                      transform: 'skewX(10deg)',
                      position: 'absolute',
                      top: 0,
                      left: '-33%',
                    }}
                  ></motion.div>
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
