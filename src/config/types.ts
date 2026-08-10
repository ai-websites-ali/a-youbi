export type ContentStatus =
  | "verified"
  | "placeholder"
  | "client-confirmation";

export type WithStatus<T> = T & {
  status: ContentStatus;
};
