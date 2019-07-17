import React, { useState } from "react"
import Layout from "../../../components/layout/layout"
import GoogleMapReact from "google-map-react"
import styles from "./TIA.module.css"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"
import Marker from "../../../components/marker"
const getAllTIA = data => {
  return data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.doc_type === "sustain_technology_in_action"
  )
}

const getAllCategories = data => {
  const cats = []
  data.forEach(e => {
    e.node.frontmatter.categories.forEach(cat => {
      if (!cats.includes(cat)) {
        cats.push(cat)
      }
    })
  })
  return cats
}

// Removing API key from GoggleMap component will give us development map
// Leaving API key in there will give us production map but we have to
// Whitelist localhost during development
const TechnologyInAction = ({ data }) => {
  const [currTech, setCurrTech] = useState("")

  const tia = getAllTIA(data)
  const currTechData = tia.filter(e => e.node.frontmatter.title == currTech)
  const cats = getAllCategories(tia)
  const tiaList = cats.map((cat, idx) => (
    <Accordion>
      <AccordionButton defaultExpanded controls={`tia-section-${idx}`}>
        {cat}
      </AccordionButton>
      <AccordionContent defaultHidden={false} id={`tia-section-${idx}`}>
        <table className="usa-table">
          <tbody>
            {tia
              .filter(e => e.node.frontmatter.categories.includes(cat))
              .map(e => (
                <tr>
                  <td onClick={() => setCurrTech(e.node.frontmatter.title)}>
                    {e.node.frontmatter.title}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </AccordionContent>
    </Accordion>
  ))
  console.log(currTechData)
  console.log(cats)
  return (
    <Layout path="/sustain/technology-in-action/">
      <div className={styles.mapContainer}>
        <GoogleMapReact
          defaultCenter={{ lat: 37.27587, lng: -96.6532023 }}
          defaultZoom={4}
          bootstrapURLKeys={{ key: "AIzaSyB6afAiSLEi2h7axw-swZWNXipUYdwT0NA" }}
        >
          {tia.map(e => {
            const [elat, elng] = e.node.frontmatter.project_coordinates.split(
              ","
            )
            return <Marker tiaData={e} lat={elat} lng={elng} />
          })}
        </GoogleMapReact>
      </div>
      <div className={styles.listContainer}>
        {currTech == "" ? (
          tiaList
        ) : (
          <>
            <button onClick={() => setCurrTech("")}>Back to list</button>
            <div
              style={{ padding: 10 }}
              class={"md"}
              dangerouslySetInnerHTML={{ __html: currTechData[0].node.html }}
            />
          </>
        )}
      </div>
    </Layout>
  )
}
export default TechnologyInAction

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            carousel_images {
              publicURL
            }
            title
            doc_type
            project_coordinates
            categories
          }
          html
        }
      }
    }
  }
`
