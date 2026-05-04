import HeroBanner from '../components/HeroBanner'
import FeaturedProducts from '../components/FeaturedProducts'
import Brands from '../components/Brands'
import InfoHome  from '../components/Infohome'
import Whatsapp from '../Sections/Home-sections/Whatsapp'   
import Services from '../Sections/Home-sections/Services'

function Home() {
  return (
    <>
      <HeroBanner />
      <InfoHome />
      <Whatsapp/>
      <FeaturedProducts />
   
      <Services />
      <Brands />
    </>
  )
}

export default Home
