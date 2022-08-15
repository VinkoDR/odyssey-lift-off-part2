
const resolvers = {
    Query: {
        // returns an array of tracks that will be used to populate
        // the homepage grid of our client
        // parameters will be in that order:
        //parents, args, context, info
        //the convention is to cal the unused params with underscore
        // we can delete the last param if we don't need it
        tracksForHome: (_, __, {dataSources}) => {
          return  dataSources.trackAPI.getTracksForHome()
        }
    },
    //key is Track for the type designed in the schema
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId)
        }

    }

}

module.exports = resolvers