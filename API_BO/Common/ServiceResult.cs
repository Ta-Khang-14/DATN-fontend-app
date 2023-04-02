using System.Net;

namespace API_BO
{
    public class ServiceResult
    {
        public bool Success { get; set; }

        public object? Data { get; set; }

        public HttpStatusCode? StatusCode { get; set; }

        public string? ErrorMessage { get; set; }

        public ServiceResult(bool success, object data, HttpStatusCode statusCode, string errorMessage)
        {
            Success = success;
            Data = data;
            StatusCode = statusCode;
            ErrorMessage = errorMessage;
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

        public void SetError(HttpStatusCode statusCode = HttpStatusCode.BadGateway, string errorMessage = "Unknown Error")
        {
            Success = false;
            Data = null;
            StatusCode = statusCode;
            ErrorMessage = ErrorMessage;

        }
    }
}
