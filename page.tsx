import Hero from "./components/hero";
import RecentPost from "./components/recentPost";
import RecentPostCard from "./components/recentPostCard";
import FeaturedWork1 from "./components/FeaturedWork1";
import FeaturedWork2 from "./components/FeaturedWork2";
import FeaturedWork3 from "./components/FeaturedWord3";

export default function Home() {
  return (
    <div>
      <Hero/>
      <RecentPost/>

      <FeaturedWork1/>
      
      <FeaturedWork2/>

      <FeaturedWork3/>

      
    </div>
  );
}
