import AudioContentCard from "@/app/components/cards/AudioContentCard";
import DashboardSection from "@/app/components/sections/DashboardSection";

type Props = {
  featured: any[]
}
export default function Home(props: Props) {

  return (
    <div className="bg-background-base h-full rounded-lg relative">
      <div
        className=" absolute top-0 left-0 w-full rounded-md"
        style={{
          height: "256px",
          backgroundColor: "rgb(83, 83, 83)",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6) 0,#121212 100%), url('/images/bg_noise.svg')",
        }}
      ></div>
      <section className="pt-1">
        <div className="px-6">
          <DashboardSection
            title="Popular artists"
            actions={
              <div>
                <a className='text-gray-400 relative' role="button">
                  Show all
                </a>
              </div>
            }
          >
            <div className="flex -mx-3">
              {Array(6)
                .fill(null)
                .map((_, index) => {
                  return (
                    <AudioContentCard
                      rounded
                      key={index}
                      imageSrc="https://i.scdn.co/image/ab67616d0000b273f14aa81116510d3a6df8432b"
                      title="Something"
                      description="Artist"
                    ></AudioContentCard>
                  );
                })}
            </div>
          </DashboardSection>
          <DashboardSection title="Popular albums and singles">
            <div className="flex -mx-3">
              {Array(6)
                .fill(null)
                .map((_, index) => {
                  return (
                    <AudioContentCard
                      key={index}
                      imageSrc="https://i.scdn.co/image/ab67616d0000b273560a43392fff47dfdd7519f1"
                      title="Baby Gravy 3"
                      description="My favorite album"
                    ></AudioContentCard>
                  );
                })}
            </div>
          </DashboardSection>
          <DashboardSection title="Popular albums and singles">
            <div className="flex -mx-3">
              {Array(6)
                .fill(null)
                .map((_, index) => {
                  return (
                    <AudioContentCard
                      key={index}
                      imageSrc="https://i.scdn.co/image/ab67616d0000b273560a43392fff47dfdd7519f1"
                      title="Baby Gravy 3"
                      description="My favorite album"
                    ></AudioContentCard>
                  );
                })}
            </div>
          </DashboardSection>
          <DashboardSection title="Popular albums and singles">
            <div className="flex -mx-3">
              {Array(6)
                .fill(null)
                .map((_, index) => {
                  return (
                    <AudioContentCard
                      key={index}
                      imageSrc="https://i.scdn.co/image/ab67616d0000b273560a43392fff47dfdd7519f1"
                      title="Baby Gravy 3"
                      description="My favorite album"
                    ></AudioContentCard>
                  );
                })}
            </div>
          </DashboardSection>
        </div>
      </section>
    </div>
  );
}
