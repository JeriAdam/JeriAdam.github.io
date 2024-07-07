import Stepper from "../Stepper/Stepper";
import Facet from "../Facet/Facet";
import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "./ProductList";
function Shop(){
    return(
        <>
         <Stepper/ >
         <Container>
            <div className="row">
                <div className="col-3">
                <Facet />
                </div>
                <div className="col-9">
                    <ProductList />
                </div>
            </div>
         </Container>
        </>
    );
}

export default Shop