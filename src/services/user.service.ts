import { userRepository } from '../repositories/user.repository'

export class UserService {
    async createUser(data: { telegramId: string; name?: string; username?: string }) {
        const user = userRepository.create(data)
        return userRepository.save(user)
    }
}
