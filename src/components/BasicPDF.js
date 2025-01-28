// src/components/BasicPDF.js
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer"

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  text: {
    fontSize: 14,
  },
})

// Create PDF Document component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.text}>My first PDF!</Text>
      </View>
    </Page>
  </Document>
)

// Create component that uses the PDF
const BasicPDF = () => (
  <div>
    <h1>My PDF Generator</h1>
    <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  </div>
)

export default BasicPDF
