// App.tsx
import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import FeaturesPage from "./pages/FeaturesPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"landing" | "features">(
    "landing"
  );
  const [featuresPageId, setFeaturesPageId] = useState<number>(1);

  // Handle URL-based routing (simple version)
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/features/")) {
      setCurrentPage("features");
      // Extract page ID from URL if needed
      const match = path.match(/\/features\/(\d+)/);
      if (match && match[1]) {
        setFeaturesPageId(parseInt(match[1]));
      }
    } else {
      setCurrentPage("landing");
    }
  }, []);

  if (currentPage === "features") {
    return <FeaturesPage pageId={featuresPageId} />;
  }

  return <LandingPage />;
}

export default App;
