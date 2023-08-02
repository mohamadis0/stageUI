import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import BestSelling from "@/components/BestSelling";
import Categories from "@/components/Categories";

function page() {
  return (
    <div>
   <Hero/>
   <Discover/>
   <BestSelling/>
   <Categories/>
   </div>
  );
}

export default page;
