import Recipe from '../models/recipe'
import { encode } from 'base-64'
import * as VAR from './var_env'
import auth from './auth'

export class RecipeService{
    #currentUser = auth.currentUser.id

    #AUTH = encode(`${VAR.MARTHA_USERNAME}:${VAR.MARTHA_PASSWORD}`);

    async selectAll(){
        const response = await fetch(
        'http://martha.jh.shawinigan.info/queries/select-recipes/execute',
        {
            method: 'POST',
            headers: {
            auth: this.#AUTH,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            id: this.#currentUser,
            }),
        }
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
        throw new Error('Impossible de récupérer les recettes');
        }

        return result.data;
    }
      
    

  
}