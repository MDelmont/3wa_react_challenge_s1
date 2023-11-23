import useGenerateRandomTable from "../hook/useGenerateRandomTable";

function Table() {
  const { table, getSortTable } = useGenerateRandomTable(20);
  return (
    <div className="table">
      <h3>Tableau brut</h3>
      <div>{table.join(", ")}</div>
      <h3>tableau trier</h3>
      <div>
        <div>{getSortTable().join(", ")}</div>
      </div>
    </div>
  );
}

export default Table;
