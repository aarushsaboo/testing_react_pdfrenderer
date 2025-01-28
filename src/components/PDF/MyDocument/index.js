// src/components/PDF/MyDocument/index.js
import { Document, Page, Text, View } from "@react-pdf/renderer"
import { styles } from "./styles"

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.text}>My first PDF!</Text>
      </View>
    </Page>
  </Document>
)

export default MyDocument
