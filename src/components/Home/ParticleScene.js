import { useCallback} from "react";
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'

const ParticleScene = () => {
    const particlesInit = useCallback(async (engine) =>{
      await loadFull(engine);
    },[]);

    const particlesLoaded = useCallback(async () => {

    }, [])

    return (
      <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded}
      className="w-full h-full absolute translate-z-0"
      options={{
        fullScreen: {enable: false},
        background: {
          color:{
            value: ''
          }
        },
        fps_limit:144,
        interactivity:{
          events:{
            onClick:{
              enable: false,
              mode: 'push'
            },
            onHover:{
              enable:true,
              mode: 'repulse'
            },
            resize: true,
          },
          modes: {
            push: {
              quantity:90
            },
            repulse: {
              distance:100,
              duration: 0.4,
            }
          },
        },
        particles: {
          color: {
            value: '#DDDDDD',
          },
          links:{
            color: '#DDDDDD',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width:1
          },
          collisions:{
            enale: true,
          },
          move:{
            directions: 'none',
            enable:true,
            outModes:{
              default:'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number:{
            density: {
              enable:true,
              area:800
            },
            value: 160
          },
          opacity:{
            value:0.7
          },
          shape:{
            type:'circle'
          },
          size:{
            value:{min:1, max:5},
          }
        },
        detectRetina:true,
      }}/>
    )
};

export default ParticleScene;
