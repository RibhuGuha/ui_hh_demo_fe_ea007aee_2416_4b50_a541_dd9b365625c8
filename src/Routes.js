import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PropertyCreate, PropertyEdit, PropertyView, 
Bookings, 
PropertyTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="Properties/view/:id" element={<PropertyView {...props} title={'View Property'} />} />
                        <Route path="Properties/edit/:id" element={<PropertyEdit {...props} title={'Edit Property'} />} />
                        <Route path="Properties/create" element={<PropertyCreate {...props} title={'Create Property'} />} />

                                                                                                                                                                                                        </Routes>
    )

};

export default Component;