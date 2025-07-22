type MenuBaseInfo = {
  key: string
  icon: string
  name: string
}

interface MenuMapInfo {
  key: string,
  icon: string,
  name: string
  path: string,
  points: string[]
}

interface MenuTree {
  [key: string]: MenuTree
}

interface MenuItem {
  key: string
  icon: string
  name: string
  path: string // 路徑
  points: string[] // 節點
  isOpen: boolean
  canOpen: boolean
  children: MenuItem[]
}