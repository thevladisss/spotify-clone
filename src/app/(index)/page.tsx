import {Button} from "@mui/material";
import HomeCard from "@/app/components/HomeCard";


export default function Home() {
  return (
    <div className="bg-secondary-light h-full px-4 py-3">
        <section className="w-full">
          <h3 className="text-2xl font-bold text-white mb-2">
            Featured Charts
          </h3>

          <div className="flex gap-2">
            <HomeCard imageSrc="https://i.scdn.co/image/ab67616d0000b273f14aa81116510d3a6df8432b"
                      title="Something"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate, deleniti dolorem doloribus dolorum earum error et ex, facilis nesciunt nihil praesentium, qui! Consequuntur, id laborum nulla qui quo tempore?"></HomeCard>
          </div>
        </section>
    </div>
  );
}
