export class LocalStorage {
  static setLocalStorage(key: string = '', value: string = '') {
    if (key) {
      sessionStorage.setItem('Foodio_' + key, value);
    }
  }

  static getLocalStorage(key: string) {
    let value = sessionStorage.getItem('Foodio_' + key);
    return value;
  }

  static delLocalStorage(key: string) {
    sessionStorage.removeItem('Foodio_' + key);
  }
}
