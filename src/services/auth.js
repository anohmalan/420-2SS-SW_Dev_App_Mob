import User from '../models/user'
import martha from './martha'

export class AuthService {
    #currentUser = null 

    get currentUser() {
        return this.#currentUser
    }

    set currentUser(value){
        this.#currentUser = value
    }

    async signUp(credentials) {
        this.#currentUser = null
        const response = await martha.execute('insert-user', credentials)

        if (!response.success) {
            const usernameExists = typeof response.error === 'string'
                && /\b1062\b/.test(response.error)
                && /for key ['"`]username['"`]/.test(response.error)

            return {
                success: false,
                error: usernameExists
                    ? "Ce nom d'utilisateur est déjà utilisé"
                    : "Erreur lors de la création du compte",
            }
        }

        this.#currentUser = new User({ id: response.lastInsertId, username: credentials.username })
        return { success: true }
    }

    async logIn(credentials) {
        const response = await martha.execute('select-user-auth', credentials)

        if (response.success && response.data.length == 1)  {
            const user = response.data[0]

            this.#currentUser = new User({ id: user.id, username: user.username })
        } else {
            this.#currentUser = null
        }

        return !!this.#currentUser
    }

    logOut() {       
        this.currentUser = null
        console.log('AuthService :', this.currentUser);
    }

}

const auth = new AuthService();
export default auth;