export interface IncrementCountAction {
  readonly type: 'COUNTER_INCREMENT';
}

export interface DecrementCountAction {
  readonly type: 'COUNTER_DECREMENT';
}

export type Action = | IncrementCountAction | DecrementCountAction
