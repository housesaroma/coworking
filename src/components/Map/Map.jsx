import React from "react";

const Map = () => {
    return (
        <div>
            <iframe
                title="map"
                src="https://yandex.ru/map-widget/v1/?ll=60.653320%2C56.844058&mode=whatshere&whatshere%5Bpoint%5D=60.650522%2C56.845022&whatshere%5Bzoom%5D=17&z=17.21"
                width="100%"
                frameborder="1"
                allowfullscreen="true"
                style={{ position: "relative", aspectRatio: 19/11 }}
            ></iframe>
        </div>
    );
};

export default Map;
