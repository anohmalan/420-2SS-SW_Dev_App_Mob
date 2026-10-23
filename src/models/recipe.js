import { CATEGORIES } from '../constants/index'

export default class Recipe {
  #id;

  constructor(recipe = null) {
    this.#id = recipe?.id ?? null
    this.category = recipe?.category ?? null
    this.name = recipe?.name ?? null
    this.duration_hours = recipe?.duration_hours ?? null
    this.duration_minutes = recipe?.duration_minutes ?? null
    this.description = recipe?.description ?? null
  }

  static getCategoryOptions(color) {
    return CATEGORIES.map((meal, index) => ({
      id: index + 1,
      label: meal.label,
      value: meal.value,
      color,
    }))
  }

  validate() {
    if ((this.name ?? '') === '') {
      return 'Nom requis'
    }
    if (!this.category) {
      return 'Catégorie requise'
    }
    if ((this.duration_hours ?? 0) + (this.duration_minutes ?? 0) <= 0) {
      return 'Durée supérieure à zéro requise'
    }
    return null
  }

  get id() {
    return this.#id
  }

  set id(value) {
    this.#id = value
  }

  toJSON() {
    return {
      id: this.#id,
      ...this
    }
  }

}