// Typed models for the ChuckNorrisJokes SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Category {
}

export type CategoryListMatch = Partial<Category>

export interface Joke {
  category?: any[]
  icon_url: string
  id: string
  url: string
  value: string
}

export type JokeListMatch = Partial<Joke>

export interface Search {
  category?: any[]
  icon_url: string
  id: string
  url: string
  value: string
}

export type SearchListMatch = Partial<Search>

