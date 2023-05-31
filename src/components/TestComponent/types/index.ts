export interface BaseEmits {
  (e: 'input-event', value: string): void;
  (e: 'change-event', value: string): void;
}
