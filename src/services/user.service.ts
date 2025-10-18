import { CreateUserDto } from '../dto/user/create.dto'
import { userRepository } from '../repositories/user.repository'

export class UserService {
    async createUser(data: CreateUserDto) {
        const user = userRepository.create(data)
        return userRepository.save(user)
    }
}
