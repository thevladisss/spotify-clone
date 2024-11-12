import { Button } from "@mui/material";
import HomeCard from "@/app/components/HomeCard";

export default function Home() {
  return (
    <div style={{backgroundColor: "rgb(83, 83, 83)", backgroundImage:"linear-gradient(rgba(0,0,0,.6) 0,#121212 100%), url('/images/bg_noise.svg')"}} className="bg-secondary-light h-full px-4 py-3 rounded-lg">
      <section className="w-full">
        <h3 className="text-2xl font-bold text-white mb-2">Featured Charts</h3>

        <div className="flex gap-2">
          <HomeCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273f14aa81116510d3a6df8432b"
            title="Something"
            description="Your  w"
          ></HomeCard>
        </div>
      </section>
    </div>
  );
}
