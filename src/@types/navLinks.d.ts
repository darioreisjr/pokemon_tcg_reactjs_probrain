export interface NavLink {
  to: string;
  label: string;
  target?: string;
}

export interface NavLinksProps {
  closeMenu?: () => void;
}
