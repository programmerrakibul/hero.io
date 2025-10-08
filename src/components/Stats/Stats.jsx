import Container from "../Container/Container";

const Stats = () => {
  return (
    <section className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white py-16">
      <Container>
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="space-y-2.5">
              <p className="opacity-80 text-base">Total Downloads</p>
              <p className="font-extrabold text-4xl md:text-5xl lg:text-6xl animate-pulse">
                29.6M
              </p>
              <p className="opacity-80 text-base">21% more than last month</p>
            </div>

            <div className="space-y-2.5">
              <p className="opacity-80 text-base">Total Reviews</p>
              <p className="font-extrabold text-4xl md:text-5xl lg:text-6xl animate-pulse">
                906K
              </p>
              <p className="opacity-80 text-base">46% more than last month</p>
            </div>

            <div className="space-y-2.5">
              <p className="opacity-80 text-base">Active Apps</p>
              <p className="font-extrabold text-4xl md:text-5xl lg:text-6xl animate-pulse">
                132+
              </p>
              <p className="opacity-80 text-base">31 more will Launch</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
