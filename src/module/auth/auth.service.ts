import { Injectable, Res, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { UsersService } from '../users/users.service'
import { ResponseUserLoginInterface } from './interface/response-user-login.interface'
import { RegisterUserDTO } from './dto/register-user.dto'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async sign_in(email: string, password: string): Promise<ResponseUserLoginInterface> {
        const user = await this.usersService.findOne(email)
        if (!user) {
            throw new UnauthorizedException()
        }
        const isMatch = await bcrypt.compare(password, user.dataValues.password)

        if (!isMatch) {
            throw new UnauthorizedException()
        }
        const payload = { sub: user.id, username: user.first_name, role: user.role.slug }
        const { password: _, ...result } = user
        return { ...result.dataValues, access_token: this.jwtService.sign(payload) }
    }

    async sign_up(RegisterUserDTO: RegisterUserDTO): Promise<any> {
        const user = await this.usersService.register(RegisterUserDTO)
        const auth = await this.sign_in(user.email, RegisterUserDTO.password)
        return auth
    }
}
