import React from "react";
import { MenuEntry, PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    addictionals: MenuEntry[];
    isMobile: boolean;
}
declare const PanelFooter: React.FC<Props>;
export default PanelFooter;
