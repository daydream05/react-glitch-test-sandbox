import React from "react"
import { Link } from "gatsby"
import { Canvas, Dom } from "react-three-fiber"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageTexture from "../components/three/ImageTexture"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Canvas>
        <ImageTexture url="https://images.ctfassets.net/hdrc9tlu74l0/4gfAcYO5KIgHnxXN8HQwTA/c5ec8be55c30856b82f117389f999fad/person.png" />
      </Canvas>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
