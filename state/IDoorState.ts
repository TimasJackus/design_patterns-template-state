export interface IDoorState {
  open(): void;
  close(): void;
  lock(): void;
  unlock(): void;
}
