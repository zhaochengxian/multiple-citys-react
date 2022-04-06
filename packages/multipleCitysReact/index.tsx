import React, { CSSProperties, useCallback, useState, useMemo } from "react";

import MultipleCitysReactPop from "./components/pop";
import Badge from "./components/badge";

import { MultipleCitysReactModel, MultipleItem } from "./model";

import "./index.scss";

const MultipleCitysReact: React.FC<MultipleCitysReactModel> = (props) => {
  const {
    top,
    data = [],
    checkList = [],
    edit = true,
    placeholder = "",
    badgesWidth = 500,
    checkBoxIcon,
    checkBoxIconActived,
    checkBoxIconPart,
    color,
    badgeStyle,
    loadNextLevelData,
    onChange,
  } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const treeClick = useCallback(
    (type: string) => () => {
      if (!edit) return;
      setVisible(type === "close" ? false : true);
    },
    [edit]
  );
  const style = useMemo((): CSSProperties => {
    return {
      width: badgesWidth + "px",
    };
  }, [badgesWidth]);

  const TreeChange = useCallback((list) => {
    onChange(list);
  }, []);

  const checkDelete = useCallback(
    (value: number) => {
      const list = checkList.filter(
        (item: MultipleItem, index: number) => index !== value
      );
      onChange(list);
    },
    [checkList]
  );

  return (
    <div className="multiple-citys-react">
      <div
        className="multiple-citys-react-badge-wrapper"
        id="treeBadgeWrapper"
        onClick={treeClick("open")}
        style={style}
      >
        {checkList.length > 0 ? (
          <Badge
            list={checkList}
            edit={edit}
            badgeStyle={badgeStyle}
            onClose={checkDelete}
          />
        ) : (
          <span className="multiple-citys-react-badge-show-placeholder">
            {placeholder}
          </span>
        )}
      </div>

      <MultipleCitysReactPop
        data={data}
        visible={visible}
        checkList={checkList}
        top={top}
        checkBoxIconActived={checkBoxIconActived}
        checkBoxIcon={checkBoxIcon}
        checkBoxIconPart={checkBoxIconPart}
        color={color}
        loadNextLevelData={loadNextLevelData}
        onClose={treeClick("close")}
        onChange={TreeChange}
      />
    </div>
  );
};

export default MultipleCitysReact;
