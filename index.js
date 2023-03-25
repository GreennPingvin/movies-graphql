import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import resolvers from './graphql/resolvers'

const yoga = createYoga({
  schema: createSchema({
    typeDefs: readFileSync(join(__dirname, 'graphql/schema.graphql'), 'utf8'),
    resolvers,
  }),
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})
