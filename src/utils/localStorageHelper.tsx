import { Itodo } from 'components/todo/TodoService';

const localStorageHelper: IlocalStorageHelper = {
  getItem: key => {
    const data: string | null = localStorage.getItem(key);
    return data && JSON.parse(data);
  },
  setItem: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
};
interface IlocalStorageHelper {
  getItem: (key: string) => Itodo[] | null;
  setItem: (key: string, data: any) => void;
}
export default localStorageHelper;
