# frozen_string_literal: true

# Typed models for the ChuckNorrisJokes SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Category entity data model.
class Category
end

# Match filter for Category#list (any subset of Category fields).
class CategoryListMatch
end

# Joke entity data model.
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] icon_url
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] value
#   @return [String]
Joke = Struct.new(
  :category,
  :icon_url,
  :id,
  :url,
  :value,
  keyword_init: true
)

# Match filter for Joke#list (any subset of Joke fields).
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] icon_url
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
JokeListMatch = Struct.new(
  :category,
  :icon_url,
  :id,
  :url,
  :value,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] icon_url
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] value
#   @return [String]
Search = Struct.new(
  :category,
  :icon_url,
  :id,
  :url,
  :value,
  keyword_init: true
)

# Match filter for Search#list (any subset of Search fields).
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] icon_url
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
SearchListMatch = Struct.new(
  :category,
  :icon_url,
  :id,
  :url,
  :value,
  keyword_init: true
)

