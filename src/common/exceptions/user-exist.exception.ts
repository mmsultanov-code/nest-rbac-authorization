import { HttpException, HttpStatus } from '@nestjs/common';

export class UserExistsException extends HttpException {
    constructor(message: string = 'User already exists') {
        super(message, HttpStatus.CONFLICT);  // Код 409 — конфликт
    }
}