import model from '@/lib/googleAI';

const getConversationTitle = async (userPrompt: string) => {
  try {
    const result = await model.generateContent(`
        Given a user prompt, generate a concise and informative title that accurately 
        describes the conversation. Consider keywords, topics, and the overall intent of the
        prompt. Response in plain text format, not markdown.    

        Prompt: ${userPrompt} `);

    return result.response.text();
  } catch (error) {
    console.log(`Error in getConversationTitle: ${error}`);
  }
};

const getAiResponse = async (userPrompt: string, chats = []) => {
  try {
    model.generationConfig = {
      temperature: 1.5,
    };
    const chat = model.startChat({ history: chats });
    const result = await chat.sendMessage(userPrompt);
    return result.response.text();
  } catch (error) {
    console.log(`Error in getAiResponse: ${error}`);
  }
};

export { getConversationTitle, getAiResponse };
