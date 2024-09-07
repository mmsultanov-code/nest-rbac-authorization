import { Body, Controller, HttpCode, HttpExceptionOptions, HttpStatus, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { ResponseUserLoginDTO } from './dto/response-user-login.dto';
import { CreateUserDTO } from '../users/dto/create-user.dto';
import { EventPattern } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    /**
     * Signs in a user.
     *
     * @param {SignInDTO} SignInDTO - The sign-in data.
     * @returns {Promise<any>} - A promise that resolves with the result of the sign-in operation.
    */
    @EventPattern('sign_in')
    async sign_in(@Body() SignInDTO: SignInDTO): Promise<ResponseUserLoginDTO | HttpExceptionOptions> {
        const response = await this.authService.sign_in(SignInDTO.email, SignInDTO.password);
        if (response instanceof UnauthorizedException) {
            return response;
        }
        return new ResponseUserLoginDTO(response);
    }

    /**
     * Signs up a user.
     *
     * @param {CreateUserDTO} signUpDTO - The sign-up data.
     * @returns {Promise<any>} - A promise that resolves with the result of the sign-up operation.
    */
   @EventPattern('sign_up')
    async sign_up(@Body() signUpDTO: CreateUserDTO): Promise<ResponseUserLoginDTO> {
        const response = await this.authService.sign_up(signUpDTO);
        return response
    }

}
