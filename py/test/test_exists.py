# ProjectName SDK exists test

import pytest
from chucknorrisjokes_sdk import ChuckNorrisJokesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ChuckNorrisJokesSDK.test(None, None)
        assert testsdk is not None
