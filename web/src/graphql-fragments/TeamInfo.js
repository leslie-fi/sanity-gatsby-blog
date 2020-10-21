import { graphql } from "gatsby";

export const TeamInfo = graphql`
  fragment TeamInfo on SanityTeamPage {
    id
    navMenu {
      ...NavMenu
    }
    _rawBody(resolveReferences: { maxDepth: 10 })
    _rawContent(resolveReferences: { maxDepth: 10 })
    title
  }
`;
