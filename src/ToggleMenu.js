import DrawerComponent from "./DrawerComponent";
import NavBar from "./NavBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useState } from "react";

const ToggleMenu = (props) => {
    const [openDrawer, setOpenDrawer] = useState(true);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <>
            {matches ? (
                <DrawerComponent
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                />
            ) : (
                <NavBar />
            )}
        </>
    );
};
export default ToggleMenu;
