import { ERROR_MESSAGE } from 'utils/constants';
const validationCheck = (value: string) => {
  if (!value.trim().length) return ERROR_MESSAGE.MIN;
  if (value.length >= 200) return ERROR_MESSAGE.MAX;
  return null;
};
export default validationCheck;
