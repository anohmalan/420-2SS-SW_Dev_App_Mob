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
        }else{
            this.#recipes = null
        }

        return this.#recipes;
    } 

    async add(recipe){
        const response = await fetch(
        'http://martha.jh.shawinigan.info/queries/insert-recipe/execute',{
            method: 'POST',
            headers: {
            auth: this.#AUTH,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            category: recipe.category,
            name: recipe.name,
            duration_hours: recipe.duration_hours,
            duration_minutes: recipe.duration_minutes,
            description: recipe.description,
            user_id: this.#currentUser,
            }),
        }).then((r) => r.json())

        return response;
    }

    async update(recipe){
        const response = await fetch(
        'http://martha.jh.shawinigan.info/queries/update-recipe/execute',{
            method: 'POST',
            headers: {
            auth: this.#AUTH,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            category: recipe.category,
            name: recipe.name,
            duration_hours: recipe.duration_hours,
            duration_minutes: recipe.duration_minutes,
            description: recipe.description,
            id: recipe.id,
            user_id: this.#currentUser,
            }),
        }).then((r) => r.json())

        return response;
    }

    async delete(recipe){
        const response = await fetch(
        'http://martha.jh.shawinigan.info/queries/delete-recipe/execute',{
            method: 'POST',
            headers: {
            auth: this.#AUTH,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: recipe.id,
                user_id: this.#currentUser
            }),
        }).then((r) => r.json())

        return response;
    }
  
}

// const recipe = new RecipeService();
// export default recipe;