const pages = {
  COS: [
    {
      caption: "About COS",
      slug: "/cos/",
    },
    {
      caption: "Army Standards",
      slug: "/cos/army-standards",
    },
    {
      caption: "Standard Designs",
      slug: "/cos/standard-designs",
    },
    {
      caption: "Points of Contact",
      slug: "/cos/poc",
    },
  ],
  CRST: [
    {
      slug: "/crst/",
      caption: "About CRST",
    },
    {
      caption: "Subject Matter Experts",
      slug: "/crst/subject-matter-experts",
    },
  ],
  MODELRFP: [
    {
      caption: "About Model RFP",
      slug: "/model-rfp/",
    },
    {
      caption: "MILCON D-B",
      slug: "/model-rfp/milcon",
    },
    {
      caption: "Small Projects",
      slug: "/model-rfp/small-projects",
    },
  ],
  SUSTAIN: [
    {
      caption: "About Engineering & Construction Sustainability ",
      slug: "/sustain/",
    },
    {
      caption: "Centers of Expertise POC",
      slug: "/sustain/poc",
    },
    {
      caption: "Centers of Expertise",
      slug: "/sustain/cx",
    },
    {
      caption: "Knowledge Resources",
      slug: "/sustain/kr",
    },
    {
      caption: "Upcoming Events",
      slug: "/sustain/events",
    },
    {
      caption: "News & Announcements",
      slug: "/sustain/news",
    },
    {
      caption: "Webinars",
      slug: "/sustain/webinars",
    },
    {
      caption: "Technology in Action",
      slug: "/sustain/technology-in-action/",
    },
  ],
}

function getAllOfDocType(data, docType) {
  return data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.doc_type == docType
  )
}

function getAllFacilitiesForCOS(data, cos) {
  return data.filter(itm => itm.node.frontmatter.facility_cos_short_name == cos)
}

function createFacilityPageIndex(data, cos) {
  const facilities = getAllFacilitiesForCOS(data, cos.cos_short_name)
  let p = [
    {
      slug: cos.slug,
      caption: "About " + cos.cos_long_name,
    },
  ]

  facilities.forEach(e => {
    p.push({
      slug: e.node.frontmatter.slug,
      caption: e.node.frontmatter.facility_long_name,
    })
  })
  return p
}

function getCOSPages(data) {
  const cos = getAllOfDocType(data, "cos_page")
  const facilities = getAllOfDocType(data, "facility_page")

  let p = []

  cos.forEach(e => {
    p.push({
      slug: e.node.frontmatter.slug,
      caption: e.node.frontmatter.cos_long_name,
      children: createFacilityPageIndex(facilities, e.node.frontmatter),
    })
  })

  return p
}

function getPages(data, currSlug) {
  const allPages = JSON.parse(JSON.stringify(pages))
  const cosPages = getCOSPages(data)
  allPages.COS = allPages.COS.concat(cosPages)
  console.log(allPages)

  return allPages
}

export default getPages