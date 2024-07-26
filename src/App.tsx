import { useEffect, useState } from "react";
import { DataTable } from "./components/data-table/data-table";
import { PageContainer } from "./components/layout/page-container";
import { IDatum } from "./types/data";
import { getRandomNumber, getRandomScoreDiff, sortData } from "./helpers/data";
import { INIT_DATA } from "./constants/data";

const App = () => {
  const [data, setData] = useState<IDatum[]>(sortData(INIT_DATA));

  const handleUpdate = () => {
    const randomIdx = getRandomNumber(0, data.length - 1);

    const scoreDiff = getRandomScoreDiff();
    setData((prevData) => {
      const draft = [...prevData];
      const updating = draft[randomIdx];
      updating.score = updating.score + scoreDiff;
      return sortData(draft);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => handleUpdate(), 2_000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <DataTable initData={sortData(INIT_DATA)} data={data} />
    </PageContainer>
  );
};

export default App;
