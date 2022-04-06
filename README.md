# multiple-citys-react

This is multiple-citys-react components，Support multiple selection components of provinces and cities（支持省市区多选组件）
## node version
```
 had better > 16 

```
## how to use

```
yarn add @banyinbanying/multiple-citys-react or npm i @banyinbanying/multiple-citys-react

```

### then you add this line in your component or page

```
import MultipleCitysReact from "@banyinbanying/multiple-citys-react";

```

### after you can use it in component like this,for more message you can refer to demo code

```
 <MultipleCitysReact
        data={addressList}
        checkList={checkList}
        loadNextLevelData={loadNextLevelData}
        onChange={multipleChange}
/>

```

### 示例图片

![image](https://github.com/zhaochengxian/multiple-citys-react/blob/72b1774fdd64c1496b0f50d53f6940508f5c8090/example/assets/1.png)

### Props

The component provides the following variables

| Name               | Type                                  | Default Value  | Description                          |
| ------------------ | ------------------------------------- | -------------- | ------------------------------------ |
| data               | Array                                 | -              | 省市区 json                          |
| checkList          | Array                                 | -              | 选中的列表                           |
| top                | boolean                               | bottom         | pop 的位置展示上面还是下面，默认下面 |
| checkBoxIconActive | String                                | -              | 全部选中的 icon ,png                 |
| checkBoxIcon       | String                                | -              | 没有选中的 icon,png                  |
| checkBoxIconPart   | String                                | -              | 部分选中的 icon,png                  |
| color              | String                                | #232323        | 字体颜色                             |
| placeholder        | String                                | '请选择省市区' | 输入框提示                           |
| badgesWidth        | number                                | 500            | 输入框的宽度                         |
| badgeStyle         | enum 'primary' , 'danger' , 'default' | 'default'      | -                                    |
| loadNextLevelData  | function                              | -              | 获取下一级数据，2 和 3 级            |
| onChange           | function                              | -              | 选择变化时候触发                     |

### data json format

```
 {
        value: 110000,
        parentId: 0,
        label: '北京市',
        lay: 1,
        isLeaf: false,
        children: [
            {
                value: 110100,
                parentId: 110000,
                label: '市辖区',
                lay: 2,
                isLeaf: false,
                children: [
                    {
                        value: 110119,
                        parentId: 110100,
                        label: '延庆区',
                        lay: 3,
                        isLeaf: true
                    }
                ]
            }
        ]
    }

```

### Matching selection components（city-tables）示范图片

![image](https://github.com/zhaochengxian/cityTable/blob/16250a33d0dec558739b20ebf475d53008e33f93/examples/assets/demo-img.jpeg)

### the code and the demo of city-tables

[github](https://github.com/zhaochengxian/cityTable).
