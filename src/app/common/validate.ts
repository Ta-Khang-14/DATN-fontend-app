export class Validate {
  static validateEmail(value: string) {
    let template = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z]{2,5})$/;
    return template.test(value);
  }

  static validatePassword(value: string) {
    if (!value || value.length < 4) {
      return false;
    }
    return true;
  }
}
