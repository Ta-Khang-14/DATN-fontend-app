import { ErrorCode } from './error-code';

export class ResponseAPI {
  data: any;
  success: boolean = false;
  errorCode: ErrorCode = ErrorCode.UnknowError;
  errorMessage: string = '';
}
