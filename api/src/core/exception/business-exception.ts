import { HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';

export class BusinessException extends Error {
  public status: HttpStatus;
  public message: string;
  public statusCode: string;
  public errorCode: string;
  public trackId: string;
  constructor(
    message: string,
    statusCode?: string,
    errorStatus?: HttpStatus,
    errorCode?: string,
  ) {
    super(message);
    this.message = message;
    this.status = errorStatus || HttpStatus.BAD_REQUEST;
    this.statusCode = statusCode ?? '';
    this.errorCode = errorCode ?? '';
    this.trackId = randomUUID();
  }
}
