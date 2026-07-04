# Typed models for the ChuckNorrisJokes SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Category:
    pass


@dataclass
class CategoryListMatch:
    pass


@dataclass
class Joke:
    icon_url: str
    id: str
    url: str
    value: str
    category: Optional[list] = None


@dataclass
class JokeListMatch:
    category: Optional[list] = None
    icon_url: Optional[str] = None
    id: Optional[str] = None
    url: Optional[str] = None
    value: Optional[str] = None


@dataclass
class Search:
    icon_url: str
    id: str
    url: str
    value: str
    category: Optional[list] = None


@dataclass
class SearchListMatch:
    category: Optional[list] = None
    icon_url: Optional[str] = None
    id: Optional[str] = None
    url: Optional[str] = None
    value: Optional[str] = None

