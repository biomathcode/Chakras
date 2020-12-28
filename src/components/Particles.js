import React from 'react';
import Particles from 'react-particles-js'

function ParticleContainer () {
    return (
        (
            <div style={{
                positon: 'absolute',
                top: 0,
                left: 0,
                width: "100%",
                heigth: "100%"
            }}
            >
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 200, 
                                "density": {
                                    enable: true,
                                    value_area: 3600 
                                },
                            }
                        },

                        "retina_detect": true
                }}
            />
            </div>
        )
    )
} 

export default ParticleContainer;