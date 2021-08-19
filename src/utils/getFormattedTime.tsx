import getKST from './getKST';
import { TIME_FORMAT } from 'utils/constants';

const getFormattedTime = (format: 'en-US' | 'ko-KR') => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedKST = getKST().toLocaleDateString(format, options);
  return format === TIME_FORMAT['EN']
    ? formattedKST.replace(',', '')
    : formattedKST;
};
export default getFormattedTime;
