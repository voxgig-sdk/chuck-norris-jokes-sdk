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
  category?: any[]
  icon_url: string
  id: string
  url: string
  value: string
}

export interface JokeListMatch {
  category?: any[]
  icon_url?: string
  id?: string
  url?: string
  value?: string
}

export interface Search {
  category?: any[]
  icon_url: string
  id: string
  url: string
  value: string
}

export interface SearchListMatch {
  category?: any[]
  icon_url?: string
  id?: string
  url?: string
  value?: string
}

