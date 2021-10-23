import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    center:{
        display: 'flex',
        flex:"row",
        justifyContent: 'center',
    },
    root:{
        padding:10,
    },
    test:{
        color:"red"
    },
    paper:{
        position: "-webkit-sticky",
        position: "sticky",
        top: 0,
        zIndex:5,
    }
});
