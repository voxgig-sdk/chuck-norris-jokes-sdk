# ChuckNorrisJokes SDK utility: make_context

from projectname_sdk.core.context import ChuckNorrisJokesContext


def make_context_util(ctxmap, basectx):
    return ChuckNorrisJokesContext(ctxmap, basectx)
