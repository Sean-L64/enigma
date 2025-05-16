interface Nav{
    title: string,
    path: string,
    external?: boolean,
    children: Array<Nav>,
}
const NavRoutes: Nav[] =[
    {
        title: "Alan Turing",
        path: "",
        children: [

        ],
    },
    {
        title: "ENIGMA",
        path: "",
        children: [

        ],
    },
    {
        title: "Function",
        path: "",
        children: [

        ],
    },
    {
        title: "Outcome",
        path: "",
        children: [

        ],
    },
    {
        title: "About",
        path: "",
        children: [

        ],
    },
]
export default NavRoutes;