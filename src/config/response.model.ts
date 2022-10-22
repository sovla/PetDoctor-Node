import { HttpStatusCode } from 'axios';
import { response } from 'express';
export default class ResponseModel<T> {
  errorMessage: string;
  errorCode: number;
  data: any;

  constructor({
    data,
    errorCode,
    errorMessage,
  }: {
    data: any;
    errorCode: number;
    errorMessage: string;
  }) {
    this.data = data;
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }

  return() {
    return JSON.stringify({
      errorCode: this.errorCode,
      errorMessage: this.errorMessage,
      data: this.data,
    });
  }
}
