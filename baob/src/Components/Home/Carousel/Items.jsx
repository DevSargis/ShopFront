import { Paper } from "@material-ui/core"



function Item({ item }) {
    return (
        <Paper>
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "60vh" }} />
            {/* <div className='description' style={{ display: "flex", justifyContent: "center", alignItems:"center", flexDirection:"column" }}>

                <h2>{item.title}</h2>
                <Button variant="contained">
                    Check it out!
                </Button>
            </div> */}
        </Paper>
    )
}

export default Item