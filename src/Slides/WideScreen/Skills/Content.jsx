import { Grid } from "@nextui-org/react";
import SkillCard from "./Card.jsx";
import {technologies} from "../../../Constants/constants.jsx";

const SkillsContent = () => {
    return (
        <div style={{overflowX: "scroll", scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}>
            <div style={{display: "flex"}}>
                <Grid.Container gap={2} justify="center" alignItems="center">
                    {technologies.map((technology, id) => {
                        return (
                            <Grid key={id}>
                                <SkillCard name={technology.name} icon={technology.icon} />
                            </Grid>
                        );
                    })}
                </Grid.Container>
            </div>
        </div>
    );
};



export default SkillsContent;
