import { SETCOLORINFO, SETSIZEINFO } from './constant';

export const setColorInfo = (payload) => ({
  type: SETCOLORINFO,
  payload
});

export const setSizeInfo = (payload) => ({
  type: SETSIZEINFO,
  payload
});
