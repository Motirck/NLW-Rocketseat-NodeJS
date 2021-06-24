interface IErrorHandler {
  name: string;
  statusCode: number;
  message: string;
  description: string
}

class ErrorHandler {
  name: string;
  message: string;
  statusCode: number
  description: string

  constructor({ message, name, description, statusCode }: IErrorHandler) {
    this.name = name;
    this.message = message;
    this.description = description;
    this.statusCode = statusCode;
  }
}

export { ErrorHandler }