import { Contact } from "../modules/contact";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { routesName } from "../router/RoutesList";
import { RoomData } from "../modules/room/room";


export const CallingRoom = () => {
    const { navigationAsPerSignedStatus } = useContext(
        AppContext
    ) as ContextProps;

    // useEffect(() => {
    //     navigationAsPerSignedStatus(routesName.contact);
    // }, []);

    return (
        <DigiCareDrawer>
            <RoomData />
        </DigiCareDrawer>
    );
};
