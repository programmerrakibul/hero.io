import Container from "../Container/Container";
import { CloudDownload, ShieldCheck, Star } from "lucide-react";

const Stats = () => {
  return (
    <section className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-16">
      <Container>
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Trusted by Millions, Built for You
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-4">
              <div className="w-16 lg:w-20 animate-bounce">
                <CloudDownload size="100%" color="#44FFD195" />
              </div>

              <div className="space-y-2.5">
                <p className="opacity-80 text-base">Total Downloads</p>
                <p className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
                  29.6M
                </p>
                <p className="opacity-80 text-base">21% more than last month</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-4">
              <div className="w-16 lg:w-20  animate-bounce ">
                <Star size="100%" color="#FF8811" />
              </div>

              <div className="space-y-2.5">
                <p className="opacity-80 text-base">Total Reviews</p>
                <p className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
                  906K
                </p>
                <p className="opacity-80 text-base">46% more than last month</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-4">
              <div className="w-16 lg:w-20  animate-bounce">
                <ShieldCheck size="100%" color="#388E3C" />
              </div>

              <div className="space-y-2.5">
                <p className="opacity-80 text-base">Active Apps</p>
                <p className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
                  132+
                </p>
                <p className="opacity-80 text-base">31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
