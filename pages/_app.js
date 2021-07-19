import './styles/_styles.scss'
// import { Jarvis } from '../components/Jarvis'
// import { gsap } from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'


// // Force CSSPlugin to not get dropped during build
// gsap.registerPlugin(CSSPlugin)

function MyApp({ Component, pageProps}) {
  return(

      <Component {...pageProps} />
    
  ) 
}

export default MyApp