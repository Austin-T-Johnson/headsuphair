import React, { useState } from "react";
import Contact from "./Contact";
import servicesPricing from "../JSON/services-pricing.json";
import nailServices from "../JSON/nail-services.json";
import servicesCard from "../JSON/services-card.json";
import beautyServices from "../JSON/beauty-services.json"
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
  const [expanded, setExpanded] = useState(true);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="background"></div>
      <div className="services-container">
      <span className="services-header-txt">Our Services</span>
        <div className="services-header-img"></div>
        {/* <div className="services-info-container">
          {servicesCard.map((data, idx) => {
            return (
              <div className="services-info" key={idx}>
                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>
                <div className="services-info-txt-container">
                  <p className="services-info-p">{data.info}</p>
                </div>
                <h3>{data.subinfo}</h3>
              </div>
            );
          })}
        </div> */}

        <div className="services-card-container">
          <div className="services-card">
            <Card sx={{ maxWidth: 845 }}>
              <CardHeader title="Hair Services" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  We offer the largest selection of hair services in the
                  Coachella Valley, click the dropdown below to see our full
                  list.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  {/* <ExpandMoreIcon /> */}
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  {servicesPricing.map((service) => {
                    return <Typography paragraph>{service.txt}</Typography>;
                  })}
                </CardContent>
              </Collapse>
            </Card>
          </div>

          <div className="services-card">
            <Card sx={{ maxWidth: 845 }}>
              <CardHeader title="Nail Services" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Our licenced nail technician specializes in pedicures,
                  manicures, nail art, and more. Click the dropdown to see a
                  full list of services.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  {/* <ExpandMoreIcon /> */}
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  {nailServices.map((service) => {
                    return <Typography paragraph>{service.txt}</Typography>;
                  })}
                </CardContent>
              </Collapse>
            </Card>
          </div>

          <div className="services-card">
            <Card sx={{ maxWidth: 845 }}>
              <CardHeader title="Beauty Services" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Our beauty technician specializes in all your beauty needs. Click the dropdown to see a
                  full list of services.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  {/* <ExpandMoreIcon /> */}
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  {beautyServices.map((service) => {
                    return <Typography paragraph>{service.txt}</Typography>;
                  })}
                </CardContent>
              </Collapse>
            </Card>
          </div>

         
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
