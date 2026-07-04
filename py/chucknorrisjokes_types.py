# Typed models for the ChuckNorrisJokes SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Category(TypedDict):
    pass


class CategoryListMatch(TypedDict):
    pass


class JokeRequired(TypedDict):
    icon_url: str
    id: str
    url: str
    value: str


class Joke(JokeRequired, total=False):
    category: list


class JokeListMatch(TypedDict, total=False):
    category: list
    icon_url: str
    id: str
    url: str
    value: str


class SearchRequired(TypedDict):
    icon_url: str
    id: str
    url: str
    value: str


class Search(SearchRequired, total=False):
    category: list


class SearchListMatch(TypedDict, total=False):
    category: list
    icon_url: str
    id: str
    url: str
    value: str
