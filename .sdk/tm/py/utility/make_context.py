# ChuckNorrisJokes SDK utility: make_context

from core.context import ChuckNorrisJokesContext


def make_context_util(ctxmap, basectx):
    return ChuckNorrisJokesContext(ctxmap, basectx)
