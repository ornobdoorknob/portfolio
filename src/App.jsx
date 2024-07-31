import Footer from './components/Footer';
import Hero from './components/Hero';
import Content from './components/Content';

const App = () => (
  <div class="min-h-screen w-full overflow-hidden bg-primary">
    <div class="z-0 hero bg-primary bg-fixed bg-center">
      <Hero />
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