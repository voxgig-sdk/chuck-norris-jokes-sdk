package = "voxgig-sdk-chuck-norris-jokes"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/chuck-norris-jokes-sdk.git"
}
description = {
  summary = "ChuckNorrisJokes SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["chuck-norris-jokes_sdk"] = "chuck-norris-jokes_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
