import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";

import { MultipleCitysReactPopModel, AddressType } from "../../model/pop";
import { MultipleItem } from "../../model";

import CHECKBOX_ICON_ACTIVED from "../../images/checkBoxIconActived.png";
import CHECKBOX_ICON from "../../images/checkBoxIcon.png";
import CHECKBOX_ICON_PART from "../../images/checkBoxIconPart.png";
import arrowDown from "../../images/arrowDown.png";

import "./index.scss";

const MultipleCitysReactPop = ({
  data = [],
  checkList = [],
  visible = false,
  top,
  checkBoxIconActived = CHECKBOX_ICON_ACTIVED,
  checkBoxIcon = CHECKBOX_ICON,
  checkBoxIconPart = CHECKBOX_ICON_PART,
  color = "#232323",
  loadNextLevelData,
  onClose,
  onChange,
}: MultipleCitysReactPopModel) => {
  const [temp, setTemp] = useState<boolean>(false);
  const [levelInfo, setLevelInfo] = useState<MultipleItem>({
    firstId: 0,
    first: "",
  });
  const [listInfo, setListInfo] = useState<{
    secondList: AddressType[];
    thirdList: AddressType[];
  }>({ secondList: [], thirdList: [] });
  const [currentInfo, setCurrentInfo] = useState<{ lay: number; id: number }>({
    lay: 1,
    id: 0,
  });
  const [selectIdList, setSelectIdList] = useState<number[]>([]);
  const [someSelectIdList, setSomeSelectIdList] = useState<number[]>([]);
  const style = useMemo((): CSSProperties => {
    return {
      color,
      top: top ? "-336px" : "auto",
    };
  }, [color, top]);
  useEffect(() => {
    if (!visible) setTimeout(() => setTemp(false), 500);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const treeEle = document.getElementById("treeBadgeWrapper");
    const popEle = document.getElementById("treePop");
    const { offsetTop, offsetHeight } = treeEle;
    popEle.style.setProperty("--top", `${offsetTop + offsetHeight + 10}px`);
    setTemp(true);
  }, [visible]);

  useEffect(() => {
    let aotherList = [];
    let selfList = [];
    switch (currentInfo.lay) {
      case 1:
        aotherList = checkList.filter(
          (item: MultipleItem) => item.firstId !== currentInfo.id
        );
        selfList = checkList.filter(
          (item: MultipleItem) =>
            item.firstId === currentInfo.id && !item.secondId && !item.thirdId
        );
        break;
      case 2:
        aotherList = checkList.filter(
          (item: MultipleItem) => item.secondId !== currentInfo.id
        );
        selfList = checkList.filter(
          (item: MultipleItem) =>
            item.secondId === currentInfo.id && !item.thirdId
        );
        break;
      case 3:
        aotherList = checkList.filter(
          (item: MultipleItem) => item.thirdId !== currentInfo.id
        );
        selfList = checkList.filter(
          (item: MultipleItem) => item.thirdId === currentInfo.id
        );
        break;
    }
    const result = aotherList.concat(selfList);

    const selects = result.map((item: MultipleItem) => {
      switch (true) {
        case !!item.thirdId:
          return item.thirdId;
        case !!item.secondId:
          return item.secondId;
        default:
          return item.firstId;
      }
    });
    let aothers: number[] = [];
    result.forEach((item: MultipleItem) => {
      if (!selects.includes(item.firstId)) {
        aothers.push(item.firstId);
      }
      if (!selects.includes(item.secondId)) {
        aothers.push(item.secondId);
      }
      if (!selects.includes(item.thirdId)) {
        aothers.push(item.thirdId);
      }
    });
    setSelectIdList(selects);
    setSomeSelectIdList(aothers);
  }, [currentInfo, checkList]);

  const popMoreCheck = useCallback(
    (type: "check" | "more", scope: AddressType) => () => {
      let list = [];
      let firstCheckItem;
      let level;
      switch (scope.lay) {
        case 1:
          list = [scope];
          level = {
            firstId: scope.value,
            first: scope.label,
            secondId: "",
            second: "",
            thirdId: "",
            third: "",
          };
          break;
        case 2:
          firstCheckItem = data.find(
            (item: AddressType) => item.value === levelInfo.firstId
          );
          list = [firstCheckItem, scope];
          level = {
            firstId: levelInfo.firstId,
            first: levelInfo.first,
            secondId: scope.value,
            second: scope.label,
            thirdId: "",
            third: "",
          };
          break;
        case 3:
          level = {
            firstId: levelInfo.firstId,
            first: levelInfo.first,
            secondId: levelInfo.secondId,
            second: levelInfo.second,
            thirdId: scope.value,
            third: scope.label,
          };
          break;
      }
      if (type === "check") {
        const checked = !checkList.some(
          (item: MultipleItem) =>
            (item.firstId === scope.value && !item.secondId && !item.thirdId) ||
            (item.secondId === scope.value && !item.thirdId) ||
            item.thirdId === scope.value
        );
        popCheck(scope, checked, level, scope.children);
      } else {
        !scope.isLeaf &&
          loadNextLevelData(list, (result: AddressType[]) => {
            if (scope.lay === 1) {
              setListInfo({ secondList: result, thirdList: [] });
            } else {
              setListInfo((pre) => ({ ...pre, thirdList: result }));
            }
          });
        !scope.isLeaf && changePopColumn(scope.lay + 1);
      }
      setLevelInfo(level);
    },
    [levelInfo, checkList, data]
  );

  const popCheck = useCallback(
    (
      scope: AddressType,
      checked: boolean,
      level: MultipleItem,
      children: AddressType[]
    ) => {
      let tempList = checkList;
      const { value, lay } = scope;
      setCurrentInfo({ lay, id: value });
      switch (true) {
        case !checked && lay === 1:
          tempList = tempList.filter(
            (item: MultipleItem) => item.firstId !== value
          );
          changePopColumn(1);
          break;

        case !checked && lay === 2:
          tempList = tempList.filter(
            (item: MultipleItem) => item.secondId !== value
          );
          changePopColumn(2);
          break;

        case !checked && lay === 3:
          tempList = tempList.filter(
            (item: MultipleItem) => item.thirdId !== value
          );
          break;

        case checked && lay === 1:
          tempList = tempList.filter(
            (item: MultipleItem) =>
              !(item.firstId === scope.value && item.secondId)
          );
          tempList.push({ firstId: scope.value, first: scope.label });
          setListInfo({ secondList: [], thirdList: [] });
          changePopColumn(1);
          break;

        case checked && lay === 2:
          tempList = tempList.filter(
            (item: MultipleItem) =>
              !(item.firstId === level.firstId && !item.secondId)
          );
          tempList = tempList.filter(
            (item: MultipleItem) =>
              !(item.secondId === scope.value && item.thirdId)
          );
          tempList.push({
            firstId: level.firstId,
            first: level.first,
            secondId: scope.value,
            second: scope.label,
          });
          changePopColumn(2);
          break;

        case checked && lay === 3:
          tempList = tempList.filter(
            (item: MultipleItem) =>
              !(item.firstId === level.firstId && !item.secondId)
          );
          tempList = tempList.filter(
            (item: MultipleItem) =>
              !(item.secondId === level.secondId && !item.thirdId)
          );
          tempList = tempList.filter(
            (item: MultipleItem) => !(item.thirdId === scope.value)
          );
          tempList.push({
            firstId: level.firstId,
            first: level.first,
            secondId: level.secondId,
            second: level.second,
            thirdId: scope.value,
            third: scope.label,
          });
          changePopColumn(3);
          break;
      }
      onChange(tempList);
    },
    [checkList]
  );

  const changePopColumn = useCallback((lay: number) => {
    const popContentEle = document.getElementById("tree-pop-content");
    popContentEle.style.setProperty("--column", `${lay}`);
  }, []);

  const popEvent = useCallback((event) => {
    stopEvent(event);
    onClose();
  }, []);

  const stopEvent = useCallback((event: Event) => {
    event.stopPropagation();
  }, []);

  const imgUrlJump = useCallback(
    (value: number) => {
      if (selectIdList.includes(value)) {
        return checkBoxIconActived;
      } else if (someSelectIdList.includes(value)) {
        return checkBoxIconPart;
      } else {
        return checkBoxIcon;
      }
    },
    [selectIdList, someSelectIdList]
  );

  return (
    <React.Fragment>
      {visible && (
        <div
          className={`pop pop-${temp ? "in" : "out"}`}
          id="treePop"
          style={style}
        >
          <div className="pop-fixed" onClick={popEvent} />
          <div className="pop-content" id="tree-pop-content">
            <div className="pop-scroll">
              {data.map((item: AddressType) => (
                <div className="pop-scroll-item" key={item.value}>
                  <img
                    className="pop-scroll-item-box"
                    onClick={popMoreCheck("check", item)}
                    src={imgUrlJump(item.value)}
                    alt=""
                  />
                  <div className="flex" onClick={popMoreCheck("more", item)}>
                    <div className="pop-scroll-item-title flex webkit-box-wrap line-1">
                      {item.label}
                    </div>
                    <img
                      className="pop-scroll-item-more"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pop-scroll">
              {listInfo.secondList.map((item: AddressType) => (
                <div className="pop-scroll-item" key={item.value}>
                  <img
                    className="pop-scroll-item-box"
                    onClick={popMoreCheck("check", item)}
                    src={imgUrlJump(item.value)}
                    alt=""
                  />
                  <div className="flex" onClick={popMoreCheck("more", item)}>
                    <div className="pop-scroll-item-title flex webkit-box-wrap line-1">
                      {item.label}
                    </div>
                    {!item.isLeaf && (
                      <img
                        className="pop-scroll-item-more"
                        src={arrowDown}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pop-scroll">
              {listInfo.thirdList.map((item: AddressType) => (
                <div className="pop-scroll-item" key={item.value}>
                  <img
                    className="pop-scroll-item-box"
                    onClick={popMoreCheck("check", item)}
                    src={imgUrlJump(item.value)}
                    alt=""
                  />
                  <div
                    className="pop-scroll-item-title flex webkit-box-wrap line-1"
                    onClick={popMoreCheck("more", item)}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MultipleCitysReactPop;
