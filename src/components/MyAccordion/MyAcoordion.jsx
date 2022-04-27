import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";

export default function MyAccordion() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2 className="benefit-title">FAQ</h2>
      <Container>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Will I get certificate ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At the end of the level, our students receive certificates
              according to their level.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How much does training cost?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Contact our Sales executive they can help you about Course fee,
              and Discount offers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How long do cources last?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Each level lasts 2 months. Each level contains 40 lessons, the
              lesson lasts 1 hour 20 minutes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Will you Provide Study materials & mock tests?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. All materials are provided by our cources.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How many students in the group?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Mini-groups consist of 2 to 3 students Groups consist of 6 to 10
              students.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
