'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var img$4 = "data:image/png;base64,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";

var img$3 = "data:image/png;base64,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";

var img$2 = "data:image/png;base64,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";

var img$1 = "data:image/png;base64,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";

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".pop{background-color:#fff;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d;height:326px;left:0;padding-top:6px;position:absolute;z-index:1}.pop-fixed{bottom:0;left:0;position:fixed;right:0;top:0}.pop-content{column-gap:0;columns:var(--column);height:100%;overflow:hidden;position:relative;z-index:2}.pop-scroll{height:100%;overflow-y:scroll;width:150px}.pop-scroll .flex{align-items:center;display:flex;flex:1}.pop-scroll .line-1{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:50px}.pop-scroll-item{align-items:center;display:flex;padding:5px 15px}.pop-scroll-item-box{height:20px;margin-right:10px;width:20px}.pop-scroll-item-title{cursor:pointer}.pop-scroll-item-more{height:14px;transform:rotate(270deg);width:14px}.pop-scroll+.pop-scroll{border-left:thin solid #f1f1f1}";
styleInject(css_248z$2);

var MultipleCitysReactPop = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.checkList, checkList = _c === void 0 ? [] : _c, _d = _a.visible, visible = _d === void 0 ? false : _d, top = _a.top, _e = _a.checkBoxIconActived, checkBoxIconActived = _e === void 0 ? img$4 : _e, _f = _a.checkBoxIcon, checkBoxIcon = _f === void 0 ? img$3 : _f, _g = _a.checkBoxIconPart, checkBoxIconPart = _g === void 0 ? img$2 : _g, _h = _a.color, color = _h === void 0 ? "#232323" : _h, loadNextLevelData = _a.loadNextLevelData, onClose = _a.onClose, onChange = _a.onChange;
    var _j = React.useState(false), temp = _j[0], setTemp = _j[1];
    var _k = React.useState({
        firstId: 0,
        first: "",
    }), levelInfo = _k[0], setLevelInfo = _k[1];
    var _l = React.useState({ secondList: [], thirdList: [] }), listInfo = _l[0], setListInfo = _l[1];
    var _m = React.useState({
        lay: 1,
        id: 0,
    }), currentInfo = _m[0], setCurrentInfo = _m[1];
    var _o = React.useState([]), selectIdList = _o[0], setSelectIdList = _o[1];
    var _p = React.useState([]), someSelectIdList = _p[0], setSomeSelectIdList = _p[1];
    var style = React.useMemo(function () {
        return {
            color: color,
            top: top ? "-336px" : "auto",
        };
    }, [color, top]);
    React.useEffect(function () {
        if (!visible)
            setTimeout(function () { return setTemp(false); }, 500);
    }, [visible]);
    React.useEffect(function () {
        if (!visible)
            return;
        var treeEle = document.getElementById("treeBadgeWrapper");
        var popEle = document.getElementById("treePop");
        var offsetTop = treeEle.offsetTop, offsetHeight = treeEle.offsetHeight;
        popEle.style.setProperty("--top", "".concat(offsetTop + offsetHeight + 10, "px"));
        setTemp(true);
    }, [visible]);
    React.useEffect(function () {
        var aotherList = [];
        var selfList = [];
        switch (currentInfo.lay) {
            case 1:
                aotherList = checkList.filter(function (item) { return item.firstId !== currentInfo.id; });
                selfList = checkList.filter(function (item) {
                    return item.firstId === currentInfo.id && !item.secondId && !item.thirdId;
                });
                break;
            case 2:
                aotherList = checkList.filter(function (item) { return item.secondId !== currentInfo.id; });
                selfList = checkList.filter(function (item) {
                    return item.secondId === currentInfo.id && !item.thirdId;
                });
                break;
            case 3:
                aotherList = checkList.filter(function (item) { return item.thirdId !== currentInfo.id; });
                selfList = checkList.filter(function (item) { return item.thirdId === currentInfo.id; });
                break;
        }
        var result = aotherList.concat(selfList);
        var selects = result.map(function (item) {
            switch (true) {
                case !!item.thirdId:
                    return item.thirdId;
                case !!item.secondId:
                    return item.secondId;
                default:
                    return item.firstId;
            }
        });
        var aothers = [];
        result.forEach(function (item) {
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
    var popMoreCheck = React.useCallback(function (type, scope) { return function () {
        var list = [];
        var firstCheckItem;
        var level;
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
                firstCheckItem = data.find(function (item) { return item.value === levelInfo.firstId; });
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
            var checked = !checkList.some(function (item) {
                return (item.firstId === scope.value && !item.secondId && !item.thirdId) ||
                    (item.secondId === scope.value && !item.thirdId) ||
                    item.thirdId === scope.value;
            });
            popCheck(scope, checked, level, scope.children);
        }
        else {
            !scope.isLeaf &&
                loadNextLevelData(list, function (result) {
                    if (scope.lay === 1) {
                        setListInfo({ secondList: result, thirdList: [] });
                    }
                    else {
                        setListInfo(function (pre) { return (__assign(__assign({}, pre), { thirdList: result })); });
                    }
                });
            !scope.isLeaf && changePopColumn(scope.lay + 1);
        }
        setLevelInfo(level);
    }; }, [levelInfo, checkList, data]);
    var popCheck = React.useCallback(function (scope, checked, level, children) {
        var tempList = checkList;
        var value = scope.value, lay = scope.lay;
        setCurrentInfo({ lay: lay, id: value });
        switch (true) {
            case !checked && lay === 1:
                tempList = tempList.filter(function (item) { return item.firstId !== value; });
                changePopColumn(1);
                break;
            case !checked && lay === 2:
                tempList = tempList.filter(function (item) { return item.secondId !== value; });
                changePopColumn(2);
                break;
            case !checked && lay === 3:
                tempList = tempList.filter(function (item) { return item.thirdId !== value; });
                break;
            case checked && lay === 1:
                tempList = tempList.filter(function (item) {
                    return !(item.firstId === scope.value && item.secondId);
                });
                tempList.push({ firstId: scope.value, first: scope.label });
                setListInfo({ secondList: [], thirdList: [] });
                changePopColumn(1);
                break;
            case checked && lay === 2:
                tempList = tempList.filter(function (item) {
                    return !(item.firstId === level.firstId && !item.secondId);
                });
                tempList = tempList.filter(function (item) {
                    return !(item.secondId === scope.value && item.thirdId);
                });
                tempList.push({
                    firstId: level.firstId,
                    first: level.first,
                    secondId: scope.value,
                    second: scope.label,
                });
                changePopColumn(2);
                break;
            case checked && lay === 3:
                tempList = tempList.filter(function (item) {
                    return !(item.firstId === level.firstId && !item.secondId);
                });
                tempList = tempList.filter(function (item) {
                    return !(item.secondId === level.secondId && !item.thirdId);
                });
                tempList = tempList.filter(function (item) { return !(item.thirdId === scope.value); });
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
    }, [checkList]);
    var changePopColumn = React.useCallback(function (lay) {
        var popContentEle = document.getElementById("tree-pop-content");
        popContentEle.style.setProperty("--column", "".concat(lay));
    }, []);
    var popEvent = React.useCallback(function (event) {
        stopEvent(event);
        onClose();
    }, []);
    var stopEvent = React.useCallback(function (event) {
        event.stopPropagation();
    }, []);
    var imgUrlJump = React.useCallback(function (value) {
        if (selectIdList.includes(value)) {
            return checkBoxIconActived;
        }
        else if (someSelectIdList.includes(value)) {
            return checkBoxIconPart;
        }
        else {
            return checkBoxIcon;
        }
    }, [selectIdList, someSelectIdList]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, visible && (React__default["default"].createElement("div", { className: "pop pop-".concat(temp ? "in" : "out"), id: "treePop", style: style },
        React__default["default"].createElement("div", { className: "pop-fixed", onClick: popEvent }),
        React__default["default"].createElement("div", { className: "pop-content", id: "tree-pop-content" },
            React__default["default"].createElement("div", { className: "pop-scroll" }, data.map(function (item) { return (React__default["default"].createElement("div", { className: "pop-scroll-item", key: item.value },
                React__default["default"].createElement("img", { className: "pop-scroll-item-box", onClick: popMoreCheck("check", item), src: imgUrlJump(item.value), alt: "" }),
                React__default["default"].createElement("div", { className: "flex", onClick: popMoreCheck("more", item) },
                    React__default["default"].createElement("div", { className: "pop-scroll-item-title flex webkit-box-wrap line-1" }, item.label),
                    React__default["default"].createElement("img", { className: "pop-scroll-item-more", src: img$1, alt: "" })))); })),
            React__default["default"].createElement("div", { className: "pop-scroll" }, listInfo.secondList.map(function (item) { return (React__default["default"].createElement("div", { className: "pop-scroll-item", key: item.value },
                React__default["default"].createElement("img", { className: "pop-scroll-item-box", onClick: popMoreCheck("check", item), src: imgUrlJump(item.value), alt: "" }),
                React__default["default"].createElement("div", { className: "flex", onClick: popMoreCheck("more", item) },
                    React__default["default"].createElement("div", { className: "pop-scroll-item-title flex webkit-box-wrap line-1" }, item.label),
                    !item.isLeaf && (React__default["default"].createElement("img", { className: "pop-scroll-item-more", src: img$1, alt: "" }))))); })),
            React__default["default"].createElement("div", { className: "pop-scroll" }, listInfo.thirdList.map(function (item) { return (React__default["default"].createElement("div", { className: "pop-scroll-item", key: item.value },
                React__default["default"].createElement("img", { className: "pop-scroll-item-box", onClick: popMoreCheck("check", item), src: imgUrlJump(item.value), alt: "" }),
                React__default["default"].createElement("div", { className: "pop-scroll-item-title flex webkit-box-wrap line-1", onClick: popMoreCheck("more", item) }, item.label))); })))))));
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAEJ9JREFUeF7tnWnIplUZx3+KoYGUC7nU2ASj0oYLRWqpaJpLJe59qFFUaIHSCvSDFlRQ+kGhUoMWUFHrQ24jVi5pik6pIbkEbTrQ4JgbbjWQkh/i39yPPjbPci9nuc59rgtenpeZ51znXP9zfu993+dc59xb4OYKuAJzFdjCtXEFXIH5CjggPjpcgQUKOCA+PFwBB8THgCvQTwG/gvTTzUtVooADUklHe5j9FHBA+unmpSpRwAGppKM9zH4KOCD9dPNSlSjggFTS0R5mPwUckH66ealKFHBAKuloD7OfAg5IP928VCUKOCCVdLSH2U8BB6Sfbl6qEgUckEo62sPsp4AD0k83L1WJAg5IJR3tYfZTwAHpp5uXqkQBB6SSjvYw+ynggPTTzUtVooADUklHe5j9FHBA+unmpSpRwAGppKM9zH4KOCD9dOtaaiWwqvnR79sB2zef07/r32QvAC9OfU7/vh5Y1/zod7eICjggYcXdCfgY8KEpIHYHtgpbzWveXgUemwLm98CvgWci1VedWwdkWJdvDRwIHAQcBew3zF2w0vcDtwD3AGuBV4J5rsyRA9K9w1cAxwGHAIcCO3R3kbTE88CdwF3AGmBD0toLr8wBadeBukUSFMc2n9u2K2buWxsbSG5sPnWL5rZAAQdk8fDQ7dMECj1LjMn07KIrimDRbZjbDAUckNnD4hRgNXBEJaPmNuBq4KpK4m0dpgPyulQ7AwJDP3u1VnBcX3ykgUSgPD2u0PpF44BsgmEChiBx2wSHINGPoKnWagZED9rnAedW2/vtAr8AOB/QA351VisgJzdg7Ftdj/cL+EFAoFzTr3i5pWoDRDNRumqcXm6XZW355c3VRDNgVVhNgJzZwLFLFT0bL8inGkguiVeFHc81AKIH7wubB3E7ypffEj3AnzP22a6xA6J1DMFR67RtbAw1wyVItI4yShszIGc3cIyy44wFJUguMtamIM0ZIyB+SxVkaHR2MspbrrEBcgDwQ7+l6jy4QxXQLdcXgHtDOcztZ0yAnAj8CNgxt6iV1/8c8HngujHoMBZATgM0R+9mRwGtNV1hpzn9WjIGQLS+cXG/8L1UZAXOAopeLykdEOVRKU/Iza4CylxQmkqRVjIgXyr9r1ORI6Zfo3WVv7Rf0bylSgVEByTcnFc6r72jAkc3B0l0LJb36yUCosMSdAiBW3kK6JALHR5RjJUGyP5jmmMvZpSEbajWqu4L6zKet5IA2Ru4CdgtnhzuOYECjwPHAA8nqGtwFaUAovQRJcR50uHgLjfhQCvuSiQ1v++9FECu9HR1EwM7ZCOUu3VqSIcxfJUAiGflxuh5Gz7NZwFbB0SX4Vtt9KW3IpICR1reT2IZEH/uiDQijbk1/TxiGRB/7jA2kiM2x+zziFVAPAEx4mg06tpkYqNFQHQ0j95r4aePGB3JkZql01L0nhVTRwpZBOQyP7cq0hC071Z7es6w1ExrgOjEw59bEsjbklyBT1k6wdESIDor927AjwNNPiZNVahjTg+2chawJUC08ckPkjY1VrM1RhustNEqu1kBRDlWRSSvZe+xehqg5NTsr16wAohOP1RKiZsrMFFAB9EpFSWrWQBEK+a6evjLa7IOBXOVK9NXV5GsGb8WALGajPg14JfAE8C/gHcC72+OM11lbji1a9C65q/yn5u4tmzi0v6M77RzkfRb2ZMZLQCiq4e1fR56u+1v5wwFwaFbwuOTDpXhld3QwCFIZtlHDL7tVs8guopks9yA6N2AyrmyZHu0XM3Veo3WbUowvRlK6wvLTFkMjy77UuL/156RbG/fzQ2IUtktvWq5az5QCZC0hWMy7q3lwWknqVLis1hOQHQbo5wrS/YB4A8dG2QZkq5wKHTdQprKh2pytNZ27JcgX88JiMWp3Z2AZ3soaxGSPnBMQt8AvKOHDrGKZJvyzQXIVoBmUnTPa8m2AV7p2SBLkAyBQ+E/AOhqasV0RXsP8GrqBuUC5CRLCWlTou858CHVAiRD4XgL8FLqgdiiPk2IXNvie0G/kgsQzUqsDhpJGGcnAJoOHWI5IRkKh+LW9PX1QwSIVPbqHCfb5ABkRXN7pexda6Y1As2YzFsraNveHJCEgEMP6JpZtLgQurG5zdLzUTLLAYj1U9l1BdGVZKilhCQEHIpXVw7LC6DJT4nPAYgG4HFDR1/k8qEGXApISmrr0G5bkxrg1IBoluhJYLuhSiUoX8LAK6GNIbvqRWBX4OWQThf5Sg3IJ5sDqFPFN7QeywPQctuG6r6ovBIrfxGzgmnfqQH5LvCVVMEFqsfiQLTYpkByL3XzPeCrS78V6AupAdF+430CtT2lG0sD0lJbUvbBpK6HUp5bkBIQ3Tv+I4eigeq0MDAttCGQnIPcvL15lh3kpE3hlIBYTG1vo9H0d3IO0Jx1d9Up9veTpcCnBOT7gNLJS7ccAzVHnZb76WLgyykamBIQzTx8IkVQCepIOWBT1pVAuiBVaCu0ZkSjW0pAlL377ugRpasgxcBNUUc6xcLV9Jcm7SScxzmeUgLyH0Bp7mOymAM4pu/S+0Bp729KEUQqQFYCf08RUIY6YgzkGD4zSBO1yncB66PWAKQC5KPAHbGDyeg/5IBWGG0OWFgWboo8sGVtiPn/hwG/iVmBfKcC5LPAj2MHk9l/KEhChDF2OKTR54CfhBBrkY9UgHwb0EFsYzcLkNQAh8aRDrr7euwBlQqQS4Evxg7GiP+ckNQCh7r6B4D2FkW1VID8FPh01EhsOc8BSU1wqLd/BnwmdrenAkQLOx+PHYwx/ykhqQ0OdfWvUiw8pwJE59x+2NgATtGcFJDUCIf67neAzhOOaqkA+VOqlc+oavVzHhOSWuFQTygz4739uqR9qVSAKM1d6e61WgxIaoZD40hbt5X2HtVSAfJvQPvRa7aQkNQOh8aR9qW/OfaAckBiK/y6fwckrNajAsRvscKkj0wPsdqvIqO6xfKH9LB/PSfeaoZkVA/pPs0bBxB5rRWSUU3z+kJhPEBqhWRUC4WeahIXkBohGVWqiScrxgekNkhGlazo6e5pAKkJklGlu/uGqXSA1ALJqDZM+ZbbdoBoRkrmW26X6zWqLbd+aMPyDp+erg216j7mKeBRHdqg4eHH/syHZNZAdkjm6zW6Y38Uqh8cN7vDF/2Vd0hmazbKg+P86NHNO7vNLZBDsrluozx61A+vfmNHt4FjUsIheaN2ozy8Whvs9a7rki3nQM1Zt7U+Ww0oOyO6pdoPokB2Ap6OHlG8CiwMUAttiKdwe887A8+0/3r/b6YERK28D9ivf3OzlbQ0MC21JUeH3A/sn6ri1IB8E/hGquAC1WNxQFpsUyC5l7r5FqBxlMRSA6LVz9uTRBamEssD0XLbwqg/28vhKQ9CTw3I1s2LPHeIqWAg3yUMwBLaGKg7/ufm+eYkk1dCOl3kKzUgasu1wImpAuxZT0kDr6S29uyO14pdB5w01EmX8jkA0YHDl3RpZOLv3gCcEKDOLuscQ6sLBcn1wPFDGxOx/JmA9hYlsxyArGjSTrZNFmX7itYBRwL6HGIp4Zi0MwQkq4BbAX1as43N6ZwbUjYsByCK7ypAiz3WTFcOXUGGWA44QkKiK4iuJNZMi8ynpG5ULkB0H6m/eNbsfYCOKOprOeEIBcnbUi3CdRT55Ob5tWOxYV/PBYjedqvs3t2HNT946bcC/+zp1QIcoSD5G7BHTx1iFHusub1SmntSywWIgrwQODtptMsr2w54afnXNvuGJThCQPJXYM8eOsQqchFwTizni/zmBORA4J4cQS+ocy/gjx3bZBGOIZBoEuXxjhrE/vpBwNrYlczynxMQtUczJkfkCHxOnXrR6Pkd2mMZjr6QnNe8ILODDFG/elszsxi1knnOcwOiWYkrs0Q+v1Jd2XRU6jIrAY6ukOiNTVn+Ui8Q+9Rm1nNZf0T5/9yAKKiHAd3aWDI9oOrBcJZpjUDPT5YX1Ga1W9PXuo+ft8ajCZNHLXUC8Aiwd842WQBED+oacNbsrOZFkZMBpQf4Q5u2WlxIa6OfYhEkuko82xTQ6SDHANqlZ83UVj2gZzMLgGjzi64i+rRoTzSDaR+LjRvQJl0ttjS6aq6wtLlOV4+sm+wsACIxLE75Dhh7XjSAAtmmdqfbbgUQPYPoKuLmCkwU0NVDzyBZzQogEkHTq+dmVcMrt6LABYCmm7ObJUCU3Xs3sG92VbwBORV4EDgYUPZudrMEiMRQQtrkAOfs4ngDsiigg7vNJLJaA0Q9chlwepau8UpzK3A5cEbuRkzXbxEQLVgpR2sXS0J5W6Ir8BSgnKt5C7TRGzCrAouAqJ3aWmlx4SpLJ1VSqRZmzW3FtgqIxoRytJLvIKtkMFoLUztMlXNlziwDopV1ZXJay9My14mFN0hrHcrozrpiPk9Dy4CozRJOKfFu41VAh2ToD6FJsw6IRLOazGiyQwtrVPZkxGV6lQCIP48s68Uy/9/sc8e0nKUA4s8jZUIwr9WmnztKBERtPgC4CdhxXGOlumiea/af3FtC5KVcQSZa6kxfne3rVq4COhNNZ+wWYaUBIlFPA5SS4FaeAkohuqKkZpcIiPT1lfaSRtmmtppcKV8mY6mAKC7tHelyRM8yLfz/4ymgvR3a41GclQyIxLb+KoXiBkSEBid/ZUHIGEoHRFocBdwcUhT3FUyBo4FbgnnL4GgMgEi2Q4A7M+jnVc5XQEck3VW6QGMBRP2gVwNrN+JupXdK4e3Xub7aFahXfhdvYwJEnaGTMJQm7xnAeYamVsiVtj6aE2rGBoiGhdJSdM6W7yVJC4lyq5R8aDJtva8UYwRkooVnAfcdFd3Lmc/K7R7SphJjBkTxaT+JriZ+y9V3hCwup1sqwWF2P8fQsMcOiN9yDR0h88uP8pbq/8OtAZBJzFqw0oqun5YyDBqdPqIMBnMHLAwLa3bpmgCRAjpSSJD4uVv9RpOSRAWHqaN5+oXSrlRtgExU0QmOyuXyY07bjRMdB6pcKjMnHrZr9vBv1QqIlNNZwLqa+IHZi8eRwNBVw8RZucOHfDcPNQMyUUozXFoz0Y/Vl/h069Xh39Zahh7C9ZP9FQTDw+nvwQF5XTvBMQGl1mlhwTABY1QLfn0RcUBmKydQVht7RXXfPm5TTusYV+d8m2ybRub4jgOyWHW9EvpY4LhmBixHH8WqUzNRa4AbDb76OVbMnf06IO0k26qBZAKLHvBLND1oT6DQ56slBpGyzQ5Id7VXNLAc1uxD0euhLduLzb6MOxo4NlhurLW2OSDDemQb4HBgAouVV0U/NAXF7cDLw8Kst7QDErbvd22A+WDz/vFVzbOLbtFimG6R9Cyxrvl5ABAQT8aorEafDkiaXl85BYx+123Z9s3n9O/6N9kLgG6NJp/Tv6+fAkK/u0VUwAGJKK67Ll8BB6T8PvQIIirggEQU112Xr4ADUn4fegQRFXBAIorrrstXwAEpvw89gogKOCARxXXX5SvggJTfhx5BRAUckIjiuuvyFXBAyu9DjyCiAg5IRHHddfkKOCDl96FHEFEBBySiuO66fAUckPL70COIqIADElFcd12+Ag5I+X3oEURUwAGJKK67Ll8BB6T8PvQIIirggEQU112Xr4ADUn4fegQRFXBAIorrrstXwAEpvw89gogKOCARxXXX5SvggJTfhx5BRAUckIjiuuvyFfgvSpF850qLFqQAAAAASUVORK5CYII=";

var css_248z$1 = ".badge{display:flex;flex-wrap:wrap;padding:5px 0}.badge-item-wrapper{color:#fff;cursor:pointer;font-size:15px;line-height:26px;position:relative}.badge-item{display:inline-block;margin:2px 10px 2px 0;padding:0 10px}.badge-item-primary{background-color:#e6f7ff;border:thin solid #e6f7ff;color:#1890ff}.badge-item-danger{background-color:#eebdbe;border:thin solid #eeaeaf;color:#bc1414}.badge-item-default{background-color:#f5f5f5;border:thin solid #ccc;color:#333}.badge-item-close{display:none;height:20px;position:absolute;right:5px;top:-5px;width:20px}.badge-item-wrapper:hover>.badge-item-close{display:block}";
styleInject(css_248z$1);

var Badge = function (_a) {
    var list = _a.list, _b = _a.edit, edit = _b === void 0 ? true : _b, _c = _a.badgeStyle, badgeStyle = _c === void 0 ? "default" : _c, onClose = _a.onClose;
    var stopEvent = React.useCallback(function (event) {
        event.stopPropagation();
    }, []);
    return (React__default["default"].createElement("div", { className: "badge" }, list.map(function (item, index) { return (React__default["default"].createElement("div", { className: "badge-item-wrapper", key: index, onClick: stopEvent },
        React__default["default"].createElement("span", { className: ["badge-item ", "badge-item-" + badgeStyle].join("") }, "\n            ".concat(item.first).concat(item.secondId ? "-".concat(item.second) : "").concat(item.thirdId ? "-".concat(item.third) : "", "\n        ")),
        edit && (React__default["default"].createElement("img", { className: "badge-item-close", src: img, alt: "", onClick: function () { return onClose(index); } })))); })));
};

var css_248z = ".multiple-citys-react{position:relative}.multiple-citys-react-badge-wrapper{background-color:#fff;border:1px solid #d9d9d9;border-radius:2px;display:inline-block;font-size:14px;line-height:40px;padding:0 10px;position:relative}.multiple-citys-react-badge-show-placeholder{color:#ccc;display:inline-block;width:200px}";
styleInject(css_248z);

var MultipleCitysReact = function (props) {
    var top = props.top, _a = props.data, data = _a === void 0 ? [] : _a, _b = props.checkList, checkList = _b === void 0 ? [] : _b, _c = props.edit, edit = _c === void 0 ? true : _c, _d = props.placeholder, placeholder = _d === void 0 ? "" : _d, _e = props.badgesWidth, badgesWidth = _e === void 0 ? 500 : _e, checkBoxIcon = props.checkBoxIcon, checkBoxIconActived = props.checkBoxIconActived, checkBoxIconPart = props.checkBoxIconPart, color = props.color, badgeStyle = props.badgeStyle, loadNextLevelData = props.loadNextLevelData, onChange = props.onChange;
    var _f = React.useState(false), visible = _f[0], setVisible = _f[1];
    var treeClick = React.useCallback(function (type) { return function () {
        if (!edit)
            return;
        setVisible(type === "close" ? false : true);
    }; }, [edit]);
    var style = React.useMemo(function () {
        return {
            width: badgesWidth + "px",
        };
    }, [badgesWidth]);
    var TreeChange = React.useCallback(function (list) {
        onChange(list);
    }, []);
    var checkDelete = React.useCallback(function (value) {
        var list = checkList.filter(function (item, index) { return index !== value; });
        onChange(list);
    }, [checkList]);
    return (React__default["default"].createElement("div", { className: "multiple-citys-react" },
        React__default["default"].createElement("div", { className: "multiple-citys-react-badge-wrapper", id: "treeBadgeWrapper", onClick: treeClick("open"), style: style }, checkList.length > 0 ? (React__default["default"].createElement(Badge, { list: checkList, edit: edit, badgeStyle: badgeStyle, onClose: checkDelete })) : (React__default["default"].createElement("span", { className: "multiple-citys-react-badge-show-placeholder" }, placeholder))),
        React__default["default"].createElement(MultipleCitysReactPop, { data: data, visible: visible, checkList: checkList, top: top, checkBoxIconActived: checkBoxIconActived, checkBoxIcon: checkBoxIcon, checkBoxIconPart: checkBoxIconPart, color: color, loadNextLevelData: loadNextLevelData, onClose: treeClick("close"), onChange: TreeChange })));
};

module.exports = MultipleCitysReact;
