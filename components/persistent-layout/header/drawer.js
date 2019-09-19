function Drawer({open, closeDrawer}) {
    return (
        <div onClick={closeDrawer}>{open ? "Menu is open" : "Menu is closed"}</div>
    )
}

export default Drawer