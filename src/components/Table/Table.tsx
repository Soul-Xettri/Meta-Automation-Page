import { Table, Checkbox, Switch } from "@mantine/core";
import { useState } from "react";
import { BrandMessenger } from "tabler-icons-react";
const elements = [
  { position: 6, goal: "Greet people", name: "Instant reply" },
  {
    position: 7,
    goal: "Share information",
    name: "Frequently asked questions",
  },
  {
    position: 39,
    goal: "Organize messages",
    name: "Identify unanswered messages",
  },
  { position: 56, goal: "Share information", name: "Hours" },
];

export function Tables() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={
        selectedRows.includes(element.position)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        <Switch
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter(
                    (position) => position !== element.position
                  )
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.goal}</Table.Td>
      <Table.Td>
        <BrandMessenger strokeWidth={0.9} color="blue" />
      </Table.Td>
      <Table.Td>
        <a>edit</a>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped verticalSpacing="sm">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Status</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Goal</Table.Th>
          <Table.Th>Channel</Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
