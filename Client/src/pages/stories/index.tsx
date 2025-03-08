import Hero from "@/components/understanding-trouma/hero";
import Story from "../../assets/stories-banner.png";
import SearchByInterest from "@/components/stories/serach_by_interest";
import StoriesOfStrength from "@/components/stories/stories_of_strength";
import StoriesCardWrapper from "@/components/stories/stories_card_wrapper";
import ArticlesAandGuides from "@/components/stories/articles-and-guides";
import CallToAction2 from "@/components/understanding-trouma/callToAction2";

function Stories() {
  return (
    <div>
      <Hero
        image={Story}
        info={
          "Share your  journey in a safe, supportive space where your story can inspire healing, connection, and empowerment for others."
        }
      />
      <SearchByInterest />
      <StoriesOfStrength />

      <div className="flex flex-col md:flex-row justify-between container relative mt-10 gap-6">
        {/* <div className="w-[25%] hidden md:block">
            <Sidebar_Stories/>
          </div> */}
        {/* <div className="md:hidden w-full px-5">
          <button className="w-full bg-primary py-3 text-white flex justify-center items-center gap-3 rounded-lg transform transition-transform duration-300 hover:scale-95"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            Refine Your Search
            {!isSidebarOpen? 
            <SlidersHorizontal
            className="text-white cursor-pointer"
          />:
          <CircleX className="text-white cursor-pointer"/>  
          }
          </button>
          <div
            className={`absolute top-14 left-0 w-[80%] z-[100]  transition-transform duration-300 ${
              isSidebarOpen ? "transform translate-x-5" : "transform -translate-x-full"
            }`}
          >
            <Sidebar_Stories />
          </div>
        </div> */}
        <div className="w-full">
          <StoriesCardWrapper />
          <ArticlesAandGuides />
        </div>
      </div>
      <CallToAction2 />
    </div>
  );
}

export default Stories;
