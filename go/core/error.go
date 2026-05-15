package core

type ChuckNorrisJokesError struct {
	IsChuckNorrisJokesError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewChuckNorrisJokesError(code string, msg string, ctx *Context) *ChuckNorrisJokesError {
	return &ChuckNorrisJokesError{
		IsChuckNorrisJokesError: true,
		Sdk:              "ChuckNorrisJokes",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ChuckNorrisJokesError) Error() string {
	return e.Msg
}
