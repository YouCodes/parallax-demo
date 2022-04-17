import { useRef } from 'react';
import moon from './night.jpg';
import land from './mountain.jpg';
import cat from './giphy.gif';
import cat2 from './giphy (1).gif';
import cat3 from './giphy (2).gif';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={3} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={0}
          speed={1.5}
          factor={3}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#F7CCAC' }} />

        <ParallaxLayer
          offset={2}
          speed={1.5}
          factor={3}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

      */}
        <ParallaxLayer
          offset={2.1}
          speed={0.1}
          style={{ textAlign: 'center', width: '100%', height: 'auto'}}
        >
          <img src={cat3} />
        </ParallaxLayer>
   <ParallaxLayer
          offset={1.1}
          speed={0.1}
          style={{textAlign: 'center', width: '100%', height: 'auto'}}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.05}
          onClick={() => ref.current.scrollTo(2)}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >

        </ParallaxLayer>
<ParallaxLayer offset={0} speed={2} style={{ backgroundColor: '#DFDFDE' }} />
          <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <p>Scroll down</p>
  </ParallaxLayer>

  <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#F56D91' }} />

  <ParallaxLayer
    offset={2}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>
    <p>Scroll up</p>
  </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
