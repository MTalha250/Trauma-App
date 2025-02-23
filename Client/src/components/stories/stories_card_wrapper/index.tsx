import StoriesCard from "../stories_card";
import Card1 from "../../../assets/stories_card_1.png";
import Card2 from "../../../assets/stories_card_2.png";
import Card3 from "../../../assets/stories_card_3.png";

function StoriesCardWrapper() {
  return (
    <div className="flex flex-wrap gap-8 mb-10 justify-center">
      <StoriesCard
        image={Card1}
        title={"Finding Strength After the Storm"}
        description={
          "A journey through loss and the path to rediscovering inner strength and resilience."
        }
      />
      <StoriesCard
        image={Card2}
        title={"Emerging from Darkness"}
        description={
          "A journey of rediscovering hope after years of hidden pain."
        }
      />
      <StoriesCard
        image={Card1}
        title={"Finding Strength After the Storm"}
        description={
          "A journey through loss and the path to rediscovering inner strength and resilience."
        }
      />
      <StoriesCard
        image={Card3}
        title={"Finding Strength in Every Step"}
        description={
          "Overcoming loss and finding resilience through support and self-discovery."
        }
      />
      <StoriesCard
        image={Card2}
        title={"Emerging from Darkness"}
        description={
          "A journey of rediscovering hope after years of hidden pain."
        }
      />
      <StoriesCard
        image={Card3}
        title={"Finding Strength in Every Step"}
        description={
          "Overcoming loss and finding resilience through support and self-discovery."
        }
      />
    </div>
  );
}

export default StoriesCardWrapper;
