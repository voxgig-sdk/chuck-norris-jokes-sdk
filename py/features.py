# ChuckNorrisJokes SDK feature factory

from feature.base_feature import ChuckNorrisJokesBaseFeature
from feature.test_feature import ChuckNorrisJokesTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ChuckNorrisJokesBaseFeature(),
        "test": lambda: ChuckNorrisJokesTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
