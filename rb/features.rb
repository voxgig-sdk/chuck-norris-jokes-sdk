# ChuckNorrisJokes SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ChuckNorrisJokesFeatures
  def self.make_feature(name)
    case name
    when "base"
      ChuckNorrisJokesBaseFeature.new
    when "test"
      ChuckNorrisJokesTestFeature.new
    else
      ChuckNorrisJokesBaseFeature.new
    end
  end
end
