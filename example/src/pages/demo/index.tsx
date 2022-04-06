import React, { useCallback, useState } from "react";
import MultipleCitysReact from "@banyinbanying/multiple-citys-react";

import useAddress from "../../hooks/useAddress";
import "./index.css";

const SystemOrderModify = () => {
  const { addressList, loadNextLevelData } = useAddress();
  const [checkList, setCheckList] = useState([]);

  const multipleChange = useCallback((event) => {
    setCheckList(event);
  }, []);

  return (
    <div className="multiple-citys-react-demo">
      <MultipleCitysReact
        data={addressList}
        checkList={checkList}
        loadNextLevelData={loadNextLevelData}
        onChange={multipleChange}
      />
    </div>
  );
};

export default SystemOrderModify;
