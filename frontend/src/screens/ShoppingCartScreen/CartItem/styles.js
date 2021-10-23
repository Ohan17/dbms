import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    root:{
        height:'150px',
        padding:10,
    },
    image:{
        height:"100%",
        width:"100%",
    },
    product:{
        height:"100%",
        width:"100%",
        display:"flex",
        alignItems: "center",
        justifyContent:"center",
    },
    center:{
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        padding:10,
    },
    mid:{
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",
        display:"flex"
    },
    rootofroot:{
        marginTop:10,
        marginBottom:10,
    },
    title:{
        marginLeft:70,
    }
});