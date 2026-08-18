package = "voxgig-sdk-chuck-norris-jokes"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/chuck-norris-jokes-sdk.git",
  tag = "lua/v0.0.1",
  dir = "chuck-norris-jokes-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Chuck Norris Jokes public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/chuck-norris-jokes-sdk",
  issues_url = "https://github.com/voxgig-sdk/chuck-norris-jokes-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "chuck-norris-jokes" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["chuck-norris-jokes_sdk"] = "chuck-norris-jokes_sdk.lua",
    ["config"] = "config.lua",
    ["config_shared"] = "config_shared.lua",
    ["features"] = "features.lua",
  }
}
