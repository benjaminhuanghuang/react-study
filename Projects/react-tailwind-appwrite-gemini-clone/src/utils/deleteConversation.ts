const deleteConversation = async ({ id, title, submit }: any) => {
  const deleteConversation = confirm(
    `
        Delete chat? \n\nYou'll no longer see this chat here. 
        This will also delete related activity like prompts, responses.
        `,
  );
  if(!deleteConversation) return;

  console.log(`Deleting conversation: ${id}`);
};

export default deleteConversation;