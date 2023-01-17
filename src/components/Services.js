import React, { useState } from "react";
import Contact from "./Contact";
import servicesCard from "../JSON/services-card.json";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Services = () => {
  const [expanded, setExpanded] = useState({});
  const [isExpanded, setIsExpanded] = useState(true);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(180deg)" : "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (id) => {
    setExpanded((expanded) => ({
      ...expanded,
      [id]: !expanded[id],
    }));
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  };

  return (
    <>
      <div className="background"></div>
      <div className="services-container">
      <div className="services-header-img-wrapper">
        <div className="services-header-img"></div>
        <span className="services-header-txt">Our Services</span>
      </div>
        <div className="services-card-container">
          {servicesCard.map((service, index) => {
            return (
              <div className="services-card" key={index}>
                <Card sx={{ maxWidth: 845 }}>
                  <CardHeader title={service.title} />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {service.info}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <ExpandMore
                      expand={isExpanded}
                      onClick={(id) => handleExpandClick(service.id)}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse
                    in={expanded[service.id]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CardContent>
                      <div className="service-card-info-wrapper">
                        <div className="service-card-text-left">
                          {service.txt.map((txt) => {
                            return (
                              <Typography paragraph key={index}>
                                {txt}
                              </Typography>
                            );
                          })}
                        </div>
                        <div className="service-card-prices-right">
                          {service.price.map((price) => {
                            return (
                              <Typography paragraph key={index}>
                                {price}
                              </Typography>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="disclaimer">
          <h3>
            Our prices vary depending upon the length of hair and level of
            stylist. Prices subject to change without notice.
          </h3>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Services;
