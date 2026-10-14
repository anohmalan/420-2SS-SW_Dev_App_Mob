import Recipe from '../models/recipe'
import { encode } from 'base-64'
import * as VAR from './var_env'
import auth from './auth'

export class RecipeService{
    #currentUser = auth.currentUser.id
    #recipes = null

    #AUTH = encode(`${VAR.MARTHA_USERNAME}:${VAR.MARTHA_PASSWORD}`);

    async selectAll(){
        const response = await fetch(
        'http://martha.jh.shawinigan.info/queries/select-recipes/execute',{
            method: 'POST',
            headers: {
            auth: this.#AUTH,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            id: this.#currentUser,
            }),
        }).then((r) => r.json())

        if (response.success) {

            this.#recipes = response.data.map((item) => new Recipe({
            id: item.id,
            category: item.category,
            name: item.name,
            duration_hours: item.duration_hours,
            duration_minutes: item.duration_minutes,
            description: item.description,
            }));
            console.log(JSON.stringify(this.#recipes))
        }else{

            throw new Error('Impossible de récupérer les recettes');

        }

        return this.#recipes;
    }
  
}