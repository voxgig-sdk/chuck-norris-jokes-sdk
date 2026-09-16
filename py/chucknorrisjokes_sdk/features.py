# ChuckNorrisJokes SDK feature factory

from chucknorrisjokes_sdk.feature.base_feature import ChuckNorrisJokesBaseFeature
from chucknorrisjokes_sdk.feature.ratelimit_feature import ChuckNorrisJokesRatelimitFeature
from chucknorrisjokes_sdk.feature.retry_feature import ChuckNorrisJokesRetryFeature
from chucknorrisjokes_sdk.feature.test_feature import ChuckNorrisJokesTestFeature
from chucknorrisjokes_sdk.feature.timeout_feature import ChuckNorrisJokesTimeoutFeature


_FEATURES = {
    "base": lambda: ChuckNorrisJokesBaseFeature(),
    "ratelimit": lambda: ChuckNorrisJokesRatelimitFeature(),
    "retry": lambda: ChuckNorrisJokesRetryFeature(),
    "test": lambda: ChuckNorrisJokesTestFeature(),
    "timeout": lambda: ChuckNorrisJokesTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
