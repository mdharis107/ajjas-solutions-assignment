import React, { useState } from "react";
import { Box, Textarea, Button } from "@chakra-ui/react";

const CommentForm = ({ parentId, onsubmit }) => {
  const [content, setContent] = useState();

  const handleSubmit = () => {
    if (content.trim()) {
      onsubmit({ content }, parentId);
      setContent("");
    }
  };

  return (
    <>
      <Box mt={4}>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment here..."
        />
        <Button mt={2} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default CommentForm;
