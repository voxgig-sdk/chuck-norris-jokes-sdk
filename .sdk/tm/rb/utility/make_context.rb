# ChuckNorrisJokes SDK utility: make_context
require_relative '../core/context'
module ChuckNorrisJokesUtilities
  MakeContext = ->(ctxmap, basectx) {
    ChuckNorrisJokesContext.new(ctxmap, basectx)
  }
end
