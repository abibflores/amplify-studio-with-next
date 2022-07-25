import React from "react";
import ActionCard from "../ui-components/ActionCard";
import NavBar from "../ui-components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="Container">
                <ActionCard />
                <ActionCard />
                <ActionCard />
            </div>
            <style jsx>
                {`
                    .Container {
                        display: flex;
                        gap: 20px;
                        align-items: center;
                        flex-wrap: gap;
                    }

                    @media (max-width: 760px) {
                        .Container {
                            flex-direction: column;
                        }
                    }
                `}
            </style>
        </>
    );
}

export default Home;