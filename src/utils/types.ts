export interface Memory {
  image: string;
  note: string;
}

export interface GiftBoxProps {
  onOpen: () => void;
}

export interface AnimationConfig {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition?: Record<string, unknown>;
}