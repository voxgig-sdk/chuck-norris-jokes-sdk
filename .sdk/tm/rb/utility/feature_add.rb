# ChuckNorrisJokes SDK utility: feature_add
module ChuckNorrisJokesUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
