import Recipe from '../models/recipe'
import martha from './martha'
import auth from './auth'

export class RecipeService{
    #currentUser = auth.currentUser.id
    #recipes = null

    async selectAll(){
        const response = await martha.execute('select-recipes', {
            id: this.#currentUser,
        })

        if (response.success) {
            this.#recipes = response.data.map((item) => new Recipe(item));
        }else{
            this.#recipes = null
        }

        return this.#recipes;
    } 

    async add(recipe){
        return martha.execute('insert-recipe', {
            ...new Recipe(recipe),
            user_id: this.#currentUser,
        })
    }

    async update(recipe){
        return martha.execute('update-recipe', {
            ...new Recipe(recipe),
            id: recipe.id,
            user_id: this.#currentUser,
        })
    }

    async delete(recipe){
        return martha.execute('delete-recipe', {
            id: recipe.id,
            user_id: this.#currentUser,
        })
    }
  
}