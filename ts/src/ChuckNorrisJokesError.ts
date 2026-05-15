
import { Context } from './Context'


class ChuckNorrisJokesError extends Error {

  isChuckNorrisJokesError = true

  sdk = 'ChuckNorrisJokes'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ChuckNorrisJokesError
}

