import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import Content from './components/Content';

const App = () => (
  <div class="w-full overflow-hidden bg-primary">
    <div class="flex flex-col">
      <Header />
    <div class="z-0 hero bg-primary bg-fixed bg-center">
      <Hero />
    </div>
    </div>
    <div class = "z-10">
      <Content />
      <div class="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
  </div>
)

export default App