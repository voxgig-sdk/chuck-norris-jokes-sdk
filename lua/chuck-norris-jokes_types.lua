-- Typed models for the ChuckNorrisJokes SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Category

---@class CategoryListMatch

---@class Joke
---@field categories? table
---@field icon_url string
---@field id string
---@field url string
---@field value string

---@class JokeListMatch
---@field categories? table
---@field icon_url? string
---@field id? string
---@field url? string
---@field value? string

---@class Search
---@field categories? table
---@field icon_url string
---@field id string
---@field url string
---@field value string

---@class SearchListMatch
---@field categories? table
---@field icon_url? string
---@field id? string
---@field url? string
---@field value? string

local M = {}

return M
