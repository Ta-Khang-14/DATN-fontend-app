using System.Net;

namespace API_BO
{
    public class ServiceResult
    {
        public bool Success { get; set; }

        public object? Data { get; set; }

        public HttpStatusCode? StatusCode { get; set; }

        public ErrorCode ErrorCode { get; set; }

        public string? ErrorMessage { get; set; }

        public ServiceResult(bool success, object data, HttpStatusCode statusCode, string errorMessage, ErrorCode errorCode)
        {
            Success = success;
            Data = data;
            StatusCode = statusCode;
            ErrorMessage = errorMessage;
            ErrorCode = errorCode;
        }

        public ServiceResult(bool success, object data)
        {
            Success = success;
            Data = data;
        }

        public ServiceResult()
        {
            Success = true;
            StatusCode = HttpStatusCode.OK;
        }

        public void SetError(HttpStatusCode statusCode = HttpStatusCode.BadGateway, string errorMessage = "Unknown Error", ErrorCode errorCode = ErrorCode.UnknowError)
        {
            Success = false;
            Data = null;
            ErrorCode = errorCode;
            StatusCode = statusCode;
            ErrorMessage = errorMessage;

        }

        public void SetErrorException(CustomException e)
        {
            Success = false;
            Data = null;
            StatusCode = e.StatusCode;
            ErrorMessage = e.Message;
        }
    }
}
