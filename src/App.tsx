import { AboutUs } from './components/sections/AboutUs'
import Brands from './components/sections/Brands'
import { CTA } from './components/sections/CallToAction'
import {Hero} from './components/sections/Hero'
import { Pricing } from './components/sections/Pricing'
import { Services } from './components/sections/Services'
import Layout from './layouts/Layout'

function App() {
  return (
    <>
      <Layout title="EdgeAI" >
        <Hero />
        <Brands />
        <Services />
        <AboutUs />
        <Pricing />
        <CTA />
      </Layout>
      
   </>
    
  )
  
}

export default App
