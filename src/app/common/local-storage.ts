export class LocalStorage {
  static setLocalStorage(key: string = '', value: string = '') {
    if (key) {
      localStorage.setItem('Foodio_' + key, value);
    }
  }

  static getLocalStorage(key: string) {
    let value = localStorage.getItem('Foodio_' + key);
    return value;
  }
}
