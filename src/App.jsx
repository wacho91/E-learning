import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"


function App() {

  return (
    <main className="overflow-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
    </main>
  )
}

export default App
