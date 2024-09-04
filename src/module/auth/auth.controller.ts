import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { ResponseUserLoginDTO } from './dto/response-user-login.dto';

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
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async sign_in(@Body() SignInDTO: SignInDTO): Promise<ResponseUserLoginDTO> {
        const response = await this.authService.sign_in(SignInDTO.email, SignInDTO.password);
        return new ResponseUserLoginDTO(response);
    }

}
