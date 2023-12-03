import { Card, Image, Text, Group, Button } from "@mantine/core";
import classes from "./Card.module.css";

type CardData = {
  image: string;
  label: string;
  text: string;
  goal: string;
};

const cardData: CardData = {
  // your default values or leave it empty
  image: "",
  label: "",
  text: "",
  goal: "",
};

export function Cards({ image, label, text, goal }: CardData) {
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section
        className={classes.imageSection}
        style={{ height: "218px" }}
      >
        <Image src={image} />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{label}</Text>
          <Text fz="xs" c="dimmed" mt="xs">
            {text}
          </Text>
          <Text fz="xs" mt="xs" fw={500}>
            {goal}
          </Text>
        </div>
      </Group>
      <Card.Section className={classes.section}>
        <Group gap={30}>
          <Button
            style={{ flex: 1 }}
            className="bg-[#f8f9fb] text-black border-1 border-inherit"
          >
            Try it
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
