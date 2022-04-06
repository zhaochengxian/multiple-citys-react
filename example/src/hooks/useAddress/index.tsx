import { useCallback, useState } from "react";
import AddressJson from "./address";

const useAddress = (limit?: number) => {
  const addressList = AddressJson;
  const [refresh, setRefresh] = useState(false);
  const loadNextLevelData = useCallback(
    (selectedOptions, callback?: (list: any[]) => void) => {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      setRefresh(true);
      callback && callback(targetOption.children);
      setRefresh(false);
    },
    [refresh, addressList, limit]
  );
  const concatWholeNation = useCallback(() => {
    let list = [...addressList];
    list.unshift({
      value: 0,
      label: "全国",
      isLeaf: true,
      parentId: 0,
      lay: 1,
      children: [],
    });
    return list;
  }, [addressList]);
  return { addressList, loadNextLevelData, concatWholeNation };
};

export default useAddress;
