# ChuckNorrisJokes SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ChuckNorrisJokesUtility.registrar = ->(u) {
  u.clean = ChuckNorrisJokesUtilities::Clean
  u.done = ChuckNorrisJokesUtilities::Done
  u.make_error = ChuckNorrisJokesUtilities::MakeError
  u.feature_add = ChuckNorrisJokesUtilities::FeatureAdd
  u.feature_hook = ChuckNorrisJokesUtilities::FeatureHook
  u.feature_init = ChuckNorrisJokesUtilities::FeatureInit
  u.fetcher = ChuckNorrisJokesUtilities::Fetcher
  u.make_fetch_def = ChuckNorrisJokesUtilities::MakeFetchDef
  u.make_context = ChuckNorrisJokesUtilities::MakeContext
  u.make_options = ChuckNorrisJokesUtilities::MakeOptions
  u.make_request = ChuckNorrisJokesUtilities::MakeRequest
  u.make_response = ChuckNorrisJokesUtilities::MakeResponse
  u.make_result = ChuckNorrisJokesUtilities::MakeResult
  u.make_point = ChuckNorrisJokesUtilities::MakePoint
  u.make_spec = ChuckNorrisJokesUtilities::MakeSpec
  u.make_url = ChuckNorrisJokesUtilities::MakeUrl
  u.param = ChuckNorrisJokesUtilities::Param
  u.prepare_auth = ChuckNorrisJokesUtilities::PrepareAuth
  u.prepare_body = ChuckNorrisJokesUtilities::PrepareBody
  u.prepare_headers = ChuckNorrisJokesUtilities::PrepareHeaders
  u.prepare_method = ChuckNorrisJokesUtilities::PrepareMethod
  u.prepare_params = ChuckNorrisJokesUtilities::PrepareParams
  u.prepare_path = ChuckNorrisJokesUtilities::PreparePath
  u.prepare_query = ChuckNorrisJokesUtilities::PrepareQuery
  u.result_basic = ChuckNorrisJokesUtilities::ResultBasic
  u.result_body = ChuckNorrisJokesUtilities::ResultBody
  u.result_headers = ChuckNorrisJokesUtilities::ResultHeaders
  u.transform_request = ChuckNorrisJokesUtilities::TransformRequest
  u.transform_response = ChuckNorrisJokesUtilities::TransformResponse
}
