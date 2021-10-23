import { ActionInterface } from './reducersInterface';

const reducers = {
  default: (state:number) => state,
  ADD_TO_COUNT: (state:number, payload:number) => state + payload,
  SUBSTRACT_FROM_COUNT: (state:number, payload:number) => state - payload,
};

export const countReducer = (state:number, action: ActionInterface):void => (reducers[action.type]
  || reducers.default)(state = 0, action.payload);
