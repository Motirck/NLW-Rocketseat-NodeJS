interface IErrorHandler {
  name: string;
  statusCode: number;
  message: string;
  description: string
}

class ErrorHandler extends Error {

  statusCode: number
  description: string

  constructor({ message, name, description, statusCode }: IErrorHandler) {
   super(message)
   this.name = name,
   this.description = description
   this.statusCode = statusCode
  }
}

export { ErrorHandler }