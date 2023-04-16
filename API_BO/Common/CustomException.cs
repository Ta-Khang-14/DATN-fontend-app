using System.Net;

namespace API_BO

{
    public class CustomException : Exception
    {
        public HttpStatusCode StatusCode { get; set; }

        public ErrorCode ErrorCode { get; set; } = ErrorCode.UnknowError;

        public CustomException(HttpStatusCode statusCode)
        {
            StatusCode = statusCode;
        }

        public CustomException(ErrorCode errorCode = ErrorCode.UnknowError) : base()
        {
            StatusCode = HttpStatusCode.BadGateway;
            ErrorCode = errorCode;
        }

        public CustomException(string message) : base(message) { }

        public CustomException(string message, Exception innerException) : base(message, innerException) { }
    }

    public class NotFoundException : CustomException
    {
        public NotFoundException(ErrorCode errorCode) : base(errorCode)
        {
            StatusCode = HttpStatusCode.NotFound;
        }
    }

    public class BadRequestException : CustomException
    {
        public BadRequestException(ErrorCode errorCode) : base(errorCode)
        {
            StatusCode = HttpStatusCode.BadRequest;
        }
    }

    public class DupplicateFileUniqueException : CustomException
    {
        public DupplicateFileUniqueException(ErrorCode errorCode) : base(errorCode)
        {
            StatusCode = HttpStatusCode.BadRequest;
        }

    }

    public class AuthenticationException : CustomException
    {
        public AuthenticationException(ErrorCode errorCode) : base(errorCode)
        {
            StatusCode = HttpStatusCode.BadRequest;
        }

    }
}
