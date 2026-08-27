// Typed models for the ChuckNorrisJokes SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Category {
}

export interface CategoryListMatch {
}

export interface Joke {
  categories?: any[]
  icon_url: string
  id: string
  url: string
  value: string
}

export interface JokeListMatch {
  category?: string

  // Selects a custom action instead of the plain list:
  //   'random'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Search {
  categories?: any[]
  icon_url: string
  id: string
  url: string
  value: string
}

export interface SearchListMatch {
  query: string
}

