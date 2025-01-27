export class AppError extends Error {
  public statusCode: number;
  public details?: any;
  
  constructor(message: any, statusCode: number = 500, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = "AppError";
  }
}
