import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import BestSelling from "@/components/BestSelling";
import Card from "@/components/Card";

function page() {
  return (
    <div>
   <Hero/>
   <Discover/>
   <BestSelling/>
   <Card/>
   </div>
  );
}

export default page;
