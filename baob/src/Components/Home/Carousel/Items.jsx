import { Paper } from "@material-ui/core"



function Item({ item }) {
    return (
        <Paper>
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "60vh" }} />
        </Paper>
    )
}

export default Item