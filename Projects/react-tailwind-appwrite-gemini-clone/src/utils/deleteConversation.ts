import { act } from "react";

const deleteConversation = async ({ id, title, submit }: any) => {
  const deleteConversation = confirm(
    `
        Delete chat? \n\nYou'll no longer see this chat here. 
        This will also delete related activity like prompts, responses.
        `,
  );
  if (!deleteConversation) return;

  submit(
    {
      request_type: 'delete_conversation',
      conversationId: id,
      conversation_title: title,
    },
    {
      method: 'DELETE',
      encType: 'application/x-www-form-urlencoded',
      action: '/',
    },
  );
  console.log(`Deleting conversation: ${id}`);
};

export default deleteConversation;
