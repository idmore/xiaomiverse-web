import posts from './posts'
import users from './users'
import auth from './auth'
import tag from './tag'
import feed from './feed'

export default (route) => {
  posts(route)
  feed(route)
  auth(route)
  tag(route)
}
