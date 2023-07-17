import {
  Navbar,
  Hero,
  AboutUs,
  Statistics,
  Projects,
  Cta,
  Footer,
} from "./Components/";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Statistics />
      <Projects />
      <Cta />
      <Footer />
      <Helmet>
        <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
        <script
          src="https://mediafiles.botpress.cloud/1a1fc98a-68df-4269-8e92-e66ef9afaedc/webchat/config.js"
          defer
        ></script>
      </Helmet>
    </div>
  );
}

export default App;
