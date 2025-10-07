import useAppsData from "../../../Hooks/useAppsData";
import AppCard from "../../AppCard/AppCard";
import Container from "../../Container/Container";

const AllApps = () => {
  const { appData } = useAppsData();
  const singleAppElements = appData.map((item) => (
    <AppCard key={item.id} singleApp={item} />
  ));

  return (
    <section className="my-8 py-4">
      <Container>
        <div className="text-center space-y-3.5">
          <h1 className="text-5xl font-bold">Our All Applications</h1>
          <p className="text-[#627382] text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 my-10">{singleAppElements}</div>
      </Container>
    </section>
  );
};

export default AllApps;
