import React, { useCallback } from "react";

import { MultipleItem } from "../../model";
import { BadgeStyle } from "../../model/badge";

import TREE_CLOSE from "../../images/closeBadge.png";
import "./index.scss";

const Badge = ({
  list,
  edit = true,
  badgeStyle = "default",
  onClose,
}: {
  list: MultipleItem[];
  edit?: boolean;
  badgeStyle: BadgeStyle;
  onClose: (value: number) => void;
}) => {
  const stopEvent = useCallback((event: any) => {
    event.stopPropagation();
  }, []);

  return (
    <div className="badge">
      {list.map((item: MultipleItem, index: number) => (
        <div className="badge-item-wrapper" key={index} onClick={stopEvent}>
          <span
            className={["badge-item ", "badge-item-" + badgeStyle].join("")}
          >{`
            ${item.first}${item.secondId ? `-${item.second}` : ""}${
            item.thirdId ? `-${item.third}` : ""
          }
        `}</span>
          {edit && (
            <img
              className="badge-item-close"
              src={TREE_CLOSE}
              alt=""
              onClick={() => onClose(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Badge;
