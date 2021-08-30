import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            google-site-verification: 'K-i3xLkZzxse8osTQPjkPbsIkUU2U89_zK4tKJ_8TGQ'
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
