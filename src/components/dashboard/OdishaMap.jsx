import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import { Tooltip } from 'react-tooltip';
import geoUrl from '../../assets/odisha_districts.json';

const OdishaMap = ({ onDistrictSelect, selectedDistrict }) => {
    const handleDistrictClick = (geo) => {
        const districtName = geo.properties.district || geo.properties.dtname || geo.properties.NAME_2;
        onDistrictSelect(districtName);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 4000,
                    center: [84.5, 20.5]
                }}
                width={600}
                height={400}
            >
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const districtName = geo.properties.district || geo.properties.dtname || geo.properties.NAME_2;
                                const isSelected = selectedDistrict === districtName;

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        data-tooltip-id="map-tooltip"
                                        data-tooltip-content={districtName}
                                        onClick={() => handleDistrictClick(geo)}
                                        style={{
                                            default: {
                                                fill: isSelected ? "#3b82f6" : "#cbd5e1",
                                                stroke: "#ffffff",
                                                strokeWidth: 0.5,
                                                outline: "none",
                                                transition: "all 0.3s"
                                            },
                                            hover: {
                                                fill: "#0ea5e9",
                                                stroke: "#ffffff",
                                                strokeWidth: 1,
                                                outline: "none",
                                                cursor: "pointer",
                                                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
                                            },
                                            pressed: {
                                                fill: "#0284c7",
                                                stroke: "#ffffff",
                                                strokeWidth: 1,
                                                outline: "none",
                                            },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <Tooltip
                id="map-tooltip"
                style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '12px',
                    padding: '8px 12px',
                    backdropFilter: 'blur(4px)'
                }}
            />
        </div>
    );
};

export default OdishaMap;
