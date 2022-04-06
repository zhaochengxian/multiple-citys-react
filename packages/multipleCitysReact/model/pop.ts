import { MultipleItem } from "./index"

export interface AddressType {
    value: number
    label: string
    title?: string
    key?: string
    parentId: number
    lay: number
    isLeaf: boolean
    loading?: boolean
    children?: AddressType[]
}
export interface MultipleCitysReactPopModel {
    data: AddressType[]
    checkList: MultipleItem[]
    visible: boolean
    top: boolean
    checkBoxIconActived: string
    checkBoxIcon: string
    checkBoxIconPart: string
    color: string
    loadNextLevelData: Function
    onClose: () => void
    onChange: (list: MultipleItem[]) => void
}