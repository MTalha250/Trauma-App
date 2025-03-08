import { MessageCircle } from "lucide-react";

function StoriesOfStrength() {
  return (
    <div className="container my-10 flex flex-col md:flex-row gap-3 justify-between items-center">
      <div>
        <h4 className="heading-4">
          Stories of <span className="text-primary">Strength</span>
        </h4>
        <div className="border mt-5 p-2.5">
          <p>Filter By: Any Topic</p>
        </div>
      </div>
      <button className="lg:py-3 py-2 px-5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark flex justify-between items-center gap-2 hvr-scl-primary">
        <MessageCircle size={30} />
        Share your story
      </button>
    </div>
  );
}

export default StoriesOfStrength;
