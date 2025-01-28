// src/components/PDF/PDFDownload.js
import { PDFDownloadLink } from "@react-pdf/renderer"
import MyDocument from "./MyDocument"

const PDFDownload = () => (
  <div>
    <h1>My PDF Generator</h1>
    <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  </div>
)

export default PDFDownload
