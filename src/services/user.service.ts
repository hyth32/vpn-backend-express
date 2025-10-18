import { CreateUserDto } from '../dto/user/create.dto'
import { User } from '../entities/user.entity'
import { userRepository } from '../repositories/user.repository'

export class UserService {
    async createUser(data: CreateUserDto): Promise<User> {
        const user = userRepository.create(data)
        return userRepository.save(user)
    }
}
