import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type User {
    email: String!
    id: ID!
  }

  type Source {
    id: String
    name: String!
  }

  type Articles {
    source: Source
    author: String
    title: String!
    description: String!
    url: String!
    urlToImage: String
    publishedAt: Date!
    content: String
  }

  type News {
    status: String!
    totalResults: Int!
    articles: [Articles!]!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    id: ID!
    user: User!
  }

  type Ingredients{
    text: String!
    weight:  Float!
    image: String!
  }

  type ENERC_KCALS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type FATS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type FASATS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type FATRNS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type FAMSS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type FAPUS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type CHOCDFS {
    label: String!
    quantity: Float!
    unit: String!
  }
  
  type FIBTGS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type SUGARS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type PROCNTS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type CHOLES {
    label: String!
    quantity: Float!
    unit: String!
  }

  type NAS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type CAS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type MGS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type KS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type FES {
    label: String!
    quantity: Float!
    unit: String!
  }

  type ZNS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type PS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type VITA_RAES {
    label: String!
    quantity: Float!
    unit: String!
  }

  type VITCS {
    label: String!
    quantity: Float!
    unit: String!
  }
  
  type THIAS {
    label: String!
    quantity: Float!
    unit: String!
  }
  
  type RIBFS {
    label: String!
    quantity: Float!
    unit: String!
  }
  
  type NIAS {
    label: String!
    quantity: Float!
    unit: String!
  }
  
  type VITB6AS {
    label: String!
    quantity: Float!
    unit: String!
  }
  
  type FOLDFES {
    label: String!
    quantity: Float!
    unit: String!
  }

  type FOLFDS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type FOLACS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type VITB12S {
    label: String!
    quantity: Float!
    unit: String!
  }

  type VITDS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type TOCPHAS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type VITK1S {
    label: String!
    quantity: Float!
    unit: String!
  }

  type WATERS {
    label: String!
    quantity: Float!
    unit: String!
  }

  type TotalNutrients {
    ENERC_KCAL: ENERC_KCALS!
    FAT:FATS!
    FASAT:FASATS!
    FATRN:FATRNS!
    FAMS:FAMSS!
    FAPU:FAPUS!
    CHOCDF:CHOCDFS!
    FIBTG:FIBTGS!
    SUGAR:SUGARS!
    PROCNT:PROCNTS!
    CHOLE:CHOLES!
    NA:NAS!
    CA: CAS!
    MG:MGS!
    K:KS!
    FE:FES!
    ZN:ZNS!
    P:PS!
    VITA_RAE:VITA_RAES!
    VITC:VITCS!
    THIA:THIAS!
    RIBF:RIBFS!
    NIA:NIAS!
    VITB6A:VITB6AS!
    FOLDFE:FOLDFES!
    FOLFD:FOLFDS!
    FOLAC:FOLACS!
    VITB12:VITB12S!
    VITD:VITDS!
    TOCPHA:TOCPHAS!
    VITK1:VITK1S!
    WATER:WATERS!
  }

  type TotalDaily {
    ENERC_KCAL: ENERC_KCALS!
    FAT:FATS!
    FASAT:FASATS!
    CHOCDF:CHOCDFS!
    FIBTG:FIBTGS!
    PROCNT:PROCNTS!
    CHOLE:CHOLES!
    NA:NAS!
    CA: CAS!
    MG:MGS!
    K:KS!
    FE:FES!
    ZN:ZNS!
    P:PS!
    VITA_RAE:VITA_RAES!
    VITC:VITCS!
    THIA:THIAS!
    RIBF:RIBFS!
    NIA:NIAS!
    VITB6A:VITB6AS!
    FOLDFE:FOLDFES!
    VITB12:VITB12S!
    VITD:VITDS!
    TOCPHA:TOCPHAS!
    VITK1:VITK1S!
  }

  type Sub{
    label:String!
    tag:String!
    schemaOrgTag:String!
    total: Float!
    hasRDI: Boolean!
    daily: Float!
    unit:String!
  }

  type Digest {
    label:String!
    tag:String!
    schemaOrgTag:String!
    total: Float!
    hasRDI: Boolean!
    daily: Float!
    unit:String!
    sub: [Sub!]!
  }

  type Recipe {
    uri: String!
    label: String!
    image: String!
    source: String!
    url: String!
    shareAs: String!
    yield:Int!
    dietLabels: [String!],
    healthLabels: [String!],
    cautions: [String!],
    ingredientLines: [String!]
    ingredients: [Ingredients!]!
    calories: Float!
    totalWeight:  Float!
    totalTime: Int!
    totalNutrients: TotalNutrients!
    totalDaily: TotalDaily!
    digest:[Digest!]!
  }

  type Food {
    recipe: Recipe!
    bookmarked: Boolean!
    bought: Boolean!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(sessionId: ID!): Boolean!
  }

  type Query {
    userSession(me: Boolean!): UserSession
    getNews: News
    getFood: [[Food!]!]!
  }
`;

export default typeDefs;
