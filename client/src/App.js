import { useEffect, useRef, useState } from "react";

import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import Prices from "./components/Prices/Prices";
import Contacts from "./components/Contacts/Contacts";
import "./App.css";

function App() {
  const sectionRefs = useRef([]);
  const [visibleSection, setVisibleSection] = useState(null);

  const ScrollToNextSection = () => {
    const currentIndex = sectionRefs.current.findIndex(
      (ref) => ref && ref.id === visibleSection
    );
    const nextSection = sectionRefs.current[currentIndex + 1];

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      return;
    }

    sectionRefs.current[0].scrollIntoView({ behavior: "smooth" });
  };

  // IntersectionObserver

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      const newRef = sectionRefs || null;
      newRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="App">
      <button onClick={ScrollToNextSection} className="scroll-btn">
        ↡
      </button>
      {/* <ScrollToNextSection /> */}
      <Header />
      <Welcome ref={(el) => (sectionRefs.current[0] = el)} />
      <Prices ref={(el) => (sectionRefs.current[1] = el)} />
      <Contacts ref={(el) => (sectionRefs.current[2] = el)} />
    </div>
  );
}

export default App;
