import { Button } from "@mui/material";
import AudioContentCard from "@/app/components/cards/AudioContentCard";
import classNames from "classnames";
import DashboardSection from "@/app/components/sections/DashboardSection";
import {Grid2 as Grid} from "@mui/material";

type Props = {
  featured: any[]
}
export default function Home(props: Props) {

  return (
    <div style={{backgroundColor: "rgb(83, 83, 83)", backgroundImage:"linear-gradient(rgba(0,0,0,.6) 0,#121212 100%), url('/images/bg_noise.svg')"}} className="bg-secondary-light h-full rounded-lg">
      <section className="pt-2">
        <div className="px-6">
          <DashboardSection title="Popular artists" href="#about">
            <div className="flex">
              {
                Array(6).fill(null)
                  .map((_, index) => {
                    return (
                      <AudioContentCard
                        rounded
                        key={index}
                        imageSrc="https://i.scdn.co/image/ab67616d0000b273f14aa81116510d3a6df8432b"
                        title="Something"
                        description="Your  w"
                      ></AudioContentCard>
                    )
                  })
              }
            </div>
          </DashboardSection>
          <DashboardSection title="Popular albums and singles">
            <div className="flex">
              {
                Array(6).fill(null)
                  .map((_, index) => {
                    return (
                      <AudioContentCard
                        key={index}
                        imageSrc="https://i.scdn.co/image/ab67616d0000b273560a43392fff47dfdd7519f1"
                        title="Baby Gravy 3"
                        description="My favorite album"
                      ></AudioContentCard>
                    )
                  })
              }
            </div>
          </DashboardSection>
          <DashboardSection
            title="Popular albums and singles">
            <div className="flex">
              {
                Array(6).fill(null)
                  .map((_, index) => {
                    return (
                      <AudioContentCard
                        key={index}
                        imageSrc="https://i.scdn.co/image/ab67616d0000b273560a43392fff47dfdd7519f1"
                        title="Baby Gravy 3"
                        description="My favorite album"
                      ></AudioContentCard>
                    )
                  })
              }
            </div>
          </DashboardSection>
          <DashboardSection title="Popular albums and singles">
            <div className="flex">
              {
                Array(6).fill(null)
                  .map((_, index) => {
                    return (
                      <AudioContentCard
                        key={index}
                        imageSrc="https://i.scdn.co/image/ab67616d0000b273560a43392fff47dfdd7519f1"
                        title="Baby Gravy 3"
                        description="My favorite album"
                      ></AudioContentCard>
                    )
                  })
              }
            </div>
          </DashboardSection>
        </div>
      </section>
    </div>
  );
}
