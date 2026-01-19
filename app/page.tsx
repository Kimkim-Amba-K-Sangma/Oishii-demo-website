import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Gallery from "./components/Gallery"
import MenuPreview from "./components/MenuPreview"
import Reservation from "./components/Reservation"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <Gallery/>
      <MenuPreview/>
      <Reservation/>
      <Contact/>
      <Footer/>
 </main>
  )
}
