export enum ErrorCode {
  // Lỗi không xác định
  UnknowError = 0,

  // Lỗi exists dữ liệu
  DuplicateField = 1,

  // Lỗi validate fail
  ValidateFail = 2,

  // Xác thực lỗi
  ErrorValidation = 3,

  // Thiếu dữ liệu đầu vào
  MissingInputValue = 4,

  // Sai tài khoản mật khẩu
  WrongPasswordOrUserName = 5,
}
