# ChuckNorrisJokes SDK utility: make_context

from chucknorrisjokes_sdk.core.context import ChuckNorrisJokesContext


def make_context_util(ctxmap, basectx):
    return ChuckNorrisJokesContext(ctxmap, basectx)
