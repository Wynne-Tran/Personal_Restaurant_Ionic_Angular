import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
    },
    titleText: {
        fontFamily: 'fruktur-regular',
        fontSize: 15,
        color: 'black',
        textAlign: "center",
        marginLeft: 10,
    },
    degreeText: {
        fontFamily: 'fruktur-regular',
        fontSize: 30,
        color: 'green',
        textAlign: "center",
 
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,

    },
    
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'pink',
    },
    buttonText:{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 10,

    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item:{
      backgroundColor:'#00ccbb',
      padding: 20,
      marginHorizontal:8,
      marginVertical:8,
    },
    title:{
      fontSize:25,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    image: {
        width: 80, 
        height: 80,
        marginTop: -10,
       
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
      }
    ,
    card : {
        borderRadius: 16,
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        backgroundColor: '#00000000',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 5,
        marginVertical: 3,
    }
  });
  
  

