export interface IButton {
  label: string
  size: 'sm' | 'md' | 'lg'
  type: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger'
  raised: boolean
}
