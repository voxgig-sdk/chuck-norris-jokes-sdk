-- ChuckNorrisJokes SDK exists test

local sdk = require("chuck-norris-jokes_sdk")

describe("ChuckNorrisJokesSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
