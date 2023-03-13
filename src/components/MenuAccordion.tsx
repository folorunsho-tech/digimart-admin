import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";

type Props = {
  selected: string;
  menu: {
    name: string;
    icon: JSX.Element;

    children: {
      name: string;
      path: string;
    }[];
  }[];
  baseUrl: string;
  handleClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
};
export default function MenuAccordion({ selected, menu, handleClick }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <nav className="w-full space-y-6">
      {menu?.map((menuItem) => (
        <Accordion
          key={menuItem.name}
          expanded={expanded === menuItem.name}
          onChange={handleChange(menuItem.name)}
          disableGutters
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            margin: 0,
            width: "100%",
            border: "none",
          }}
        >
          <AccordionSummary
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: 0,
              margin: 0,
              marginBottom: -2,
              justifyContent: "space-between",
              fontWeight: "bold",
              border: "none",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${menuItem.name}-content`}
            id={`${menuItem.name}-header`}
          >
            <h3 className="text-sm flex gap-2 items-center w-full">
              {menuItem.icon}
              {menuItem.name}
            </h3>
          </AccordionSummary>

          {menuItem.children.map((child) => (
            <AccordionDetails
              key={`${menuItem.name}-${child.name}`}
              sx={{
                padding: 0,
                paddingTop: 2,
                fontWeight: "bold",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <NavLink
                to={child.path}
                onClick={handleClick}
                className={({ isActive }) =>
                  isActive
                    ? "p-2  pr-28 text-sm font-bold text-indigo-500 bg-indigo-100 border-l-4 border-indigo-500"
                    : "p-2  pr-28 text-sm font-bold "
                }
              >
                {child.name}
              </NavLink>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </nav>
  );
}
