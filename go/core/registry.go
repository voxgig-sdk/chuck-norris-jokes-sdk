package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCategoryEntityFunc func(client *ChuckNorrisJokesSDK, entopts map[string]any) ChuckNorrisJokesEntity

var NewJokeEntityFunc func(client *ChuckNorrisJokesSDK, entopts map[string]any) ChuckNorrisJokesEntity

var NewSearchEntityFunc func(client *ChuckNorrisJokesSDK, entopts map[string]any) ChuckNorrisJokesEntity

