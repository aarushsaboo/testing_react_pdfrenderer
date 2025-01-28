// src/components/PDF/PDFDownload/index.js
import { PDFDownloadLink } from "@react-pdf/renderer"
import MyDocument from "../MyDocument"
import { styles } from "./styles"

const PDFDownload = () => (
  <div className={styles.container}>
    <h1>My PDF Generator</h1>
    <PDFDownloadLink
      document={<MyDocument />}
      fileName="example.pdf"
      className={styles.downloadLink}
    >
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  </div>
)

export default PDFDownload
