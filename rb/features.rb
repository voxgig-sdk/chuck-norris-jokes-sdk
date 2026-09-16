# ChuckNorrisJokes SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ChuckNorrisJokesFeatures
  def self.make_feature(name)
    case name
    when "base"
      ChuckNorrisJokesBaseFeature.new
    when "ratelimit"
      ChuckNorrisJokesRatelimitFeature.new
    when "retry"
      ChuckNorrisJokesRetryFeature.new
    when "test"
      ChuckNorrisJokesTestFeature.new
    when "timeout"
      ChuckNorrisJokesTimeoutFeature.new
    else
      ChuckNorrisJokesBaseFeature.new
    end
  end
end
