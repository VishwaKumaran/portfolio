import { Card, Col, Text } from "@nextui-org/react";

const SkillCard = ({name, icon}) => {
    return (
        <Card style={{ display: 'inline-block', marginRight: '16px', height: "$25" }}>
            <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                <Col>
                    <Text size={18} weight="extrabold" transform="uppercase">
                        {name}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src={icon}
                width="100%"
                height={340}
                alt={name}
            />
        </Card>
    );
};

export default SkillCard;
