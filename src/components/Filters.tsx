import "../css/Filters.css";

const Filters = () => {
  // an array to define the available filters
  // TODO: get the filters from the award field in the users collection
  const filterSet = [
    "Deans",
    "Best Innovator",
    "Best Communicator",
    "Best Leader",
    "Best Team Player",
    "Best Young Entrepreneur",
    "Best CSR",
    "BESA FHSS",
    "BESA FAS",
    "BESA FAHS",
    "BESA FMS",
    "BESA FMSC",
    "BESA FOT",
    "BESA FOE",
  ];

  return (
    <div className="filters">
      <h3>Filters</h3>
      {/*mapping filter set */}
      {filterSet.map((filter) => (
        <div className="filter">{filter}</div>
      ))}
    </div>
  );
};

export default Filters;
