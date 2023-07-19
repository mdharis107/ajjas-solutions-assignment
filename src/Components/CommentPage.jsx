import React, { useState } from "react";
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";

const CommentPage = () => {
  //   const [content, setContent] = useState([]);

  const handleUpVote = () => {};

  const handleDownVote = () => {};

  const handleReply = () => {};

  return (
    <>
      <Box borderWidth={1} p={4} borderRadius={"md"} mb={4}>
        <Flex mt={4} gap={5}>
          <Button onClick={handleUpVote}>UpVote</Button>
          <Button onClick={handleDownVote}>DownVote</Button>
          <Spacer />
          <Button onClick={handleReply}>Reply</Button>
        </Flex>
        <Box ml={4} mt={2}>
          {/* replies */}
        </Box>
        <Text>Posted by : user</Text>
      </Box>
    </>
  );
};

export default CommentPage;
