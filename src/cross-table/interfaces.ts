import React, { ReactNode } from 'react'
import { DvtTableStaticColumnConfig } from '../interfaces'

export interface CrossTableIndicator extends DvtTableStaticColumnConfig {
  code: string
  expression?: string
}

// hidden 和 lock 是固定的，故从 DvtTableStaticColumnConfig 中排除
export interface CrossTableLeftMetaColumn extends Omit<DvtTableStaticColumnConfig, 'hidden' | 'lock'> {
  /** 自定义渲染方法 */
  render?(leftNode: LeftCrossTreeNode, leftDepth: number): ReactNode

  /** 自定义的获取单元格 props 的方法 */
  getCellProps?(leftNode: LeftCrossTreeNode, leftDepth: number): React.TdHTMLAttributes<HTMLTableCellElement>
}

export interface CrossTreeNode {
  key: string
  value: string
  title?: ReactNode
  data?: any
  hidden?: boolean
  children?: CrossTreeNode[]
}

/** 交叉表左侧树状结构的树节点 */
export interface LeftCrossTreeNode extends CrossTreeNode {
  children?: CrossTreeNode[]
}

/** 交叉表上方树状结构的树节点
 * 列的名称现由 value 字段提供，故从 DvtTableStaticColumnConfig 移除了 name 字段 */
export interface TopCrossTreeNode extends CrossTreeNode, Omit<DvtTableStaticColumnConfig, 'name'> {
  children?: TopCrossTreeNode[]
}