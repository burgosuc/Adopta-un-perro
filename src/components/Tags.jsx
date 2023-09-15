import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Tags = ({ bgBadge, textBadge }) => {
  return (
    <Stack
      className="d-flex justify-content-center"
      direction="horizontal"
      gap={1}
    >
      <Badge className="p-2 mb-2 w-50" bg={bgBadge}>
        {textBadge}
      </Badge>
    </Stack>
  );
};

export default Tags;
