import React, { useEffect } from "react";
import {
  Navbar,
  Hero,
  AboutUs,
  Statistics,
  Projects,
  Cta,
  Footer,
} from "./Components/";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with Lexus",
        botConversationDescription: "Hi! I'm Lexus, your AI Assistant from Phormalabs",
        botId: "1a1fc98a-68df-4269-8e92-e66ef9afaedc",
        hostUrl: "https://cdn.botpress.cloud/webchat/v0",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "1a1fc98a-68df-4269-8e92-e66ef9afaedc",
        botName: "Lexus Phormalabs",
        phoneNumber: "+389 70 362 182",
        emailAddress: "contact@phormalabs.com",
        website: "https://phormalabs.com",
        stylesheet: "https://www.phormalabs.com/assets/index-d9c5ea70.css",
        enableTranscriptDownload: false,
        useSessionStorage: true,
      });
    };



    return () => {
      // Clean up the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Statistics />
      <Projects />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
