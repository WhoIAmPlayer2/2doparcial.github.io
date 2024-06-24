import { StyleSheet } from "react-native";

export default StyleSheet.create({
    indexcontainer: {
        flex: 1, // Allow container to fill the entire screen
        backgroundColor: "#f0f0f0", // Light background color
        padding: 20, // Add some padding for visual spacing
      },
      countercounterText: {
        fontSize: 32,
        backgroundColor: "#222",
        fontWeight: "bold",
        color: "#fff",
        padding:8,
        textAlign:"center",
        marginBottom: 20,
      },
      counterbuttonscontainers:{
        alignItems: "center",
        flexDirection:"row",
        margin:"auto",
        gap:20
      },
      counterbuttonText: {
        color: "#fff",
        fontWeight: "600",
      },
      counterincrementButton: {
        backgroundColor: "#05b",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      counterdecrementButton: {
        backgroundColor: "#b50",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      hscontainer: {
        flex: 1, // Allow container to fill the entire screen
      },
      hsheader: {
        flexDirection: "row", // Arrange elements horizontally
        justifyContent: "space-between", // Distribute evenly
        alignItems: "center", // Align vertically in center
        marginBottom: 20, // Add some margin below the header
      },
      hsheaderTitle: {
        fontSize: 20, // Set title font size
        fontWeight: "bold", // Make title bold
      },
      MenuheaderTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#333',
      },
      Menulink: {
        fontSize: 18,
        color: '#1e90ff',
        marginBottom: 10,
        textDecorationLine: 'underline',
        textAlign: 'center',
      },
    
});