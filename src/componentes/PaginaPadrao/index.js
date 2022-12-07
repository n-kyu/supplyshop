import { Outlet } from "react-router-dom";

const { default: Banner } = require("componentes/Banner");

function PaginaPadrao() {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}

export default PaginaPadrao