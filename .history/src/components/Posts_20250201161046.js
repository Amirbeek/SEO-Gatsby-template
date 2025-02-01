import { Card } from "@mui/material";
import React from "react";

export default function Posts(img, url, title, type, date){
    const handleRedirect = (imgUrl) => {
        
    };
    return(
        <Card>
            <Img fluid={img}/>
             <Card.Body>
                <div>
                <span>{type} · {date}</span>
                </div>
             </Card.Body>
        </Card>
    )
}