import { MainTheme } from "./MainTheme/MainTheme";
import { NewsSection } from "./NewsSection/NewsSection";
import { Trending } from "./Trending/Trending";

export const MainContainer = () => {
  return (
    <section className="main-grid">
      <div className="main-theme">
        <MainTheme />
      </div>
      <div className="news-section">
        <NewsSection />
      </div>
      <div className="trending">
        <Trending />
      </div>
    </section>
  );
};
