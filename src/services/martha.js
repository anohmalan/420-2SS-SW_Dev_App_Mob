import { encode } from 'base-64'

const BASE_URL = 'http://martha.jh.shawinigan.info/queries'

export class MarthaService {
    #AUTH = encode(`${process.env.EXPO_PUBLIC_MARTHA_USERNAME}:${process.env.EXPO_PUBLIC_MARTHA_PASSWORD}`);

    async execute(query, body = {}) {
        const response = await fetch(`${BASE_URL}/${query}/execute`, {
            method: 'POST',
            headers: {
                auth: this.#AUTH,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        return response.json()
    }
}

const martha = new MarthaService();
export default martha;
