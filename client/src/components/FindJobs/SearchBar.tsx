import {
  Avatar,
  Checkbox,
  Combobox,
  Group,
  MultiSelect,
  MultiSelectProps,
  Text,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const usersData: Record<string, { image: string; email: string }> = {
  "Emily Johnson": {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    email: "emily92@gmail.com",
  },
  "Ava Rodriguez": {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    email: "ava_rose@gmail.com",
  },
  "Olivia Chen": {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
    email: "livvy_globe@gmail.com",
  },
  "Ethan Barnes": {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    email: "ethan_explorer@gmail.com",
  },
  "Mason Taylor": {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    email: "mason_musician@gmail.com",
  },
};

const renderMultiSelectOption: MultiSelectProps["renderOption"] = ({
  option, checked
}) => {
  console.log(option)
  return (
    <Combobox.Option value={option.value}>
      <Group gap="sm">
        <Checkbox
          size="xs"
          color="brightSun.4"
          checked={checked}
          aria-hidden
          tabIndex={-1}
          style={{ pointerEvents: "none" }}
        />
        <span>{option.value}</span>
      </Group>
    </Combobox.Option>
  );
};

const SearchBar = () => {

  return (
    <div>
      <MultiSelect
        renderOption={renderMultiSelectOption}
        variant="unstyled"
        label=""
        placeholder="Job Title"
        data={["React", "Angular", "Vue.js"]}
        searchable
        nothingFoundMessage="Nothing found..."
        leftSection={
          <div className="text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-1">
            <IconSearch />
          </div>
        }
        checkIconPosition="left"
      />
    </div>
  );
};

export default SearchBar;
