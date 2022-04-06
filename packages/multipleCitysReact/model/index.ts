import { AddressType } from "./pop"
import { BadgeStyle } from "./badge"

export interface MultipleItem {
    firstId: number
    first: string
    secondId?: number
    second?: string
    thirdId?: number
    third?: string
}
interface MultipleCitysReactCom {
    data: AddressType[]
    checkList: MultipleItem[]
    top?: boolean
    checkBoxIconActived?: string
    checkBoxIcon?: string
    checkBoxIconPart?: string
    color?: string
    onChange: (list: MultipleItem[]) => void
}

export interface MultipleCitysReactPopModel extends MultipleCitysReactCom {
    visible: boolean
    loadNextLevelData: Function
    onClose: () => void

}

export interface MultipleCitysReactModel extends MultipleCitysReactCom {
    edit?: boolean
    placeholder: string
    badgesWidth?: number
    badgeStyle?: BadgeStyle
    loadNextLevelData: Function

}