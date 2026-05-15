-- ChuckNorrisJokes SDK error

local ChuckNorrisJokesError = {}
ChuckNorrisJokesError.__index = ChuckNorrisJokesError


function ChuckNorrisJokesError.new(code, msg, ctx)
  local self = setmetatable({}, ChuckNorrisJokesError)
  self.is_sdk_error = true
  self.sdk = "ChuckNorrisJokes"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ChuckNorrisJokesError:error()
  return self.msg
end


function ChuckNorrisJokesError:__tostring()
  return self.msg
end


return ChuckNorrisJokesError
