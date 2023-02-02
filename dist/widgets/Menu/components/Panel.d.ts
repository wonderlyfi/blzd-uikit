import React from "react";
import { MenuEntry, PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
    addictionals: MenuEntry[];
}
declare const Panel: React.FC<Props>;
export default Panel;
