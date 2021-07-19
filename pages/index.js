import MainLayout from '../components/layouts/MainLayout'
import Header from '../components/Header/Header'
// import Action from '../components/Action/Action'
import Hero from '../components/Hero/Hero'
import InfoCards from '../components/InfoCards/InfoCards'
import Head from '../components/head'
import Gallery from '../components/Gallery/Gallery'
import Classic from '../components/Classic/Classic'
import Contact from '../components/Contact/Contact'



const home = () => {
  return (
    
    <MainLayout>
      <Header />
      {/* <Action /> */}
      <Hero />
      <InfoCards />
      <Gallery />
      <Classic />
      <Contact />
    </MainLayout>
    
  )
}

export default home
